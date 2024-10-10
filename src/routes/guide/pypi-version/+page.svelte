<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { PypiVersion } from '$lib';
  import type { PypiVersionPropsType } from '$lib';

  const basic: PypiVersionPropsType = {
    packageName: 'vennfig'
  };

  const style1: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'flat'
  };
  const style2: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'flat-square'
  };
  const style3: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'for-the-badge'
  };
  const style4: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'plastic'
  };
  const style5: PypiVersionPropsType = {
    packageName: 'vennfig',
    style: 'social'
  };

  const color1: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'green'
  };

  const color2: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: '00FF00'
  };

  const color3: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'rgb(0, 255, 0)'
  };

  const color4: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'rgba(0, 255, 0, 1)'
  };

  const color5: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'hsl(120, 100%, 50%)'
  };

  const color6: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'hsla(120, 100%, 50%, 1)'
  };

  const logo_label: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: 'python',
    label: 'VENNFIG'
  };

  const link: PypiVersionPropsType = {
    packageName: 'vennfig',
    label: 'VENNFIG',
    link: ['https://vennfig.codewithshin.com', 'https://github.com/shinokada/vennfig']
  };

  const other: PypiVersionPropsType = {
    packageName: 'vennfig',
    cacheSeconds: '86400'
  };

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>PYPI Version Badge - Svelte Shields</h1>

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

<CodeWrapper class="grid gap-4">
  <PypiVersion {...basic} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />

<H3>Style</H3>
<p>
  Possible values: flat, flat-square, plastic, for-the-badge, social. If not specified, the default
  style for this badge is "flat".
</p>

<CodeWrapper class="grid gap-4">
  <PypiVersion {...style1} />
  <PypiVersion {...style2} />
  <PypiVersion {...style3} />
  <PypiVersion {...style4} />
  <PypiVersion {...style5} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/style.md'] as string} />

<H3>Color</H3>
<p>
  Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).
</p>

<CodeWrapper class="grid gap-4">
  <PypiVersion {...color1} />
  <PypiVersion {...color2} />
  <PypiVersion {...color3} />
  <PypiVersion {...color4} />
  <PypiVersion {...color5} />
  <PypiVersion {...color6} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/color.md'] as string} />

<H3>Logo & Label</H3>

<CodeWrapper class="grid gap-4">
  <PypiVersion {...logo_label} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/logo_and_label.md'] as string} />

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>
<CodeWrapper>
  <PypiVersion {...link} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/link.md'] as string} />

<H3>Other</H3>
<p>
  <Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge
  basis, any values specified below the default will be ignored).
</p>
<CodeWrapper>
  <PypiVersion {...other} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/other.md'] as string} />
