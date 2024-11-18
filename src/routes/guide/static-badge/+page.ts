import type { MetaProps } from 'runes-meta-tags';
import { fetchPackageVersions } from '$lib/utils/npm-version';
import { svelte5_icons } from '$lib/data/icons';

const title = 'Static Badge - Svelte Shields';
const description = 'Static badge component for Svelte Runes';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-shields';
const versions = fetchPackageVersions(svelte5_icons);

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
    pageMetaTags,
    versions
  };
};
