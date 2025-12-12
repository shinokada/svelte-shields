<script lang="ts">
	import type { NpmDownloadPropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

	let {
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
	}: NpmDownloadPropsType = $props();

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
	const srcData = $derived(buildBadgeUrl(`/npm/${interval}/${packageName}`, params));
</script>

{#if link}
	<object data={srcData} title="NPM {interval} Downloads - {packageName}" class={classname}>
	</object>
{:else}
	<img
		src={srcData}
		alt="NPM {interval} Downloads - {packageName}"
		class={classname}
		{...attributes}
	/>
{/if}

<!--
@component
# NpmDownload

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| interval | `'dw' \| 'dm' \| 'dy' \| 'd18m'` | `dw` |  |
| packageName | `string` | - | ✓ |
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
  import { NpmDownload } from 'svelte-shields';
</script>

<NpmDownload packageName="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
