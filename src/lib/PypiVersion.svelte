<script lang="ts">
	import type { PypiVersionPropsType } from './types';

	let {
		packageName,
		pypiBaseUrl,
		style,
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
	}: PypiVersionPropsType = $props();

	const styleOpt = $derived(style ? `style=${style}` : 'style=flat');
	const pypiBaseUrlOpt = $derived(pypiBaseUrl ? `&pypiBaseUrl=${pypiBaseUrl}` : '');
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
		`https://img.shields.io/pypi/v/${packageName}?${styleOpt}${pypiBaseUrlOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	<object data={srcData} title={packageName} class={classname}> </object>
{:else}
	<img src={srcData} alt="Pypi version of {packageName}" class={classname} {...attributes} />
{/if}

<!--
@component
# PypiVersion

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| packageName | `string` | - | ✓ |
| pypiBaseUrl | `string` | - |  |
| style | `'flat' \| 'flat-square' \| 'for-the-badge' \| 'plastic' \| 'social'` | - |  |
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
  import { PypiVersion } from 'svelte-shields';
</script>

<PypiVersion packageName="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
