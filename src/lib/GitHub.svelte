<script lang="ts">
  import type { GitHubPropsType } from './types';
  
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
    label='',
    labelColor,
		color,
    cacheSeconds,
    link,
		...attributes
	}: GitHubPropsType = $props();

  const styleOpt = style ? `style=${style}` : 'style=flat'
  const include_prereleasesOpt = include_prereleases ? `&include_prereleases` : ''
  const sortOpt = sort ? `&sort=${sort}` : ''
  const filterOpt = filter ? `&filter=${filter}` : ''
  const logoOpt = logo ? `&logo=${logo}` : ''
  const logoColorOpt = logoColor ? `&logoColor=${logoColor}` : ''
  const logoSizeOpt = logoSize ? `&logoSize=${logoSize}` : ''
  const labelOpt = label ? `&label=${label}` : ''
  const labelColorOpt = labelColor ? `&labelColor=${labelColor}` : ''
  const colorOpt = color ? `&color=${color}` : ''
  const cacheSecondsOpt = cacheSeconds ? `&cacheSeconds=${cacheSeconds}` : ''
  const link1 = link ? `&link=${encodeURIComponent(link[0])}` :  ''
  const link2 = link ? `&link=${encodeURIComponent(link[1])}` : ''
  let srcData = $state(`https://img.shields.io/github/v/${display_name}/${user}/${repo}?${styleOpt}${include_prereleasesOpt}${sortOpt}${filterOpt}${logoOpt}${logoColorOpt}${logoSizeOpt}${labelOpt}${labelColorOpt}${colorOpt}${cacheSecondsOpt}${link1}${link2}`)

</script>

{#if link}
  <object data={srcData} title='GitHub {display_name} - {user}/{repo}' {...attributes}>
  </object>
{:else}
  <img  
    src={srcData} alt="GitHub {display_name} - {user}/{repo}" {...attributes}
  />
{/if}