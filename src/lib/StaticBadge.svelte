<script lang="ts">
	import type { StaticBadgePropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

	let {
		badgeContent,
		message,
		badgeLabel,
		badgeColor = 'blue',
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
	}: StaticBadgePropsType = $props();

	// Build the badge content - either use provided badgeContent or construct from parts
	const constructedBadgeContent = $derived(
		badgeContent || (badgeLabel && message ? `${badgeLabel}-${message}-${badgeColor}` : '')
	);

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
		buildBadgeUrl(`/badge/${encodeURIComponent(constructedBadgeContent)}`, params)
	);
</script>

{#if link}
	<object data={srcData} title={badgeContent} class={classname}> </object>
{:else}
	<img src={srcData} alt="Badge for {badgeContent}" class={classname} {...attributes} />
{/if}

<!--
@component
# StaticBadge

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| badgeContent | `string` | - |  |
| message | `string` | - |  |
| badgeLabel | `string` | - |  |
| badgeColor | `string` | `blue` |  |
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
  import { StaticBadge } from 'svelte-shields';
</script>

<StaticBadge />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
