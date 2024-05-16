<script lang="ts">
  import { GitHub } from '$lib'
  import type { GitHubPropsType } from '$lib';
  const release: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
  }

  const release2: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'flat'
  }

  const release3: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'flat-square'
  }

  const release4: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'for-the-badge'
  }

  const release5: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'plastic'
  }

  const release6: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'social'
  }

  const color1: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'orange'
  }

  const color2: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'FF7F00' // Hex (Orange)
  }

  const color3: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'rgb(255, 127, 0)' // RGB (Orange)
  }

  const color4: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'rgba(255, 127, 0, 1)' // RGBA (Orange, fully opaque)
  }

  const color5: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'hsl(40, 100%, 50%)' // HSL (Orange)
  }

  const color6: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'hsla(40, 100%, 50%, 1)' // HSLA (Orange, fully opaque)
  }

  const logo_label: GitHubPropsType = {
    user: 'sveltejs',
    repo: 'svelte',
    logo: 'svelte',
    label: 'SVELTE'
  }


  const linkEx: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    label: 'TERA',
    link: ['https://tera.codewithshin.com', 'https://github.com/shinokada/tera']
  }

  const otherEx: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    cacheSeconds: '86400',
  }

  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>GitHub Component - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="md" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<H3>Basic usage</H3>

<CodeWrapper>
  <GitHub {...release} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>Possible values: flat, flat-square, plastic, for-the-badge, social.
  If not specified, the default style for this badge is "flat".</p>

  <CodeWrapper c_w_div='grid gap-4'>
  <GitHub {...release2} />
  <GitHub {...release3} />
  <GitHub {...release4} />
  <GitHub {...release5} />
  <GitHub {...release6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />


<H3>Color</H3>
<p>Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).</p>

<CodeWrapper c_w_div='grid gap-4'>
  <GitHub {...color1} />
  <GitHub {...color2} />
  <GitHub {...color3} />
  <GitHub {...color4} />
  <GitHub {...color5} />
  <GitHub {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} />

<H3>Logo & Label</H3>

<CodeWrapper>
  <GitHub {...logo_label} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo-and-label.md'] as string} />

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <GitHub {...linkEx} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>
<p><Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored).</p>
<CodeWrapper>
  <GitHub {...otherEx} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />