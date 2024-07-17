<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { NpmAuthorDownload } from '$lib';
  import type { NpmAuthorDownloadPropsType } from '$lib';

  const basic: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
  };

  const basic2: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    interval: 'dm'
  };

  const style1: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'flat'
  };
  const style2: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'flat-square'
  };
  const style3: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'for-the-badge'
  };
  const style4: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'plastic'
  };
  const style5: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'social'
  };

  const color1: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'indigo'
  };
  const color2: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: '4B0082'
  };
  const color3: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'rgb(75, 0, 130)'
  };
  const color4: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'rgba(75, 0, 130, 1)'
  };

  const color5: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'hsl(275, 100%, 25%)'
  };

  const color6: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'hsla(275, 100%, 25%, 1)'
  };

  const logo_label: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    logo: 'svelte',
    label: 'Shinichi Okada'
  };

  const link: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    logo: 'svelte',
    link: [
      'https://github.com/shinokada/svelte-awesome-icons',
      'https://svelte-awesome-icons.codewithshin.com'
    ]
  };

  const other: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    logo: 'svelte',
    label: 'Svelte Awesome Icons',
    cacheSeconds: '86400'
  };

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>NPM Author Download Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<H3>Basic usage</H3>
<p>
  <Code>packageName</Code> may be the name of an unscoped package like <Code>package-name</Code> or a
  scoped package like <Code>@author/package-name</Code>.
</p>
<p><Code>tag</Code> can be <Code>next, v1, v2, beta</Code>, etc.</p>

<CodeWrapper divClass="grid gap-4">
  <NpmAuthorDownload {...basic} />
  <NpmAuthorDownload {...basic2} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>
  Possible values: flat, flat-square, plastic, for-the-badge, social. If not specified, the default
  style for this badge is "flat".
</p>

<CodeWrapper divClass="grid gap-4">
  <NpmAuthorDownload {...style1} />
  <NpmAuthorDownload {...style2} />
  <NpmAuthorDownload {...style3} />
  <NpmAuthorDownload {...style4} />
  <NpmAuthorDownload {...style5} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />

<H3>Color</H3>
<p>
  Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).
</p>

<CodeWrapper divClass="grid gap-4">
  <NpmAuthorDownload {...color1} />
  <NpmAuthorDownload {...color2} />
  <NpmAuthorDownload {...color3} />
  <NpmAuthorDownload {...color4} />
  <NpmAuthorDownload {...color5} />
  <NpmAuthorDownload {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} />

<H3>Logo & Label</H3>

<CodeWrapper>
  <NpmAuthorDownload {...logo_label} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo_and_label.md'] as string} />

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <NpmAuthorDownload {...link} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>
<p>
  <Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge
  basis, any values specified below the default will be ignored).
</p>
<CodeWrapper>
  <NpmAuthorDownload {...other} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />
