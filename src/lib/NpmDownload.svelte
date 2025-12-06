<script lang="ts">
	import type { NpmDownloadPropsType } from './types';

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

	const styleOpt = $derived(style ? `style=${style}` : 'style=flat');
	const logoOpt = $derived(logo ? `&logo=${logo}` : '');
	const logoColorOpt = $derived(logoColor ? `&logoColor=${logoColor}` : '');
	const logoSizeOpt = $derived(logoSize ? `&logoSize=${logoSize}` : '');
	const labelOpt = $derived(label ? `&label=${encodeURIComponent(label)}` : '');
	const labelColorOpt = $derived(labelColor ? `&labelColor=${labelColor}` : '');
	const colorOpt = $derived(color ? `&color=${color}` : '');
	const cacheSecondsOpt = $derived(cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : '');
	const link1 = $derived(link?.[0] ? `&link=${encodeURIComponent(link[0])}` : '');
	const link2 = $derived(link?.[1] ? `&link=${encodeURIComponent(link[1])}` : '');

	let srcData = $derived(
		`https://img.shields.io/npm/${interval}/${packageName}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
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
| attributes | `HTMLImgAttributes` | - |  |

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
