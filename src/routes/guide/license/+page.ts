import type { MetaProps } from 'runes-meta-tags';
const title = 'License Component - Svelte Shields';
const description = 'Svelte Shields License component for Svelte Runes';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    }
  };
  return { pageMetaTags };
};
