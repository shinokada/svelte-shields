<script lang="ts">
  import type { NpmVersionPropsType } from './types';

	let {
		packageName,
    tag,
		style,
		logo = 'svelte',
    logoColor,
    logoSize,
    label,
    labelColor,
		color,
    cacheSeconds,
    link,
		...attributes
	}: NpmVersionPropsType = $props();

  const styleOpt = style ? `style=${style}` : 'style=flat'
  const logoOpt = logo ? `&logo=${logo}` : ''
  const tagOpt = tag ? `/${tag}` : ''
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : ''
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : ''
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : ''
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : ''
  const colorOpt = color ? `&color=${color}` : ''
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : ''
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` :  ''
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : ''
  let srcData = $state(`https://img.shields.io/npm/v/${packageName}${tagOpt}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)
</script>

{#if link}
  <object data={srcData} title={packageName} {...attributes}>
  </object>
{:else}
  <img  
    src={srcData} 
    alt={label} 
    {...attributes}
  />
{/if}