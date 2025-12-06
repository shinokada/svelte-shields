<script lang="ts">
	import type { NpmAuthorDownloadPropsType } from './types';

	let {
		interval = 'dw',
		author,
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
	}: NpmAuthorDownloadPropsType = $props();

	const styleOpt = $derived(style ? `style=${style}` : 'style=flat');
	const logoOpt = $derived(logo ? `&logo=${logo}` : '');
	const logoColorOpt = $derived(logoColor ? `&logoColor=${logoColor}` : '');
	const logoSizeOpt = $derived(logoSize ? `&logoSize=${logoSize}` : '');
	const labelOpt = $derived(label ? `&label=${encodeURIComponent(label)}` : '');
	const labelColorOpt = $derived(labelColor ? `&labelColor=${labelColor}` : '');
	const colorOpt = $derived(color ? `&color=${color}` : '');
	const cacheSecondsOpt = $derived(cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : '');
	const link1 = $derived(link?.[0] ? `&link=${encodeURIComponent(link?.[0])}` : '');
	const link2 = $derived(link?.[1] ? `&link=${encodeURIComponent(link?.[1])}` : '');

	const srcData = $derived(
		`https://img.shields.io/npm-stat/${interval}/${author}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	<object data={srcData} title="NPM {interval} Downloads - {author}" class={classname}> </object>
{:else}
	<img src={srcData} alt="NPM {interval} Downloads - {author}" class={classname} {...attributes} />
{/if}

<!--
@component
# NpmAuthorDownload

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| interval | `'dw' \| 'dm' \| 'dy' \| 'd18m'` | `dw` |  |
| author | `string` | - | ✓ |
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
  import { NpmAuthorDownload } from 'svelte-shields';
</script>

<NpmAuthorDownload author="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
