<script lang="ts">
	import type { JsrVersionPropsType } from '$lib';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

	let {
		scope,
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
	}: JsrVersionPropsType = $props();

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
		buildBadgeUrl(`/jsr/v/${encodeURIComponent(scope)}/${packageName}`, params)
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
  import { JsrVersion } from 'svelte-shields';
</script>

<JsrVersion scope="example" packageName="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
