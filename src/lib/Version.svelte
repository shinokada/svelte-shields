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
  const tagOpt = npm_tag ? `/${npm_tag}` : ''
  // pypi
  const pypiBaseUrlOpt = pypiBaseUrl ? `&pypiBaseUrl=${pypiBaseUrl}` : ''

  // common
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

  const npmSrcData = $state(`https://img.shields.io/npm/v/${packageName}${tagOpt}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)

  const jsrSrcData = $state(`https://img.shields.io/jsr/v/${jsr_scope}/${packageName}?${styleOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)

  const pypiSrcData = $state(`https://img.shields.io/pypi/v/${packageName}?${styleOpt}${pypiBaseUrlOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)
</script>


{#if link}
  {#if source === 'npm'}
    <!-- NPM -->
    <object data={npmSrcData} title='NPM version of {packageName}' 
    class={classname}
    {...attributes}>
    </object>
  {:else if source === 'pypi'}
    <!-- Pypi -->
    <object data={pypiSrcData} title='Pypi version of {packageName}' 
    class={classname}
    {...attributes}>
    </object>
  {:else}
    <!-- JSR -->
    <object data={jsrSrcData} title='JSR version of {packageName}' 
    class={classname}
    {...attributes}>
    </object>
  {/if}
{:else}
  {#if source === 'npm'}
    <!-- NPM -->
    <img  
    src={npmSrcData} alt="NPM version of {packageName}" 
    class={classname}
    {...attributes}
  />
  {:else if source === 'pypi'}
    <!-- Pypi -->
    <img  
    src={pypiSrcData} alt="Pypi version of {packageName}" 
    class={classname}
    {...attributes}
  />
  {:else}
    <!-- JSR -->
    <img  
    src={jsrSrcData} alt="JSR version of {packageName}" 
    class={classname}
    {...attributes}
  />
  {/if}
{/if}