# Example Output

Here's what the documentation generator will create for your components:

## For StaticBadge.svelte (all optional props)

````svelte
<!--
@component
# StaticBadge

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| badgeContent | `string` | `-` | |
| message | `string` | `-` | |
| badgeLabel | `string` | `-` | |
| badgeColor | `string` | `blue` | |
| style | `'flat' \| 'flat-square' \| 'for-the-badge' \| 'plastic' \| 'social'` | `-` | |
| logo | `string \| undefined \| null` | `-` | |
| logoColor | `string \| undefined \| null` | `-` | |
| logoSize | `string \| undefined \| null` | `-` | |
| label | `string \| undefined \| null` | `-` | |
| labelColor | `string \| undefined \| null` | `-` | |
| color | `string \| undefined \| null` | `-` | |
| cacheSeconds | `string \| undefined \| null` | `-` | |
| link | `LinkType` | `-` | |
| class | `string` | `-` | |
| attributes | `HTMLImgAttributes` | `-` | |

## Usage

```svelte
<script>
  import { StaticBadge } from 'svelte-shields';
</script>

<StaticBadge />
````

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->

````

## For GitHubVersion.svelte (with required props: user, repo)

```svelte
<!--
@component
# GitHubVersion

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| user | `string` | `-` | ✓ |
| repo | `string` | `-` | ✓ |
| include_prereleases | `boolean` | `-` | |
| sort | `'date' \| 'semver'` | `-` | |
| filter | `string` | `-` | |
| display_name | `'tag' \| 'release'` | `-` | |
| style | `'flat' \| 'flat-square' \| 'for-the-badge' \| 'plastic' \| 'social'` | `-` | |
| logo | `string \| undefined \| null` | `-` | |
| logoColor | `string \| undefined \| null` | `-` | |
| logoSize | `string \| undefined \| null` | `-` | |
| label | `string \| undefined \| null` | `-` | |
| labelColor | `string \| undefined \| null` | `-` | |
| color | `string \| undefined \| null` | `-` | |
| cacheSeconds | `string \| undefined \| null` | `-` | |
| link | `LinkType` | `-` | |

## Usage

```svelte
<script>
  import { GitHubVersion } from 'svelte-shields';
</script>

<GitHubVersion user="example" repo="example" />
````

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->

````

## For NpmDownload.svelte (with required prop: packageName)

```svelte
<!--
@component
# NpmDownload

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| interval | `'dw' \| 'dm' \| 'dy' \| 'd18m'` | `-` | |
| packageName | `string` | `-` | ✓ |
| style | `'flat' \| 'flat-square' \| 'for-the-badge' \| 'plastic' \| 'social'` | `-` | |
| logo | `string \| undefined \| null` | `-` | |
| ...other BaseBadgePropsType and HTMLImgAttributes | | | |

## Usage

```svelte
<script>
  import { NpmDownload } from 'svelte-shields';
</script>

<NpmDownload packageName="svelte-shields" />
````

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->

```

The script now correctly:
- ✓ Uses the `?` marker from TypeScript interfaces to determine optional props
- ✓ Only marks props as required if they have NO `?` in the type definition AND no default value
- ✓ Properly handles extended interfaces (like `ExtendedStyle extends BaseBadgePropsType`)
- ✓ All optional props (with `?`) are NOT marked as required
- ✓ Props with default values are NOT marked as required
```
