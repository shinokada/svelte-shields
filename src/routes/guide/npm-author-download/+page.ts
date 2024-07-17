import type { MetaProps } from 'runes-meta-tags';

const title = 'NPM Author Download Badge - Svelte Shields';
const description = 'Npm author download badge component for Svelte Runes';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-shields';

export const load = ({ url }) => {
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
  return { pageMetaTags };
};
