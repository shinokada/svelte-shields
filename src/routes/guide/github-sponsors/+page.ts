import type { MetaProps } from 'runes-meta-tags';
const title = 'GitHubSponsors Component - Svelte Shields';
const description = 'Svelte Shields GitHubSponsors component for Svelte Runes';

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
