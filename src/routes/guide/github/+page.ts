import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'GitHub Component - Svelte Shields',
    description: 'Svelte Shields GitHub component for Svelte Runes',
    og: {
      title: 'GitHub Component - Svelte Shields',
      description: 'Svelte Shields GitHub component for Svelte Runes',
    },
    twitter: {
      title: 'GitHub Component - Svelte Shields',
      description: 'Svelte Shields GitHub component for Svelte Runes',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
