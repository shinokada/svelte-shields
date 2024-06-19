<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { NpmVersion } from '$lib'
  import type { NpmVersionPropsType } from '$lib';
  
  const basic: NpmVersionPropsType = {
    packageName: 'flowbite-svelte-icons' 
  }
  const basic2: NpmVersionPropsType = {
    packageName: 'flowbite-svelte-icons',
    tag: 'next'
  }

  const style1: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    style: 'flat',
  }
  const style2: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    style: 'flat-square',
  }
  const style3: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    style: 'for-the-badge',
  }
  const style4: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    style: 'plastic',
  }
  const style5: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    style: 'social',
  }

  const color1: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'green'
  }

  const color2: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: '00FF00' 
  }

  const color3: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'rgb(0, 255, 0)' 
  }

  const color4: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'rgba(0, 255, 0, 1)' 
  }

  const color5: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'hsl(120, 100%, 50%)' 
  }

  const color6: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'hsla(120, 100%, 50%, 1)' 
  }

  const logo_label: NpmVersionPropsType = {
    packageName: 'svelte',
    logo: 'svelte',
    label: 'SVELTE'
  }

  const logo_label2: NpmVersionPropsType = {
    packageName: 'flowbite-svelte-icons',
    logo: 'svelte',
    label: 'FLOWBITE SVELTE ICONS'
  }

  const link: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    label: 'Svelte 5 UI Library',
    link: ['https://svelte-5-ui-lib.codewithshin.com', 'https://github.com/shinokada/svelte-5-ui-lib']
  }
  
  const other: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    cacheSeconds: '86400',
  }


  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>NPM Version Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<H3>Basic usage</H3>
<p><Code>packageName</Code> may be the name of an unscoped package like <Code>package-name</Code> or a scoped package like <Code>@author/package-name</Code>.</p>
<p><Code>tag</Code> can be <Code>next, v1, v2, beta</Code>, etc.</p>

<CodeWrapper c_w_div='grid gap-4'>
  <NpmVersion {...basic} />
  <NpmVersion {...basic2} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>Possible values: flat, flat-square, plastic, for-the-badge, social.
  If not specified, the default style for this badge is "flat".</p>

<CodeWrapper c_w_div='grid gap-4'>
  <NpmVersion {...style1} />
  <NpmVersion {...style2} />
  <NpmVersion {...style3} />
  <NpmVersion {...style4} />
  <NpmVersion {...style5} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />


<H3>Color</H3>
<p>Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).</p>

<CodeWrapper c_w_div='grid gap-4'>
  <NpmVersion {...color1} />
  <NpmVersion {...color2} />
  <NpmVersion {...color3} />
  <NpmVersion {...color4} />
  <NpmVersion {...color5} />
  <NpmVersion {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} />

<H3>Logo & Label</H3>

<CodeWrapper c_w_div='grid gap-4'>
  <NpmVersion {...logo_label} />
  <NpmVersion {...logo_label2} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo_and_label.md'] as string} />

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <NpmVersion {...link} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>
<p><Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored).</p>
<CodeWrapper>
  <NpmVersion {...other} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />