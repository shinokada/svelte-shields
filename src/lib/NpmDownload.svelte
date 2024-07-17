<script lang="ts">
  import type { NpmDownloadPropsType } from './types';

	let {
    interval = 'dw',
		packageName,
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
	}: NpmDownloadPropsType = $props();

  // const intervalOpt = interval ? `&interval=${interval}` : 'dw'
  const styleOpt = style ? `style=${style}` : 'style=flat'
  const logoOpt = logo ? `&logo=${logo}` : ''
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : ''
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : ''
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : ''
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : ''
  const colorOpt = color ? `&color=${color}` : ''
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : ''
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` :  ''
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : ''

  let srcData = $state(`https://img.shields.io/npm/${interval}/${packageName}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)

</script>

{#if link}
  <object data={srcData} title='NPM {interval} Downloads - {packageName}' 
  class={classname}>
  </object>
{:else}
  <img  
    src={srcData} alt="NPM {interval} Downloads - {packageName}" 
    class={classname}
    {...attributes}
  />
{/if}