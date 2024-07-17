<script context="module" lang="ts">
  export const newSidebarList: ListType[] = [
    {
      name: 'Quickstart',
      icon: BikeLineMap,
      href: '/guide/quickstart'
    },
    {
      name: 'Static Badge',
      icon: BellLineOthers,
      href: '/guide/static-badge'
    },
    {
      name: 'License',
      icon: ExpandOutline,
      href: '/guide/license'
    },
    {
      name: 'Version',
      icon: BellActiveAltOutline,
      children: [
        {
          name: 'All in one',
          icon: BeerLineFood,
          href: '/guide/version'
        },
        {
          name: 'GitHub Version',
          icon: GithubFillLogos,
          href: '/guide/github-version'
        },
        {
          name: 'NPM Version',
          icon: NpmjsLineLogos,
          href: '/guide/npm-version'
        },
        {
          name: 'Jsr Version',
          icon: ClipboardListOutline,
          href: '/guide/jsr-version'
        },
        {
          name: 'Pypi Version',
          icon: GridPlusOutline,
          href: '/guide/pypi-version'
        }
      ]
    },
    {
      name: 'Download',
      icon: DownloadLineSystem,
      children: [
        {
          name: 'All in one',
          icon: BeerLineFood,
          href: '/guide/download'
        },
        {
          name: 'GitHub Download',
          icon: GithubFillLogos,
          href: '/guide/github-download'
        },
        {
          name: 'NPM Download',
          icon: NpmjsLineLogos,
          href: '/guide/npm-download'
        }
      ]
    },
    {
      name: 'GitHub',
      icon: GithubFillLogos,
      children: [
        {
          name: 'GitHub Sponsor',
          icon: GithubFillLogos,
          href: '/guide/github-sponsor'
        }
      ]
    },
    {
      name: 'NPM',
      icon: NpmjsLineLogos,
      children: [
        {
          name: 'NPM Author Download',
          icon: NpmjsLineLogos,
          href: '/guide/npm-author-download'
        }
      ]
    }
  ];
</script>

<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  import type { Component } from 'svelte';
  import type { ListType } from 'runes-webkit';
  import {
    Footer,
    OnThisPage,
    extract,
    Sidebar,
    removeHyphensAndCapitalize,
    ExpandOutline,
    CogOutline,
    BellActiveAltOutline,
    GridPlusOutline,
    ChartPieOutline,
    ClipboardListOutline
  } from 'runes-webkit';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import Nav from './utils/Nav.svelte';
  import { Runatics } from 'runatics';
  import {
    BellLineOthers,
    BeerLineFood,
    NpmjsLineLogos,
    CupLineFood,
    DownloadLineSystem,
    PlayReverseLargeFillMedia,
    GithubFillLogos
  } from 'svelte-remix';
  import BikeLineMap from './utils/BikeLineMap.svelte';

  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID_RUNES_LIB;
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
  });
  const lis = [
    { name: 'Guide', href: '/guide/github-version' },
    { name: 'Quickstart', href: '/guide/quickstart' }
  ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  const urlsToIncludeSwitcherAndSidebar = ['/guide/'];
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const twitterUrl = 'https://twitter.com/shinokada';
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<Nav
  {lis}
  {siteName}
  {twitterUrl}
  {githubUrl}
  urlsToIncludeSwitcher={urlsToIncludeSwitcherAndSidebar}
/>
<div class="lg:flex">
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
    <Sidebar
      sidebarList={newSidebarList}
      asideClass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block hidden"
      divClass="w-60 fixed top-20 dark_bg_theme"
    />
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
  {@render children()}
</div>
<Footer {brand} {lis} />
