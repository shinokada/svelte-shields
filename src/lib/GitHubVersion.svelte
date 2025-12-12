<script lang="ts">
	import type { GitHubVersionPropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

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

	// GitHub-specific parameters
	const includePrereleasesParam = $derived(include_prereleases ? `&include_prereleases` : '');
	const sortParam = $derived(sort ? `&sort=${sort}` : '');
	const filterParam = $derived(filter ? `&filter=${filter}` : '');

	const params = $derived(
		buildBadgeParams({
			style,
			logo,
			logoColor,
			logoSize,
			label,
			labelColor,
			color,
			cacheSeconds,
			link
		})
	);
	const srcData = $derived(
		buildBadgeUrl(
			`/github/v/${display_name}/${user}/${repo}`,
			`${params}${includePrereleasesParam}${sortParam}${filterParam}`
		)
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
| attributes | `HTMLAttributes` | - |  |

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
