<script lang="ts">
  import { removeHyphensAndCapitalize, HomeCards, SupportBanner, TechInfo,  ExpandOutline} from 'runes-webkit';
  import { Npm, Github, Python } from 'svelte-supertiny'

  const shields_cards = [
    {
      title: 'NpmVersion',
      description: 'Shields badge for npm version',
      icon: Npm,
      href: 'guide/npm-version'
    },
    {
      title: 'NpmDownloads',
      description: 'Shields badge for npm downloads',
      icon: Npm,
      href: 'guide/npm-download'
    },
    {
      title: 'NpmAuthorDownloads',
      description: 'Shields badge for npm author downloads',
      icon: Npm,
      href: 'guide/npm-author-downloads'
    },
    {
      title:'GitHub',
      description: 'Shields badge for GitHub release',
      icon: Github,
      href: '/guide/github'
    },
    {
      title:'GitHubDownloads',
      description: 'Shields badge for GitHub downloads',
      icon: Github,
      href: '/guide/github-download'
    },
    {
      title:'License Component',
      description: 'Shields badge for GitHub and NPM license',
      icon: ExpandOutline,
      icon_class: 'text-green-500',
      href: '/guide/license'
    },
    {
      title:'PypiVersion',
      description: 'Shields badge for Pypi version',
      icon: Python,
      href: '/guide/pypi-version'
    },
    {
      title:'StaticBadge',
      description: 'Shields badge for static badges',
      icon: ExpandOutline,
      icon_class: 'text-amber-500',
      href: '/guide/static-badge'
    },
    {
      title:'JsrVersion',
      description: 'Shields badge for JSR version',
      icon: ExpandOutline,
      icon_class: 'text-red-500',
      href: '/guide/jsr-version'
    },
  ]

  const pkg = {
    pkgName: __NAME__,
    pkgVersion: __VERSION__,
    repoUrl: __GITHUBURL__,
    runaticsVersion: __RUNATICS_VERSION__,
    runesMetaTagsVersion: __RUNES_METATAGS_VERSION__,
    svelteVersion: __SVELTE_VERSION__,
    svelteKitVersion: __SVELTEKIT_VERSION__,
    svelte5uilib: __SVELTE_5_UI_LIB_VERSION__,
    svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__,
    viteVersion: __VITE_VERSION__
  };
</script>

<div class="relative h-full max-w-7xl mx-auto overflow-y-auto px-8 pb-20">
<SupportBanner>
    To Keep It Going, Please Show Your Love.<a href='https://ko-fi.com/Z8Z2CHALG' target='_blank'><img height='40' style='border:0px;height:40px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>
</SupportBanner>

<h1 class='flex justify-center my-8'>{removeHyphensAndCapitalize(__NAME__)}</h1>

<HomeCards cards={shields_cards}/>

<TechInfo {...pkg} />
</div>