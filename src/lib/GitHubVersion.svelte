<script lang="ts">
  import type { GitHubVersionPropsType } from './types';

  let {
    user,
    repo,
    include_prereleases,
    sort,
    filter,
    display_name = 'release',
    style = 'flat',
    logo,
    logoColor,
    logoSize,
    label = '',
    labelColor,
    color,
    cacheSeconds,
    link,
    class: classname,
    ...attributes
  }: GitHubVersionPropsType = $props();

  const styleOpt = style ? `style=${style}` : 'style=flat';
  const include_prereleasesOpt = include_prereleases ? `&include_prereleases` : '';
  const sortOpt = sort ? `&sort=${sort}` : '';
  const filterOpt = filter ? `&filter=${filter}` : '';
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
    `https://img.shields.io/github/v/${display_name}/${user}/${repo}?${styleOpt}${include_prereleasesOpt}${sortOpt}${filterOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`
  );
</script>

{#if link}
  <object data={srcData} title="GitHub {display_name} - {user}/{repo}" class={classname}> </object>
{:else}
  <img
    src={srcData}
    alt="GitHub {display_name} - {user}/{repo}"
    class={classname}
    {...attributes}
  />
{/if}

<!--
@component
[Go to docs](https://svelte-shields.codewithshin.com/)
## Props
@prop user
@prop repo
@prop include_prereleases
@prop sort
@prop filter
@prop display_name = 'release'
@prop style = 'flat'
@prop logo
@prop logoColor
@prop logoSize
@prop label = ''
@prop labelColor
@prop color
@prop cacheSeconds
@prop link
@prop class: classname
@prop ...attributes
-->
