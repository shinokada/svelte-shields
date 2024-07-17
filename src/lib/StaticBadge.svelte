<script lang="ts">
  import type { StaticBadgePropsType } from './types';

  let {
    badgeContent,
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

  const styleOpt = style ? `style=${style}` : 'style=flat';
  const logoOpt = logo ? `&logo=${logo}` : '';
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : '';
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : '';
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : '';
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : '';
  const colorOpt = color ? `&color=${color}` : '';
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : '';
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` : '';
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : '';
  let srcData = $state(
    `https://img.shields.io/badge/${encodeURIComponent(badgeContent)}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
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
