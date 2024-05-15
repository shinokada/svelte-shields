<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { GitHubDownloads } from '$lib'
  import type { GitHubDownloadsPropsType } from '$lib';

  const basic: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
  }

  const style1: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'flat',
  }
  const style2: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'flat-square',
  }
  const style3: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'for-the-badge',
  }
  const style4: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'plastic',
  }
  const style5: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'social',
  }

  const color1: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    color: 'red',
  }
  const color2: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    color: 'FF0000',
  }
  const color3: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    color: 'rgb(255, 0, 0)',
  }
  const color4: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    color: 'rgba(255, 0, 0, 1) ',
  }
  const color5: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    color: 'hsl(0, 100%, 50%)',
  }
  const color6: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    color: 'hsla(0, 100%, 50%, 1)',
  }

  const logo_label : GitHubDownloadsPropsType = {
    user: 'sveltejs',
    repo: 'svelte',
    logo: 'svelte',
  }

  const link: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    link: ['https://teffects.codewithshin.com', 'https://github.com/shinokada/teffects']
  }

  const other: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    cacheSeconds: '86400',
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

<H3>Basic usage</H3>
<p><Code>packageName</Code> may be the name of an unscoped package like <Code>package-name</Code> or a scoped package like <Code>@author/package-name</Code>.</p>
<p><Code>tag</Code> can be <Code>next, v1, v2, beta</Code>, etc.</p>

<CodeWrapper c_w_div='grid gap-4'>
  <GitHubDownloads {...basic} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>Possible values: flat, flat-square, plastic, for-the-badge, social.
  If not specified, the default style for this badge is "flat".</p>

<CodeWrapper c_w_div='grid gap-4'>
  <GitHubDownloads {...style1} />
  <GitHubDownloads {...style2} />
  <GitHubDownloads {...style3} />
  <GitHubDownloads {...style4} />
  <GitHubDownloads {...style5} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />


<H3>Color</H3>
<p>Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).</p>

<CodeWrapper c_w_div='grid gap-4'>
  <GitHubDownloads {...color1} />
  <GitHubDownloads {...color2} />
  <GitHubDownloads {...color3} />
  <GitHubDownloads {...color4} />
  <GitHubDownloads {...color5} />
  <GitHubDownloads {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} />

<H3>Logo & Label</H3>

<CodeWrapper>
  <GitHubDownloads {...logo_label} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo_and_label.md'] as string} />

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <GitHubDownloads {...link} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>
<p><Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored).</p>
<CodeWrapper>
  <GitHubDownloads {...other} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />
