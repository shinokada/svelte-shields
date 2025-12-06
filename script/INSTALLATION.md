# Installation & Setup

## Install Required Dependencies

```bash
pnpm add -D @types/node
```

## TypeScript Configuration

The `script/tsconfig.json` is already configured with:
- ✅ Node types
- ✅ ES2020 target (for modern JavaScript features)
- ✅ Proper module resolution

## Running the Script

Once dependencies are installed:

```bash
pnpm install
pnpm gen:compodoc
```

## What It Does

The script will:
1. Read all `.svelte` files in `src/lib/`
2. Parse their props from `$props()` 
3. Match types from `src/lib/types.ts`
4. Generate documentation with:
   - Props table (name, type, default, required)
   - Usage example
   - Reference links
5. Update each component file with the new documentation

## Notes

- Only removes comments that contain `@component` marker
- Regular HTML comments in your components are preserved
- Pipe characters in union types are properly escaped for Markdown tables
- Handles the full type inheritance chain (ExtendedStyle → BaseBadgePropsType, etc.)
