import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_RUNES_LIB } from '$env/static/private';
// import { fetchPackageVersions } from '$lib/utils/npm-version';
// import { svelte5_icons } from '$lib/data/icons';

const title = 'Svelte Shields';
const description = 'A collection of Shilds badge components for Svelte Runes';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-shields';
const keywords = 'svelte, runes, sveltekit, shields.io, badges';
// const versions = fetchPackageVersions(svelte5_icons);

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image: imgUrl,
      imageAlt: title
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image: imgUrl,
      imageAlt: title,
      siteName: title,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_RUNES_LIB
  };
};
