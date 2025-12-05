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
		<!-- NPM -->
		<object data={npmSrcData} title="{source} License" class={classname}> </object>
	{:else}
		<!-- GitHub -->
		<object data={githubSrcData} title="{source} License" class={classname}> </object>
	{/if}
{:else if source === 'npm'}
	<!-- NPM -->
	<img src={npmSrcData} alt="{source} License" class={classname} {...attributes} />
{:else}
	<!-- GitHub -->
	<img src={githubSrcData} alt="{source} License" class={classname} {...attributes} />
{/if}

<!--
@component
[Go to docs](https://svelte-shields.codewithshin.com/)
## Props
@prop source
@prop github_user
@prop github_repo
@prop npm_packageName
@prop npm_registry_uri
@prop style = 'flat'
@prop logo
@prop logoColor
@prop logoSize
@prop label
@prop labelColor
@prop color
@prop cacheSeconds
@prop link
@prop class: classname
@prop ...attributes
-->
