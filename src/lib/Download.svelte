<script lang="ts">
	import type { DownloadPropsType } from './types';

	let {
		source,
		user,
		repo,
		interval,
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
	}: DownloadPropsType = $props();

	// common
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

	const npmSrcData = $derived(
		`https://img.shields.io/npm/${interval}/${packageName}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);

	const githubSrcData = $derived(
		`https://img.shields.io/github/downloads/${user}/${repo}/total?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	{#if source === 'npm'}
		<object data={npmSrcData} title="NPM downloads" class={classname}> </object>
	{:else}
		<object data={githubSrcData} title="GitHub downloads" class={classname}> </object>
	{/if}
{:else if source === 'npm'}
	<img src={npmSrcData} alt="NPM downloads" class={classname} {...attributes} />
{:else}
	<img src={githubSrcData} alt="GitHub downloads" class={classname} {...attributes} />
{/if}

<!--
@component
# Download

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| source | `'npm' \| 'github'` | - | ✓ |
| user | `string` | - |  |
| repo | `string` | - |  |
| interval | `'dw' \| 'dm' \| 'dy' \| 'd18m'` | - |  |
| packageName | `string` | - |  |
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
  import { Download } from 'svelte-shields';
</script>

<Download source={value} />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
