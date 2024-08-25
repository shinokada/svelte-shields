import { type ListType, ExpandOutline, GridPlusOutline, BellActiveAltOutline, ClipboardListOutline } from 'runes-webkit';
import {
  BellLineOthers,
  BeerLineFood,
  NpmjsLineLogos,
  DownloadLineSystem,
  GithubFillLogos
} from 'svelte-remix';
import BikeLineMap from './BikeLineMap.svelte';

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
// export const newSidebarList: ListType[] = [...sidebarList, ...extra];
