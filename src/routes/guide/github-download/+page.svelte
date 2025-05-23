<script lang="ts">
  import { HighlightCompo, CodeWrapper, H2, H3, Code } from 'runes-webkit';
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<h1>GitHub Download Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={exampleModules['./examples/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={exampleModules['./examples/types.md'] as string} />

<H2>Examples</H2>

<H3>Basic usage</H3>
<p>
  <Code>packageName</Code> may be the name of an unscoped package like <Code>package-name</Code> or a
  scoped package like <Code>@author/package-name</Code>.
</p>
<p><Code>tag</Code> can be <Code>next, v1, v2, beta</Code>, etc.</p>

<CodeWrapper>
  <ExampleComponents.Basic />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/Basic.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H3>Style</H3>
<p>
  Possible values: flat, flat-square, plastic, for-the-badge, social. If not specified, the default
  style for this badge is "flat".
</p>

<CodeWrapper>
  <ExampleComponents.Style />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/Style.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H3>Color</H3>
<p>
  Background color of the right part (hex, rgb, rgba, hsl, hsla and css named colors supported).
</p>

<CodeWrapper>
  <ExampleComponents.Color />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/Color.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H3>Logo & Label</H3>

<CodeWrapper>
  <ExampleComponents.LogoAndLabel />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/LogoAndLabel.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H3>Link</H3>
<p>Specify what clicking on the left/right of a badge should do.</p>

<CodeWrapper>
  <ExampleComponents.Link />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/Link.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H3>Other</H3>
<p>
  <Code>cacheSeconds</Code> is HTTP cache lifetime (rules are applied to infer a default value on a per-badge
  basis, any values specified below the default will be ignored).
</p>

<CodeWrapper>
  <ExampleComponents.Other />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/Other.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>
