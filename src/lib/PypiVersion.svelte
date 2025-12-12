<script lang="ts">
	import type { PypiVersionPropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

	let {
		packageName,
		pypiBaseUrl,
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
	}: PypiVersionPropsType = $props();

	const pypiBaseUrlParam = $derived(pypiBaseUrl ? `&pypiBaseUrl=${pypiBaseUrl}` : '');
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
	const srcData = $derived(buildBadgeUrl(`/pypi/v/${packageName}`, `${params}${pypiBaseUrlParam}`));
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
  import { PypiVersion } from 'svelte-shields';
</script>

<PypiVersion packageName="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
