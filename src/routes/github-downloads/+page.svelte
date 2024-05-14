<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { GitHubDownloads } from '$lib'
  import type { GitHubDownloadsPropsType } from '$lib';
  const download: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'tera',
    logo: 'svelte',
    label: 'TERA',
    color: 'red',
    cacheSeconds: '86400',
    link: ['https://codewithshin.com', 'https://flowbite-svelte-icons.codewithshin.com']
  }
  const download1: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',

  }

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>GitHubDownloads component</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<CodeWrapper>
<GitHubDownloads {...download} />
</CodeWrapper>

<CodeWrapper>
<GitHubDownloads {...download1} />
</CodeWrapper>

<H2>Examples</H2>

<H3>Basic usage</H3>

<CodeWrapper>
  <GitHubDownloads {...download1} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>Possible values: flat, flat-square, plastic, for-the-badge, social.
  If not specified, the default style for this badge is "flat".</p>

  <CodeWrapper c_w_div='grid gap-4'>
    <GitHubDownloads {...download1} />
    <GitHubDownloads {...download1} />
    <GitHubDownloads {...download1} />
    <GitHubDownloads {...download1} />
    <GitHubDownloads {...download1} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />


<H2>Color</H2>
<p>Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).</p>

<CodeWrapper c_w_div='grid gap-4'>
  <GitHubDownloads {...download1} />
</CodeWrapper>

<H2>Logo & Label</H2>



<H2>Link</H2>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <GitHubDownloads {...download1} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H2>Other</H2>
<p><Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored).</p>
<CodeWrapper>
  <GitHubDownloads {...download1} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />