<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { NpmDownloads } from '$lib'
  import type { NpmDownloadsPropsType } from '$lib';

  const basic: NpmDownloadsPropsType = {
    packageName: 'flowbite-svelte-icons',
  }

  const basic2: NpmDownloadsPropsType = {
    packageName: 'flowbite-svelte-icons',
    interval: 'dm',
  }

  const style1: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'flat',
  }
  const style2: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'flat-square',
  }
  const style3: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'for-the-badge',
  }
  const style4: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'plastic',
  }
  const style5: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'social',
  }

  const color1: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'indigo',
  }
  const color2: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: '4B0082',
  }
  const color3: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'rgb(75, 0, 130)',
  }
  const color4: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'rgba(75, 0, 130, 1)',
  }

  const color5: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'hsl(275, 100%, 25%)',
  }

  const color6: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'hsla(275, 100%, 25%, 1)',
  }

  const logo_label: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    label: 'Svelte Awesome Icons',
  }

  const link: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    link: ['https://github.com/shinokada/svelte-awesome-icons', 'https://svelte-awesome-icons.codewithshin.com'],
  }

  const other: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    label: 'Svelte Awesome Icons',
    cacheSeconds: '86400',
  }


  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>NpmDownloads Component - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>


<H3>Basic usage</H3>
<p><Code>packageName</Code> may be the name of an unscoped package like <Code>package-name</Code> or a scoped package like <Code>@author/package-name</Code>.</p>
<p><Code>tag</Code> can be <Code>next, v1, v2, beta</Code>, etc.</p>

<CodeWrapper c_w_div='grid gap-4'>
  <NpmDownloads {...basic} />
  <NpmDownloads {...basic2} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>Possible values: flat, flat-square, plastic, for-the-badge, social.
  If not specified, the default style for this badge is "flat".</p>

<CodeWrapper c_w_div='grid gap-4'>
  <NpmDownloads {...style1} />
  <NpmDownloads {...style2} />
  <NpmDownloads {...style3} />
  <NpmDownloads {...style4} />
  <NpmDownloads {...style5} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />


<H3>Color</H3>
<p>Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).</p>

<CodeWrapper c_w_div='grid gap-4'>
  <NpmDownloads {...color1} />
  <NpmDownloads {...color2} />
  <NpmDownloads {...color3} />
  <NpmDownloads {...color4} />
  <NpmDownloads {...color5} />
  <NpmDownloads {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} />

<H3>Logo & Label</H3>

<CodeWrapper>
  <NpmDownloads {...logo_label} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo_and_label.md'] as string} />

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <NpmDownloads {...link} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>
<p><Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge basis, any values specified below the default will be ignored).</p>
<CodeWrapper>
  <NpmDownloads {...other} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />
