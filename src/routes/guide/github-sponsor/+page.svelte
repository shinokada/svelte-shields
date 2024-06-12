<script lang="ts">
  import { GitHubSponsor } from '$lib'
  import type { GitHubSponsorPropsType } from '$lib';
  
  const sponsor: GitHubSponsorPropsType = {
    user: 'shinokada',
  }

  const style: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'flat'
  }

  const style2: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'flat-square'
  }

  const style3: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'for-the-badge'
  }

  const style4: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'plastic'
  }

  const style5: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'social'
  }

  const color1: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'orange'
  }

  const color2: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'FF7F00' // Hex (Orange)
  }

  const color3: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'rgb(255, 127, 0)' // RGB (Orange)
  }

  const color4: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'rgba(255, 127, 0, 1)' // RGBA (Orange, fully opaque)
  }

  const color5: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'hsl(40, 100%, 50%)' // HSL (Orange)
  }

  const color6: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'hsla(40, 100%, 50%, 1)' // HSLA (Orange, fully opaque)
  }

  const logo_label: GitHubSponsorPropsType = {
    user: 'sveltejs',
    logo: 'svelte',
    label: 'SVELTE'
  }


  const linkEx: GitHubSponsorPropsType = {
    user: 'shinokada',
    label: 'TERA',
    link: ['https://tera.codewithshin.com', 'https://github.com/shinokada/tera']
  }

  const otherEx: GitHubSponsorPropsType = {
    user: 'shinokada',
    cacheSeconds: '86400',
  }

  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>GitHub Sponsor Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="md" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<H3>Basic usage</H3>

<CodeWrapper>
  <GitHubSponsor {...sponsor} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>Possible values: flat, flat-square, plastic, for-the-badge, social.
  If not specified, the default style for this badge is "flat".</p>

  <CodeWrapper c_w_div='grid gap-4'>
  <GitHubSponsor {...style2} />
  <GitHubSponsor {...style3} />
  <GitHubSponsor {...style4} />
  <GitHubSponsor {...style5} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />


<H3>Color</H3>
<p>Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).</p>

<CodeWrapper c_w_div='grid gap-4'>
  <GitHubSponsor {...color1} />
  <GitHubSponsor {...color2} />
  <GitHubSponsor {...color3} />
  <GitHubSponsor {...color4} />
  <GitHubSponsor {...color5} />
  <GitHubSponsor {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} />

<H3>Logo & Label</H3>

<CodeWrapper>
  <GitHubSponsor {...logo_label} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo-and-label.md'] as string} />

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <GitHubSponsor {...linkEx} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>
<p><Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored).</p>
<CodeWrapper>
  <GitHubSponsor {...otherEx} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />