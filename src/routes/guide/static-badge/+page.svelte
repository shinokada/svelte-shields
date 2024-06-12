<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { StaticBadge } from '$lib'
  import type { StaticBadgePropsType } from '$lib';
  
  const basic: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
  }
  const basic2: StaticBadgePropsType = {
    badgeContent: 'just the message-8a2be2',
    logo: '',
  }


  const style1: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'flat',
  }
  const style2: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'flat-square',
  }
  const style3: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'for-the-badge',
  }
  const style4: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'plastic',
  }
  const style5: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'social',
  }

  const color1: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    color: 'green'
  }

  const color2: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    color: '00FF00' 
  }

  const color3: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    color: 'rgb(0, 255, 0)' 
  }

  const color4: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    color: 'rgba(0, 255, 0, 1)' 
  }

  const color5: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    color: 'hsl(120, 100%, 50%)' 
  }

  const color6: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    color: 'hsla(120, 100%, 50%, 1)' 
  }

  const logo_label: StaticBadgePropsType = {
    badgeContent: 'Svelte-blue',
    logo: 'svelte',
    label: 'Awesome',
    color:'red'
  }

  const link: StaticBadgePropsType = {
    badgeContent: 'link_1-link_2-blue',
    logo: '',
    link: ['https://codewithshin.com', 'https://github.com/shinokada']
  }
  
  const other: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    cacheSeconds: '86400',
  }


  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Static Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<H3>Basic usage</H3>
<p><Code>badgeContent</Code> may be the name of an unscoped package like <Code>package-name</Code> or a scoped package like <Code>@author/package-name</Code>.</p>
<p><Code>tag</Code> can be <Code>next, v1, v2, beta</Code>, etc.</p>

<CodeWrapper c_w_div='grid gap-4'>
  <StaticBadge {...basic} />
  <StaticBadge {...basic2} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>Possible values: flat, flat-square, plastic, for-the-badge, social.
  If not specified, the default style for this badge is "flat".</p>

<CodeWrapper c_w_div='grid gap-4'>
  <StaticBadge {...style1} />
  <StaticBadge {...style2} />
  <StaticBadge {...style3} />
  <StaticBadge {...style4} />
  <StaticBadge {...style5} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />


<H3>Color</H3>
<p>Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).</p>

<CodeWrapper c_w_div='grid gap-4'>
  <StaticBadge {...color1} />
  <StaticBadge {...color2} />
  <StaticBadge {...color3} />
  <StaticBadge {...color4} />
  <StaticBadge {...color5} />
  <StaticBadge {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} />

<H3>Logo & Label</H3>

<CodeWrapper c_w_div='grid gap-4'>
  <StaticBadge {...logo_label} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo_and_label.md'] as string} />

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <StaticBadge {...link} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>
<p><Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored).</p>
<CodeWrapper>
  <StaticBadge {...other} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />