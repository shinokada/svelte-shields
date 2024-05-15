<script context="module" lang="ts">
  const extra: ListType[] = [
    {
      name: '3 Tabs',
      icon: ExpandOutline as ComponentType,
      href: '/three-tabs'
    },
    {
      name: '3 Tabs Tailwind ',
      icon: CogOutline as ComponentType,
      href: '/three-tabs-sizebytailwind'
    },
    {
      name: 'No Tabs',
      icon: GridPlusOutline as ComponentType,
      href: '/no-tabs'
    }
  ];
  export const newSidebarList: ListType[] = [
    ...sidebarList, ...extra 
  ];
</script>
<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';
  import type { ListType } from 'runes-webkit';
  import { Footer, OnThisPage, extract, Sidebar, removeHyphensAndCapitalize, sidebarList, ExpandOutline, GridPlusOutline, CogOutline } from 'runes-webkit'

  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import Nav from './utils/Nav-old.svelte';
  import { Runatics } from 'runatics';

  let { children, data } = $props()
  const analyticsId = data.ANALYTICS_ID
  let metaTags = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  let currentUrl = $state($page.url.pathname);
  $effect(() => {
    currentUrl = $page.url.pathname;
    metaTags = $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags;
  })
  const lis =[
    {name: 'npm-version', href: '/npm-version'},
    {name: 'npm-downloads', href: '/npm-downloads'},
    {name: 'npm-author', href: '/npm-author-downloads'},
    {name: 'github-release', href: '/github'},
    {name: 'github-downloads', href: '/github-downloads'},
  ]
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com',
  }
  // const urlsToIncludeSwitcherAndSidebar =['/no-sidebar']
  const siteName = removeHyphensAndCapitalize(__NAME__)
  const twitterUrl = 'https://twitter.com/shinokada'
  const githubUrl = `https://github.com/shinokada/${__NAME__}`

</script>
<RunesMetaTags {...metaTags} />
<Runatics {analyticsId} />

<Nav {lis} {siteName} {twitterUrl} {githubUrl} />
<div class="lg:flex">  

  {@render children()}
</div>
<Footer {brand} {lis}/>