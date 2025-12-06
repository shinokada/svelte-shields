<script lang="ts">
	import type { LicensePropsType } from './types';

	let {
		source,
		github_user,
		github_repo,
		npm_packageName,
		npm_registry_uri,
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
	}: LicensePropsType = $props();

	const styleOpt = $derived(style ? `style=${style}` : 'style=flat');
	const registryOpt = $derived(
		npm_registry_uri ? `&registry_uri=${encodeURIComponent(npm_registry_uri)}` : ''
	);
	const logoOpt = $derived(logo ? `&logo=${logo}` : '');
	const logoColorOpt = $derived(logoColor ? `&logoColor=${logoColor}` : '');
	const logoSizeOpt = $derived(logoSize ? `&logoSize=${logoSize}` : '');
	const labelOpt = $derived(label ? `&label=${encodeURIComponent(label)}` : '');
	const labelColorOpt = $derived(labelColor ? `&labelColor=${labelColor}` : '');
	const colorOpt = $derived(color ? `&color=${color}` : '');
	const cacheSecondsOpt = $derived(cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : '');
	const link1 = $derived(link ? `&link=${encodeURIComponent(link[0])}` : '');
	const link2 = $derived(link ? `&link=${encodeURIComponent(link[1])}` : '');

	const npmSrcData = $derived(
		`https://img.shields.io/npm/l/${npm_packageName}?${styleOpt}${registryOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);

	const githubSrcData = $derived(
		`https://img.shields.io/github/license/${github_user}/${github_repo}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	{#if source === 'npm'}
		<object data={npmSrcData} title="{source} License" class={classname}> </object>
	{:else}
		<object data={githubSrcData} title="{source} License" class={classname}> </object>
	{/if}
{:else if source === 'npm'}
	<img src={npmSrcData} alt="{source} License" class={classname} {...attributes} />
{:else}
	<img src={githubSrcData} alt="{source} License" class={classname} {...attributes} />
{/if}

<!--
@component
# License

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| source | `'github' \| 'npm'` | - | ✓ |
| github_user | `string` | - |  |
| github_repo | `string` | - |  |
| npm_packageName | `string` | - |  |
| npm_registry_uri | `string` | - |  |
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
  import { License } from 'svelte-shields';
</script>

<License source={value} />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
