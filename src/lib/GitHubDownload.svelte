<script lang="ts">
	import type { GitHubDownloadPropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

	let {
		user,
		repo,
		style = 'flat',
		logo,
		logoColor,
		logoSize,
		label,
		labelColor,
		color,
		cacheSeconds,
		link,
		class: classname,
		...attributes
	}: GitHubDownloadPropsType = $props();

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
	const srcData = $derived(buildBadgeUrl(`/github/downloads/${user}/${repo}/total`, params));
</script>

{#if link}
	<object data={srcData} title="GitHub Download - {user}/{repo}" class={classname}> </object>
{:else}
	<img src={srcData} alt="GitHub Download - {user}/{repo}" class={classname} {...attributes} />
{/if}

<!--
@component
# GitHubDownload

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| user | `string` | - | ✓ |
| repo | `string` | - | ✓ |
| style | `'flat' \| 'flat-square' \| 'for-the-badge' \| 'plastic' \| 'social'` | `flat` |  |
| logo | `string \| undefined \| null` | - |  |
| logoColor | `string \| undefined \| null` | - |  |
| logoSize | `string \| undefined \| null` | - |  |
| label | `string \| undefined \| null` | - |  |
| labelColor | `string \| undefined \| null` | - |  |
| color | `string \| undefined \| null` | - |  |
| cacheSeconds | `string \| undefined \| null` | - |  |
| link | `LinkType` | - |  |
| attributes | `HTMLAttributes` | - |  |

## Usage

```svelte
<script>
  import { GitHubDownload } from 'svelte-shields';
</script>

<GitHubDownload user="example" repo="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
