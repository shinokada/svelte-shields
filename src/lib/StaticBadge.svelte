<script lang="ts">
	import type { StaticBadgePropsType } from './types';
	import { SvelteURLSearchParams } from 'svelte/reactivity';

	let {
		badgeContent,
		message,
		badgeLabel,
		badgeColor = 'blue',
		style,
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
	}: StaticBadgePropsType = $props();

	// Build the badge content - either use provided badgeContent or construct from parts
	const constructedBadgeContent = $derived(
		badgeContent || (badgeLabel && message ? `${badgeLabel}-${message}-${badgeColor}` : '')
	);

	// Build query parameters
	const params = $derived.by(() => {
		const p = new SvelteURLSearchParams();

		if (style) p.set('style', style);
		else p.set('style', 'flat');

		if (logo) p.set('logo', logo);
		if (logoColor) p.set('logoColor', logoColor);
		if (logoSize) p.set('logoSize', logoSize.toString());
		if (label) p.set('label', label);
		if (labelColor) p.set('labelColor', labelColor);
		if (color) p.set('color', color);
		if (cacheSeconds) p.set('cacheSeconds', cacheSeconds.toString());
		if (link) {
			if (link[0]) p.append('link', link[0]);
			if (link[1]) p.append('link', link[1]);
		}

		return p;
	});

	let srcData = $derived(
		`https://img.shields.io/badge/${encodeURIComponent(constructedBadgeContent)}?${params.toString()}`
	);
</script>

{#if link}
	<object data={srcData} title={badgeContent} class={classname}> </object>
{:else}
	<img src={srcData} alt="Badge for {badgeContent}" class={classname} {...attributes} />
{/if}

<!--
@component
[Go to docs](https://svelte-shields.codewithshin.com/)
## Props
@prop badgeContent
@prop message
@prop badgeLabel
@prop badgeColor = 'blue'
@prop style
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
