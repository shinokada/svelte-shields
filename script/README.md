# Component Documentation Generator

This script automatically generates comprehensive documentation blocks for Svelte components.

## Features

The `compoDoc.ts` script provides:

1. **Props Table** - Automatically extracted from component props with:
   - Name
   - Type (from types.ts)
   - Default value
   - Required indicator (✓)

2. **Usage Examples** - Auto-generated code snippets showing how to import and use the component

3. **Slots** - Documentation for component slots (when present)

4. **Events** - Documentation for component events (when present)

5. **Reference Links** - Links to full documentation

## Usage

Run the script using:

```bash
pnpm gen:compodoc
```

Or directly:

```bash
tsx script/compoDoc.ts
```

## Exit Codes

The script follows standard Unix exit code conventions:
- **Exit 0**: Success (all components processed or skipped)
- **Exit 1**: Errors occurred during processing

This makes it suitable for CI/CD pipelines.

## Advanced Features

### Module vs Instance Script Detection
The script correctly handles components with both `context="module"` and instance scripts:
- ✅ Extracts props from the **instance script** (where `$props()` lives)
- ✅ Ignores `context="module"` scripts
- ✅ Falls back to first script if no module script exists

### Flexible Props Syntax
Supports both `let` and `const` for props destructuring:
```svelte
let { prop1, prop2 } = $props();  // ✓ Supported
const { prop1, prop2 } = $props(); // ✓ Supported
```

### Smart Rest Props Type Inference
Automatically detects the correct type for rest props (`...attributes`):
- Looks at the `extends` clause in your type definition
- Detects `HTMLImgAttributes`, `HTMLButtonAttributes`, `SVGAttributes`, etc.
- Falls back to `HTMLAttributes` if not found

### Error vs Skip Distinction
- **Skipped**: Components without `<script>` tags (tracked separately)
- **Errors**: Real failures like file system errors or parsing exceptions
- Only errors cause non-zero exit codes

## Output Format

The script generates documentation in this format:

```svelte
<!--
@component
# ComponentName

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| propName | `string` | - | ✓ |
| optionalProp | `number` | - |  |

## Usage

```svelte
<script>
  import { ComponentName } from 'svelte-shields';
</script>

<ComponentName propName="value" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
```

## How It Works

1. **Reads** all `.svelte` files recursively in `src/lib/`
2. **Identifies** the instance script (not module script)
3. **Parses** the `$props()` destructuring to find prop names
4. **Matches** prop types from `src/lib/types.ts` interfaces
5. **Extracts** default values from the destructuring
6. **Generates** a complete documentation block
7. **Updates** the component file with the new documentation

## Requirements

- TypeScript (`tsx` for running)
- Components must use Svelte 5 runes syntax (`$props()`)
- Props types must be defined in `src/lib/types.ts`
- `@types/node` for file system operations

## Limitations

### Current Regex-Based Approach
The script uses regex parsing which has some limitations:
- ✅ Works for simple prop defaults: `prop = "value"`
- ⚠️ May break on complex defaults with commas: `prop = [1, 2, 3]`
- ⚠️ May break on object defaults: `prop = { key: 'value' }`
- ⚠️ No support for generics: `$props<T>()`

### Interface Parsing
- ✅ Handles simple interfaces with basic types
- ⚠️ May fail on deeply nested object types
- ⚠️ No support for mapped types or complex generics

These limitations are acceptable for most component libraries with simple props. If you need more robust parsing, consider using the TypeScript compiler API.

## Customization

You can customize the script to add:
- Custom sections
- Different table formats
- Additional metadata
- Component-specific examples

Edit `script/compoDoc.ts` to modify the generation logic.
