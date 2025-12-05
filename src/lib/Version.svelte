<script lang="ts">
	import type { VersionPropsType } from './types';

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

	// npm
	const tagOpt = $derived(npm_tag ? `/${npm_tag}` : '');
	// pypi
	const pypiBaseUrlOpt = $derived(pypiBaseUrl ? `&pypiBaseUrl=${pypiBaseUrl}` : '');

	// common
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

	const npmSrcData = $derived(
		`https://img.shields.io/npm/v/${packageName}${tagOpt}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);

	const jsrSrcData = $derived(
		`https://img.shields.io/jsr/v/${jsr_scope}/${packageName}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);

	const pypiSrcData = $derived(
		`https://img.shields.io/pypi/v/${packageName}?${styleOpt}${pypiBaseUrlOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
	);
</script>

{#if link}
	{#if source === 'npm'}
		<!-- NPM -->
		<object data={npmSrcData} title="NPM version of {packageName}" class={classname}> </object>
	{:else if source === 'pypi'}
		<!-- Pypi -->
		<object data={pypiSrcData} title="Pypi version of {packageName}" class={classname}> </object>
	{:else}
		<!-- JSR -->
		<object data={jsrSrcData} title="JSR version of {packageName}" class={classname}> </object>
	{/if}
{:else if source === 'npm'}
	<!-- NPM -->
	<img src={npmSrcData} alt="NPM version of {packageName}" class={classname} {...attributes} />
{:else if source === 'pypi'}
	<!-- Pypi -->
	<img src={pypiSrcData} alt="Pypi version of {packageName}" class={classname} {...attributes} />
{:else}
	<!-- JSR -->
	<img src={jsrSrcData} alt="JSR version of {packageName}" class={classname} {...attributes} />
{/if}

<!--
@component
[Go to docs](https://svelte-shields.codewithshin.com/)
## Props
@prop source
@prop packageName
@prop jsr_scope
@prop npm_tag
@prop pypiBaseUrl
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
