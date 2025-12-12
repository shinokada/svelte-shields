<script lang="ts">
	import type { NpmVersionPropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

	let {
		packageName,
		tag,
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
	}: NpmVersionPropsType = $props();

	const tagPath = $derived(tag ? `/${encodeURIComponent(tag)}` : '');
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
		buildBadgeUrl(`/npm/v/${encodeURIComponent(packageName)}${tagPath}`, params)
	);
</script>

{#if link}
	<object data={srcData} title={packageName} class={classname}> </object>
{:else}
	<img src={srcData} alt="NPM version of {packageName}" class={classname} {...attributes} />
{/if}

<!--
@component
# NpmVersion

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| packageName | `string` | - | ✓ |
| tag | `string` | - |  |
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
  import { NpmVersion } from 'svelte-shields';
</script>

<NpmVersion packageName="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
