<script lang="ts">
  import type { PypiVersionPropsType } from './types';

  let {
    packageName,
    pypiBaseUrl,
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
  }: PypiVersionPropsType = $props();

  const styleOpt = style ? `style=${style}` : 'style=flat';
  const pypiBaseUrlOpt = pypiBaseUrl ? `&pypiBaseUrl=${pypiBaseUrl}` : '';
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
    `https://img.shields.io/pypi/v/${packageName}?${styleOpt}${pypiBaseUrlOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
  );
</script>

{#if link}
  <object data={srcData} title={packageName} class={classname}> </object>
{:else}
  <img src={srcData} alt="Pypi version of {packageName}" class={classname} {...attributes} />
{/if}

<!--
@component
[Go to docs](https://svelte-shields.codewithshin.com/)
## Props
@prop packageName
@prop pypiBaseUrl
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
