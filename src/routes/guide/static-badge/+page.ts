import type { MetaProps } from 'runes-meta-tags';
import { svelte5_icons } from '$lib/data/icons';
import { fetchPackageVersions } from '$lib/utils/npm-version';

const title = 'Static Badge - Svelte Shields';
const description = 'Static badge component for Svelte Runes';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-shields';

export const load = async ({ url }) => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: url.href
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return {
    pageMetaTags
  }
  // try {
  //   const versions = await fetchPackageVersions(svelte5_icons);
  //   return {
  //     pageMetaTags,
  //     versions
  //   };
  // } catch (error) {
  //   console.error('Failed to fetch versions:', error);
  //   return {
  //     versions: {},
  //     error: 'Failed to fetch versions'
  //   };
  // }
};
