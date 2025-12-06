# Component Documentation Generator

This script automatically generates comprehensive documentation blocks for Svelte components.

## Features

The `compoDoc.ts` script provides:

1. **Props Table** - Automatically extracted from component props with:
   - Name
   - Type (from types.ts)
   - Default value
   - Required indicator (✓)

2. **Usage Examples** - Generated code snippets showing how to import and use the component

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

## Output Format

The script generates documentation in this format:

````svelte
<!--
@component
# ComponentName

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| propName | `string` | `"default"` | ✓ |
| optionalProp | `number` | `-` | |

## Usage

```svelte
<script>
  import { ComponentName } from 'svelte-shields';
</script>

<ComponentName propName="value" />
````

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->

```

## How It Works

1. **Reads** all `.svelte` files in `src/lib/`
2. **Parses** the `$props()` destructuring to find prop names
3. **Matches** prop types from `types.ts` interfaces
4. **Extracts** default values from the destructuring
5. **Generates** a complete documentation block
6. **Updates** the component file with the new documentation

## Requirements

- TypeScript (`tsx` for running)
- Components must use Svelte 5 runes syntax (`$props()`)
- Props types must be defined in `src/lib/types.ts`

## Customization

You can customize the script to add:

- Custom sections
- Different table formats
- Additional metadata
- Component-specific examples

Edit `script/compoDoc.ts` to modify the generation logic.
```
