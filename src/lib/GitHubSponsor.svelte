<script lang="ts">
	import type { GitHubSponsorPropsType } from './types';

	let {
		user,
		style = 'flat',
		logo,
		logoColor,
		logoSize,
		label = '',
		labelColor,
		color,
		cacheSeconds,
		link,
		class: classname,
		...attributes
	}: GitHubSponsorPropsType = $props();

	const styleOpt = $derived(style ? `style=${style}` : 'style=flat');
	const logoOpt = $derived(logo ? `&logo=${logo}` : '');
	const logoColorOpt = $derived(logoColor ? `&logoColor=${logoColor}` : '');
	const logoSizeOpt = $derived(logoSize ? `&logoSize=${logoSize}` : '');
	const labelOpt = $derived(label ? `&label=${encodeURIComponent(label)}` : '');
	const labelColorOpt = $derived(labelColor ? `&labelColor=${labelColor}` : '');
	const colorOpt = $derived(color ? `&color=${color}` : '');
	const cacheSecondsOpt = $derived(cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : '');
	const link1 = $derived(link ? `&link=${encodeURIComponent(link[0])}` : '');
	const link2 = $derived(link ? `&link=${encodeURIComponent(link[1])}` : '');
	let srcData = $derived(
		`https://img.shields.io/github/sponsors/${user}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	<object data={srcData} title="GitHub Sponsor - {user}" class={classname}> </object>
{:else}
	<img src={srcData} alt="GitHub Sponsor - {user}" class={classname} {...attributes} />
{/if}

<!--
@component
# GitHubSponsor

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| user | `string` | - | ✓ |
| style | `'flat' \| 'flat-square' \| 'for-the-badge' \| 'plastic' \| 'social'` | `flat` |  |
| logo | `string \| undefined \| null` | - |  |
| logoColor | `string \| undefined \| null` | - |  |
| logoSize | `string \| undefined \| null` | - |  |
| label | `string \| undefined \| null` | `` |  |
| labelColor | `string \| undefined \| null` | - |  |
| color | `string \| undefined \| null` | - |  |
| cacheSeconds | `string \| undefined \| null` | - |  |
| link | `LinkType` | - |  |
| attributes | `HTMLImgAttributes` | - |  |

## Usage

```svelte
<script>
  import { GitHubSponsor } from 'svelte-shields';
</script>

<GitHubSponsor user="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
