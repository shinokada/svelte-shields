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

	const styleOpt = style ? `style=${style}` : 'style=flat';
	const registryOpt = npm_registry_uri
		? `&registry_uri=${encodeURIComponent(npm_registry_uri)}`
		: '';
	const logoOpt = logo ? `&logo=${logo}` : '';
	const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : '';
	const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : '';
	const labelOpt = label ? `&label=${encodeURIComponent(label)}` : '';
	const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : '';
	const colorOpt = color ? `&color=${color}` : '';
	const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : '';
	const link1 = link ? `&link=${encodeURIComponent(link[0])}` : '';
	const link2 = link ? `&link=${encodeURIComponent(link[1])}` : '';

	const npmSrcData = $state(
		`https://img.shields.io/npm/l/${npm_packageName}?${styleOpt}${registryOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);

	const githubSrcData = $state(
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
