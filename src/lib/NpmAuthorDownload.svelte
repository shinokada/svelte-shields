<script lang="ts">
  import type { NpmAuthorDownloadPropsType } from './types';

	let {
    interval = 'dw',
		author,
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
	}: NpmAuthorDownloadPropsType = $props();

  const styleOpt = style ? `style=${style}` : 'style=flat'
  const logoOpt = logo ? `&logo=${logo}` : '&logo=""'
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : ''
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : ''
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : ''
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : ''
  const colorOpt = color ? `&color=${color}` : '&color=""'
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : ''
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` :  ''
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : ''

  let srcData = $state(`https://img.shields.io/npm-stat/${interval}/${author}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)

</script>

{#if link}
  <object data={srcData} title='NPM {interval} Downloads - {author}' 
  class={classname}
  {...attributes}>
  </object>
{:else}
  <img  
    src={srcData} alt="NPM {interval} Downloads - {author}" 
    class={classname}
    {...attributes}
  />
{/if}