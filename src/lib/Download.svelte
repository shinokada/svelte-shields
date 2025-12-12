<script lang="ts">
	import type { DownloadPropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

	let {
		source,
		user,
		repo,
		interval = 'dw',
		packageName,
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
	}: DownloadPropsType = $props();

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

	const npmSrcData = $derived(buildBadgeUrl(`/npm/${interval}/${packageName}`, params));

	const githubSrcData = $derived(buildBadgeUrl(`/github/downloads/${user}/${repo}/total`, params));
</script>

{#if link}
	{#if source === 'npm'}
		<object data={npmSrcData} title="NPM downloads" class={classname}> </object>
	{:else}
		<object data={githubSrcData} title="GitHub downloads" class={classname}> </object>
	{/if}
{:else if source === 'npm'}
	<img src={npmSrcData} alt="NPM downloads" class={classname} {...attributes} />
{:else}
	<img src={githubSrcData} alt="GitHub downloads" class={classname} {...attributes} />
{/if}

<!--
@component
# Download

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| source | `'npm' \| 'github'` | - | ✓ |
| user | `string` | - |  |
| repo | `string` | - |  |
| interval | `'dw' \| 'dm' \| 'dy' \| 'd18m'` | `dw` |  |
| packageName | `string` | - |  |
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
  import { Download } from 'svelte-shields';
</script>

<Download source={value} />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
