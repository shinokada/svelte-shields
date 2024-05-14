<script lang="ts">
  import { removeHyphensAndCapitalize, HomeCards, SupportBanner, TechInfo, BellActiveAltOutline, insertObjectToArray, excludeByTitle, cards, info, pkg, BadgeCheckOutline, Accessibility, TruckFastSolid, GlobeOutline } from 'runes-webkit';

  const shields_cards = [
    {
      title: 'NpmVersion',
      description: 'Shields badge for npm version',
      icon: BadgeCheckOutline,
      icon_class: 'text-pink-500',
      href: 'npm-version'
    },
    {
      title: 'NpmDownloads',
      description: 'Shields badge for npm downloads',
      icon: Accessibility,
      icon_class: 'text-green-400',
      href: 'npm-downloads'
    },
    {
      title:'GitHub',
      description: 'Shields badge for GitHub release',
      icon: TruckFastSolid,
      icon_class: 'text-yellow-500',
      href: 'github'
    },
    {
      title:'GitHubDownloads',
      description: 'Shields badge for GitHub downloads',
      icon: GlobeOutline,
      icon_class: 'text-amber-500',
      href: 'github-downloads'
    },
  ]

  const runaticsVersion = __RUNATICS_VERSION__;
  const runesMetaTagsVersion = __RUNES_METATAGS_VERSION__;
  let newPkg = $state({...pkg, runaticsVersion, runesMetaTagsVersion})
</script>

<div class="relative h-full max-w-7xl mx-auto overflow-y-auto px-8 pb-20">
<SupportBanner>
    To Keep It Going, Please Show Your Love.<a href='https://ko-fi.com/Z8Z2CHALG' target='_blank'><img height='40' style='border:0px;height:40px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>
</SupportBanner>

<h1 class='flex justify-center my-8'>{removeHyphensAndCapitalize(__NAME__)}</h1>

<HomeCards cards={shields_cards}/>

<TechInfo {...newPkg} />
</div>