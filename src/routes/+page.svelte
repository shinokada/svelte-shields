<script lang="ts">
  import {
    HomeCards,
    SupportBanner,
    TechInfo,
    ExpandOutline,
    BellActiveAltOutline
  } from 'runes-webkit';
  import Python from './utils/icons/Python.svelte';
  import Npm from './utils/Npm.svelte';
  import Github from './utils/Github.svelte';
  import type { CardType } from 'runes-webkit';

  const shields_cards: CardType[] = [
    {
      title: 'NpmVersion',
      description: 'Shields badge for npm version',
      Icon: Npm,
      href: 'guide/npm-version'
    },
    {
      title: 'NpmDownload',
      description: 'Shields badge for npm download',
      Icon: Npm,
      href: 'guide/npm-download'
    },
    {
      title: 'NpmAuthorDownload',
      description: 'Shields badge for npm author download',
      Icon: Npm,
      href: 'guide/npm-author-download'
    },
    {
      title: 'GitHubVersion',
      description: 'Shields badge for GitHub release',
      Icon: Github,
      href: '/guide/github-version'
    },
    {
      title: 'GitHubDownload',
      description: 'Shields badge for GitHub download',
      Icon: Github,
      href: '/guide/github-download'
    },
    {
      title: 'GitHubSponsor',
      description: 'Shields badge for GitHub sponsor',
      Icon: Github,
      href: '/guide/github-sponsor'
    },
    {
      title: 'Download',
      description: 'All-in-one Shields badge for download',
      Icon: BellActiveAltOutline,
      icon_class: 'text-orange-500',
      href: '/guide/download'
    },
    {
      title: 'Version',
      description: 'All-in-one Shields badge for version',
      Icon: BellActiveAltOutline,
      icon_class: 'text-blue-500',
      href: '/guide/version'
    },
    {
      title: 'License Component',
      description: 'Shields badge for GitHub and NPM license',
      Icon: ExpandOutline,
      icon_class: 'text-green-500',
      href: '/guide/license'
    },
    {
      title: 'PypiVersion',
      description: 'Shields badge for Pypi version',
      Icon: Python,
      href: '/guide/pypi-version'
    },
    {
      title: 'StaticBadge',
      description: 'Shields badge for static badges',
      Icon: ExpandOutline,
      icon_class: 'text-amber-500',
      href: '/guide/static-badge'
    },
    {
      title: 'JsrVersion',
      description: 'Shields badge for JSR version',
      Icon: ExpandOutline,
      icon_class: 'text-red-500',
      href: '/guide/jsr-version'
    }
  ];
  /*eslint no-undef: "off"*/
  const pkg = {
    pkgName: __NAME__,
    pkgVersion: __VERSION__,
    repoUrl: __GITHUBURL__,
    runaticsVersion: __RUNATICS_VERSION__,
    runesMetaTagsVersion: __RUNES_METATAGS_VERSION__,
    svelteVersion: __SVELTE_VERSION__,
    svelteKitVersion: __SVELTEKIT_VERSION__,
    svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
    viteVersion: __VITE_VERSION__
  };
</script>

<div class="relative mx-auto mt-8 h-full max-w-7xl overflow-y-auto px-8 pb-20">
  <SupportBanner class="relative mt-4">
    To Keep It Going, Please Show Your Love.<a href="https://ko-fi.com/Z8Z2CHALG" target="_blank"
      ><img
        height="40"
        style="border:0px;height:40px;"
        src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
        alt="Buy Me a Coffee at ko-fi.com"
      /></a
    >
  </SupportBanner>

  <h1 class="my-8 flex justify-center">Svelte Shields</h1>

  <HomeCards cards={shields_cards} cardClass="dark:bg-stone-950 dark:hover:bg-stone-900"/>

  <TechInfo {...pkg} class="dark:bg-stone-950"/>
</div>
