<script lang="ts">
	import type { LicensePropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

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

	const registryParam = $derived(
		npm_registry_uri ? `&registry_uri=${encodeURIComponent(npm_registry_uri)}` : ''
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

	const npmSrcData = $derived(
		buildBadgeUrl(`/npm/l/${npm_packageName}`, `${params}${registryParam}`)
	);

	const githubSrcData = $derived(
		buildBadgeUrl(`/github/license/${github_user}/${github_repo}`, params)
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
| attributes | `HTMLAttributes` | - |  |

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
