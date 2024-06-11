import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID_RUNES_LIB } from '$env/static/private';
import { metaTitle, metaDescription, metaImg } from 'runes-meta-tags';

export const load = ({ url }) => {
  const siteName = metaTitle('/', __NAME__);
  const title = metaTitle(url.pathname, __NAME__);
  const basicDesc = 'A collection of Shilds badge components for Svelte Runes.'
  const description = metaDescription(url.pathname, basicDesc);
  const image = metaImg(url.pathname, __NAME__);
  const keywords = 'svelte, runes, shields.io, badge, sveltekit';

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
      image,
      imageAlt: title,
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_RUNES_LIB
  };
};
