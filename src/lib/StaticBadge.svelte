<script lang="ts">
  import type { StaticBadgePropsType } from './types';

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
  const constructedBadgeContent = badgeContent || 
    (badgeLabel && message ? `${badgeLabel}-${message}-${badgeColor}` : '');

  // Build query parameters
  const params = new URLSearchParams();
  
  if (style) params.set('style', style);
  else params.set('style', 'flat');
  
  if (logo) params.set('logo', logo);
  if (logoColor) params.set('logoColor', logoColor);
  if (logoSize) params.set('logoSize', logoSize.toString());
  if (label) params.set('label', label);
  if (labelColor) params.set('labelColor', labelColor);
  if (color) params.set('color', color);
  if (cacheSeconds) params.set('cacheSeconds', cacheSeconds.toString());
  if (link) {
    if (link[0]) params.set('link', link[0]);
    if (link[1]) params.set('link', link[1]);
  }

  let srcData = $state(
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
