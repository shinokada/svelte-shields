<script lang="ts">
	import type { JsrVersionPropsType } from '$lib';

	let {
		scope,
		packageName,
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
	}: JsrVersionPropsType = $props();

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

	let srcData = $derived(
		`https://img.shields.io/jsr/v/${encodeURIComponent(scope)}/${packageName}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	<object data={srcData} title="JSR version - {scope}/{packageName}" class={classname}> </object>
{:else}
	<img src={srcData} alt="JSR version - {scope}/{packageName}" class={classname} {...attributes} />
{/if}

<!--
@component
# JsrVersion

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| scope | `string` | - | ✓ |
| packageName | `string` | - | ✓ |
| style | `'flat' \| 'flat-square' \| 'for-the-badge' \| 'plastic' \| 'social'` | - |  |
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
  import { JsrVersion } from 'svelte-shields';
</script>

<JsrVersion scope="example" packageName="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
