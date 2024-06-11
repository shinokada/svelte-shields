import type { MetaProps } from 'runes-meta-tags';
const title = 'GitHubSponsor Component - Svelte Shields';
const description = 'Svelte Shields GitHubSponsor component for Svelte Runes';

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
