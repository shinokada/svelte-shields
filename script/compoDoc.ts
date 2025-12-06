import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, basename, extname } from 'path';

interface PropInfo {
	name: string;
	type: string;
	defaultValue: string;
	required: boolean;
}

interface ComponentDoc {
	name: string;
	description: string;
	props: PropInfo[];
	slots: string[];
	events: string[];
	usage: string;
}

interface TypeInfo {
	type: string;
	optional: boolean;
}

/**
 * Escape special regex characters to prevent regex injection
 */
function escapeRegExp(str: string): string {
	return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Infer the type of rest props from the type definition
 */
function inferRestPropsType(typesContent: string, typeName: string): string {
	const escapedTypeName = escapeRegExp(typeName);
	
	// Look for extends clause to find base types
	const extendsMatch = typesContent.match(
		new RegExp(`(?:export\\s+)?interface ${escapedTypeName}\\s+extends\\s+([\\w,\\s]+)\\s*\\{`)
	);
	
	if (extendsMatch) {
		const baseTypes = extendsMatch[1].split(',').map(t => t.trim());
		// Look for common HTML attribute types
		const htmlAttrType = baseTypes.find(t => 
			t.includes('HTMLAttributes') || 
			t.includes('SVGAttributes') ||
			t === 'HTMLImgAttributes'
		);
		if (htmlAttrType) {
			return htmlAttrType;
		}
	}
	
	// Default fallback
	return 'HTMLAttributes';
}

/**
 * Extract props from the script section of a Svelte component
 */
function extractProps(scriptContent: string, typesContent: string): PropInfo[] {
	const props: PropInfo[] = [];
	
	// Match destructured props from $props()
	const propsMatch = scriptContent.match(/let\s*\{([^}]+)\}\s*:\s*(\w+)\s*=\s*\$props\(\)/s);
	
	if (!propsMatch) return props;
	
	const propsString = propsMatch[1];
	const typeName = propsMatch[2];
	
	// Extract type definition from types.ts
	const typeInterface = extractTypeInterface(typesContent, typeName);
	
	// Infer rest props type
	const restPropsType = inferRestPropsType(typesContent, typeName);
	
	// Parse individual props
	const propItems = propsString.split(',').map(p => p.trim()).filter(Boolean);
	
	for (const propItem of propItems) {
		// Handle different prop patterns:
		// 1. prop = defaultValue
		// 2. prop: alias
		// 3. prop: alias = defaultValue
		// 4. ...rest
		
		if (propItem.startsWith('...')) {
			const name = propItem.replace('...', '').trim();
			props.push({
				name,
				type: restPropsType,
				defaultValue: '-',
				required: false
			});
			continue;
		}
		
		const aliasMatch = propItem.match(/(\w+)\s*:\s*(\w+)(?:\s*=\s*(.+))?/);
		const simpleMatch = propItem.match(/(\w+)(?:\s*=\s*(.+))?/);
		
		let propName: string;
		let defaultValue = '-';
		
		if (aliasMatch) {
			propName = aliasMatch[1];
			defaultValue = aliasMatch[3]?.trim() || '-';
		} else if (simpleMatch) {
			propName = simpleMatch[1];
			defaultValue = simpleMatch[2]?.trim() || '-';
		} else {
			continue;
		}
		
		// Clean up default value
		if (defaultValue && defaultValue !== '-') {
			defaultValue = defaultValue.replace(/^['"`]|['"`]$/g, '');
		}
		
		// Get type info from interface
		const typeInfo = typeInterface[propName];
		
		if (!typeInfo) {
			console.warn(`Warning: Could not find type for prop "${propName}"`);
			continue;
		}
		
		// Property is required if it's not optional in the type definition AND has no default value
		const required = !typeInfo.optional && defaultValue === '-';
		
		props.push({
			name: propName,
			type: typeInfo.type,
			defaultValue: defaultValue === '-' ? '-' : `\`${defaultValue}\``,
			required
		});
	}
	
	return props;
}

/**
 * Extract type interface from types.ts content - handles both exported and non-exported interfaces
 */
function extractTypeInterface(
	typesContent: string,
	typeName: string,
	visited: Set<string> = new Set()
): Record<string, TypeInfo> {
	// Prevent infinite recursion
	if (visited.has(typeName)) {
		return {};
	}
	visited.add(typeName);
	
	const typeMap: Record<string, TypeInfo> = {};
	const escapedTypeName = escapeRegExp(typeName);
	
	// Match interface definition - both exported and non-exported
	const interfaceRegex = new RegExp(`(?:export\\s+)?interface ${escapedTypeName}[^{]*\\{([^}]+)\\}`, 's');
	const match = typesContent.match(interfaceRegex);
	
	if (!match) {
		// Check if it's a type from svelte/elements (like HTMLImgAttributes)
		if (typeName === 'HTMLImgAttributes' || typeName.includes('HTML') || typeName.includes('SVG')) {
			// Return empty for now, these are standard HTML attributes
			return typeMap;
		}
		console.warn(`Warning: Could not find interface "${typeName}"`);
		return typeMap;
	}
	
	const interfaceBody = match[1];
	
	// First, handle extends to get base properties
	const extendsMatch = typesContent.match(
		new RegExp(`(?:export\\s+)?interface ${escapedTypeName}\\s+extends\\s+([\\w,\\s]+)\\s*\\{`)
	);
	if (extendsMatch) {
		const baseTypes = extendsMatch[1].split(',').map(t => t.trim());
		for (const baseType of baseTypes) {
			const baseProps = extractTypeInterface(typesContent, baseType, visited);
			// Add base props first (they can be overridden)
			for (const [key, value] of Object.entries(baseProps)) {
				typeMap[key] = value;
			}
		}
	}
	
	// Parse interface properties - look for optional (?) marker
	const propRegex = /(\w+)(\??):\s*([^;]+);/g;
	let propMatch;
	
	while ((propMatch = propRegex.exec(interfaceBody)) !== null) {
		const [, name, optionalMarker, type] = propMatch;
		// Override any base property with the same name
		typeMap[name] = {
			type: type.trim(),
			optional: optionalMarker === '?'
		};
	}
	
	return typeMap;
}

/**
 * Extract existing description from component
 */
function extractDescription(content: string): string {
	const commentMatch = content.match(/<!--[\s\S]*?@component\s*\n([\s\S]*?)(?:##|\[Go to|-->)/);
	if (commentMatch) {
		return commentMatch[1].trim();
	}
	return '';
}

/**
 * Generate markdown table for props
 */
function generatePropsTable(props: PropInfo[]): string {
	if (props.length === 0) return '';
	
	const rows = props.map(prop => {
		const requiredMark = prop.required ? '✓' : '';
		// Escape pipe characters in types for markdown tables
		const escapedType = prop.type.replace(/\|/g, '\\|');
		return `| ${prop.name} | \`${escapedType}\` | ${prop.defaultValue} | ${requiredMark} |`;
	});
	
	return [
		'| Name | Type | Default | Required |',
		'| ---- | ---- | ------- | -------- |',
		...rows
	].join('\n');
}

/**
 * Generate usage example
 */
function generateUsageExample(componentName: string, props: PropInfo[]): string {
	const requiredProps = props.filter(p => p.required && !p.name.startsWith('...'));
	
	if (requiredProps.length === 0) {
		return `\`\`\`svelte
<script>
  import { ${componentName} } from 'svelte-shields';
</script>

<${componentName} />
\`\`\``;
	}
	
	const propExamples = requiredProps
		.map(p => {
			if (p.type.includes('string')) return `${p.name}="example"`;
			if (p.type.includes('number')) return `${p.name}={123}`;
			if (p.type.includes('boolean')) return `${p.name}={true}`;
			return `${p.name}={value}`;
		})
		.join(' ');
	
	return `\`\`\`svelte
<script>
  import { ${componentName} } from 'svelte-shields';
</script>

<${componentName} ${propExamples} />
\`\`\``;
}

/**
 * Generate complete documentation block
 */
function generateDocBlock(doc: ComponentDoc): string {
	const sections: string[] = [
		'<!--',
		'@component',
		doc.description || `# ${doc.name}`,
		''
	];
	
	if (doc.props.length > 0) {
		sections.push('## Props', '', generatePropsTable(doc.props), '');
	}
	
	if (doc.slots.length > 0) {
		sections.push('## Slots', '', ...doc.slots.map(s => `- ${s}`), '');
	}
	
	if (doc.events.length > 0) {
		sections.push('## Events', '', ...doc.events.map(e => `- ${e}`), '');
	}
	
	sections.push('## Usage', '', doc.usage, '');
	sections.push('## Reference', '', `[Go to docs](https://svelte-shields.codewithshin.com/)`, '');
	sections.push('-->');
	
	return sections.join('\n');
}

/**
 * Process a single Svelte component file
 */
function processComponent(filePath: string, typesContent: string): string | null {
	const content = readFileSync(filePath, 'utf-8');
	const componentName = basename(filePath, '.svelte');
	
	// Extract script content
	const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
	if (!scriptMatch) return null;
	
	const scriptContent = scriptMatch[1];
	
	// Extract props
	const props = extractProps(scriptContent, typesContent);
	
	// Extract existing description or generate default
	const description = extractDescription(content) || `# ${componentName}`;
	
	// Generate usage example
	const usage = generateUsageExample(componentName, props);
	
	// Build documentation
	const doc: ComponentDoc = {
		name: componentName,
		description,
		props,
		slots: [],
		events: [],
		usage
	};
	
	// Generate new doc block
	const docBlock = generateDocBlock(doc);
	
	// Remove existing @component documentation (not regular HTML comments)
	const contentWithoutDoc = content.replace(/<!--[\s\S]*?@component[\s\S]*?-->\s*/g, '');
	
	// Add new documentation at the end
	return contentWithoutDoc.trimEnd() + '\n\n' + docBlock + '\n';
}

/**
 * Recursively find all .svelte files in a directory
 */
function findSvelteFiles(dir: string): string[] {
	const files: string[] = [];
	
	try {
		const entries = readdirSync(dir);
		
		for (const entry of entries) {
			const fullPath = join(dir, entry);
			const stat = statSync(fullPath);
			
			if (stat.isDirectory()) {
				// Skip node_modules and hidden directories
				if (!entry.startsWith('.') && entry !== 'node_modules') {
					files.push(...findSvelteFiles(fullPath));
				}
			} else if (entry.endsWith('.svelte')) {
				files.push(fullPath);
			}
		}
	} catch (error) {
		console.error(`Error reading directory ${dir}:`, error);
	}
	
	return files;
}

/**
 * Main function to process all components
 */
function main() {
	const libPath = join(process.cwd(), 'src', 'lib');
	const typesPath = join(libPath, 'types.ts');
	
	// Read types.ts with error handling
	let typesContent: string;
	try {
		typesContent = readFileSync(typesPath, 'utf-8');
	} catch (error) {
		console.error(`✗ Error: Could not read ${typesPath}`);
		console.error(`  Please ensure types.ts exists in src/lib/`);
		process.exit(1);
	}
	
	// Find all .svelte files recursively
	const files = findSvelteFiles(libPath);
	
	if (files.length === 0) {
		console.log('No .svelte files found in src/lib/');
		process.exit(0);
	}
	
	console.log(`Found ${files.length} component(s) to process\n`);
	
	let processedCount = 0;
	let errorCount = 0;
	
	for (const filePath of files) {
		try {
			const componentName = basename(filePath);
			console.log(`Processing: ${componentName}`);
			
			const newContent = processComponent(filePath, typesContent);
			
			if (newContent) {
				writeFileSync(filePath, newContent, 'utf-8');
				console.log(`✓ Updated documentation for ${componentName}\n`);
				processedCount++;
			} else {
				console.log(`✗ Skipped ${componentName} (no script section found)\n`);
				errorCount++;
			}
		} catch (error) {
			console.error(`✗ Error processing ${basename(filePath)}:`, error);
			errorCount++;
		}
	}
	
	console.log('─'.repeat(50));
	console.log(`Summary:`);
	console.log(`  Processed: ${processedCount}`);
	console.log(`  Errors: ${errorCount}`);
	console.log(`  Total: ${files.length}`);
}

// Run the script
main();
