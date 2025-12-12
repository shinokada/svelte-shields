<script lang="ts">
	import type { VersionPropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

	let {
		source,
		packageName,
		jsr_scope,
		npm_tag,
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
	}: VersionPropsType = $props();

	// Source-specific parameters
	const tagPath = $derived(npm_tag ? `/${npm_tag}` : '');
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

	const npmSrcData = $derived(buildBadgeUrl(`/npm/v/${packageName}${tagPath}`, params));

	const jsrSrcData = $derived(buildBadgeUrl(`/jsr/v/${jsr_scope}/${packageName}`, params));

	const pypiSrcData = $derived(
		buildBadgeUrl(`/pypi/v/${packageName}`, `${params}${pypiBaseUrlParam}`)
	);
</script>

{#if link}
	{#if source === 'npm'}
		<object data={npmSrcData} title="NPM version of {packageName}" class={classname}> </object>
	{:else if source === 'pypi'}
		<object data={pypiSrcData} title="Pypi version of {packageName}" class={classname}> </object>
	{:else}
		<object data={jsrSrcData} title="JSR version of {packageName}" class={classname}> </object>
	{/if}
{:else if source === 'npm'}
	<img src={npmSrcData} alt="NPM version of {packageName}" class={classname} {...attributes} />
{:else if source === 'pypi'}
	<img src={pypiSrcData} alt="Pypi version of {packageName}" class={classname} {...attributes} />
{:else}
	<img src={jsrSrcData} alt="JSR version of {packageName}" class={classname} {...attributes} />
{/if}

<!--
@component
# Version

## Props

| Name | Type | Default | Required |
| ---- | ---- | ------- | -------- |
| source | `'jsr' \| 'npm' \| 'pypi'` | - | ✓ |
| packageName | `string` | - | ✓ |
| jsr_scope | `string` | - |  |
| npm_tag | `string` | - |  |
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
  import { Version } from 'svelte-shields';
</script>

<Version source={value} packageName="example" />
```

## Reference

[Go to docs](https://svelte-shields.codewithshin.com/)

-->
