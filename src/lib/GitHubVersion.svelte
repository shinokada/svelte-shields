<script lang="ts">
	import type { GitHubVersionPropsType } from './types';

	let {
		user,
		repo,
		include_prereleases,
		sort,
		filter,
		display_name = 'release',
		style = 'flat',
		logo,
		logoColor,
		logoSize,
		label = '',
		labelColor,
		color,
		cacheSeconds,
		link,
		class: classname,
		...attributes
	}: GitHubVersionPropsType = $props();

	const styleOpt = $derived(style ? `style=${style}` : 'style=flat');
	const include_prereleasesOpt = $derived(include_prereleases ? `&include_prereleases` : '');
	const sortOpt = $derived(sort ? `&sort=${sort}` : '');
	const filterOpt = $derived(filter ? `&filter=${filter}` : '');
	const logoOpt = $derived(logo ? `&logo=${logo}` : '');
	const logoColorOpt = $derived(logoColor ? `&logoColor=${logoColor}` : '');
	const logoSizeOpt = $derived(logoSize ? `&logoSize=${logoSize}` : '');
	const labelOpt = $derived(label ? `&label=${encodeURIComponent(label)}` : '');
	const labelColorOpt = $derived(labelColor ? `&labelColor=${labelColor}` : '');
	const colorOpt = $derived(color ? `&color=${color}` : '');
	const cacheSecondsOpt = $derived(cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : '');
	const link1 = $derived(link ? `&link=${encodeURIComponent(link[0])}` : '');
	const link2 = $derived(link ? `&link=${encodeURIComponent(link[1])}` : '');
	let srcData = $derived(
		`https://img.shields.io/github/v/${display_name}/${user}/${repo}?${styleOpt}${include_prereleasesOpt}${sortOpt}${filterOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	<object data={srcData} title="GitHub {display_name} - {user}/{repo}" class={classname}> </object>
{:else}
	<img
		src={srcData}
		alt="GitHub {display_name} - {user}/{repo}"
		class={classname}
		{...attributes}
	/>
{/if}

<!--
@component
# GitHubVersion

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| user | `string` | - | ✓ |
| repo | `string` | - | ✓ |
| include_prereleases | `boolean` | - |  |
| sort | `'date' \| 'semver'` | - |  |
| filter | `string` | - |  |
| display_name | `'tag' \| 'release'` | `release` |  |
| style | `'flat' \| 'flat-square' \| 'for-the-badge' \| 'plastic' \| 'social'` | `flat` |  |
| logo | `string \| undefined \| null` | - |  |
| logoColor | `string \| undefined \| null` | - |  |
| logoSize | `string \| undefined \| null` | - |  |
| label | `string \| undefined \| null` | `` |  |
| labelColor | `string \| undefined \| null` | - |  |
| color | `string \| undefined \| null` | - |  |
| cacheSeconds | `string \| undefined \| null` | - |  |
| link | `LinkType` | - |  |
| attributes | `HTMLImgAttributes` | - |  |

## Usage

```svelte
<script>
  import { GitHubVersion } from 'svelte-shields';
</script>

<GitHubVersion user="example" repo="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
