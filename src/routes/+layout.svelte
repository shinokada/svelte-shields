<script context="module" lang="ts">
  export const newSidebarList: ListType[] = [
    {
      name: 'Quickstart',
      icon: DatabaseOutline as ComponentType,
      href: '/guide/quickstart'
    },
    {
      name: 'GitHub Version',
      icon: ExpandOutline as ComponentType,
      href: '/guide/github'
    },
    {
      name: 'GitHub Downloads',
      icon: CogOutline as ComponentType,
      href: '/guide/github-downloads'
    },
    {
      name: 'Jsr Version',
      icon: ClipboardListOutline as ComponentType,
      href: '/guide/jsr-version'
    },
    {
      name: 'NPM Author Downloads',
      icon: GridPlusOutline as ComponentType,
      href: '/guide/npm-author-downloads'
    },
    {
      name: 'NPM Downloads',
      icon: BellActiveAltOutline as ComponentType,
      href: '/guide/npm-downloads'
    },
    {
      name: 'NPM Version',
      icon: ChartPieOutline as ComponentType,
      href: '/guide/npm-version'
    },
    {
      name: 'Pypi Version',
      icon: ClipboardListOutline as ComponentType,
      href: '/guide/pypi-version'
    },
    {
      name: 'Static Badge',
      icon: DatabaseOutline as ComponentType,
      href: '/guide/static-badge'
    }
  ];

</script>
<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';
  import type { ListType } from 'runes-webkit';
  import { Footer, OnThisPage, extract, Sidebar, removeHyphensAndCapitalize, ExpandOutline, CogOutline, BellActiveAltOutline, GridPlusOutline, ChartPieOutline, ClipboardListOutline, DatabaseOutline } from 'runes-webkit'
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import Nav from './utils/Nav.svelte';
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
    {name: 'Guide', href: '/guide/github'},
    {name: 'Quickstart', href: '/guide/quickstart'},
  ]
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com',
  }
  const urlsToIncludeSwitcherAndSidebar =['/guide/']
  const siteName = removeHyphensAndCapitalize(__NAME__)
  const twitterUrl = 'https://twitter.com/shinokada'
  const githubUrl = `https://github.com/shinokada/${__NAME__}`

</script>
<RunesMetaTags {...metaTags} />
<Runatics {analyticsId} />

<Nav {lis} {siteName} {twitterUrl} {githubUrl} urlsToIncludeSwitcher={urlsToIncludeSwitcherAndSidebar}/>
<div class="lg:flex">  
{#if urlsToIncludeSwitcherAndSidebar.some(path => currentUrl.startsWith(path))}
  <Sidebar 
  sidebarList={newSidebarList}
  s_b_aside='fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block hidden'
  s_b_div='fixed top-20 px-2 w-60'
  />
  <div class="relative">
    <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
  </div>
{/if}
  {@render children()}
</div>
<Footer {brand} {lis}/>