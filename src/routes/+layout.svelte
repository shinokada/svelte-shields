<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  import { Footer, OnThisPage, extract, Sidebar, removeHyphensAndCapitalize } from 'runes-webkit';
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import Nav from './utils/Nav.svelte';
  import { Runatics } from 'runatics';
  import { newSidebarList } from './utils/helper';

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
  /*eslint no-undef: "off"*/
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
  const twitterUrl = 'https://twitter.com/shinokada';
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
