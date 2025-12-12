<script lang="ts">
	import type { GitHubSponsorPropsType } from './types';
	import { buildBadgeParams } from './utils/badgeHelpers';
	import { buildBadgeUrl } from './utils/constants';

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
	const srcData = $derived(buildBadgeUrl(`/github/sponsors/${user}`, params));
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
| attributes | `HTMLAttributes` | - |  |

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
