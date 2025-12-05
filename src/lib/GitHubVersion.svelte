<script lang="ts">
	import type { GitHubVersionPropsType } from './types';

	let {
		user,
		repo,
		include_prereleases,
		sort,
		filter,
		display_name = 'release',
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
	}: GitHubVersionPropsType = $props();

	const styleOpt = $derived(style ? `style=${style}` : 'style=flat');
	const include_prereleasesOpt = $derived(include_prereleases ? `&include_prereleases` : '');
	const sortOpt = $derived(sort ? `&sort=${sort}` : '');
	const filterOpt = $derived(filter ? `&filter=${filter}` : '');
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
		`https://img.shields.io/github/v/${display_name}/${user}/${repo}?${styleOpt}${include_prereleasesOpt}${sortOpt}${filterOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	<object data={srcData} title="GitHub {display_name} - {user}/{repo}" class={classname}> </object>
{:else}
	<img
		src={srcData}
		alt="GitHub {display_name} - {user}/{repo}"
		class={classname}
		{...attributes}
	/>
{/if}

<!--
@component
[Go to docs](https://svelte-shields.codewithshin.com/)
## Props
@prop user
@prop repo
@prop include_prereleases
@prop sort
@prop filter
@prop display_name = 'release'
@prop style = 'flat'
@prop logo
@prop logoColor
@prop logoSize
@prop label = ''
@prop labelColor
@prop color
@prop cacheSeconds
@prop link
@prop class: classname
@prop ...attributes
-->
