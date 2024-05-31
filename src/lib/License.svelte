<script lang="ts">
  import type { LicensePropsType } from './types';

  let {
    licenseType,
    user,
    repo,
		packageName,
    registry_uri,
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

  const styleOpt = style ? `style=${style}` : 'style=flat'
  const registryOpt = registry_uri ? `&registry_uri=${encodeURIComponent(registry_uri)}` : ''
  const logoOpt = logo ? `&logo=${logo}` : ''
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : ''
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : ''
  const labelOpt = label ? `&label=${encodeURIComponent(label)}` : ''
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : ''
  const colorOpt = color ? `&color=${color}` : ''
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : ''
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` :  ''
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : ''

  const npmSrcData = $state(`https://img.shields.io/npm/l/${packageName}?${styleOpt}${registryOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)

  const githubSrcData = $state(`https://img.shields.io/github/license/${user}/${repo}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)


</script>

{#if link}
  {#if licenseType === 'npm'}
    <!-- NPM -->
    <object data={npmSrcData} title='{licenseType} License}' 
    class={classname}
    {...attributes}>
    </object>
  {:else}
    <!-- GitHub -->
    <object data={githubSrcData} title='{licenseType} License}' 
    class={classname}
    {...attributes}>
    </object>
  {/if}
{:else}
  {#if licenseType === 'npm'}
    <!-- NPM -->
    <img  
    src={npmSrcData} alt="{licenseType} License" 
    class={classname}
    {...attributes}
  />
  {:else}
    <!-- GitHub -->
    <img  
    src={githubSrcData} alt="{licenseType} License" 
    class={classname}
    {...attributes}
  />
  {/if}
{/if}