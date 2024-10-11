<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<h1>License Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={exampleModules['./examples/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={exampleModules['./examples/types.md'] as string} />

<H2>Examples</H2>

<H3>Basic usage</H3>
<p>
  Use <Code>npm</Code> or <Code>github</Code> for <Code>source</Code>. For <Code>github</Code>, <Code
    >github_user</Code
  > and <Code>github_repo</Code> are required. For <Code>npm</Code>, <Code>npm_packageName</Code> is
  required.
</p>

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
<p>GitHub</p>

<CodeWrapper>
  <ExampleComponents.StyleGitHub />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/StyleGitHub.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<p>NPM</p>
<CodeWrapper>
  <ExampleComponents.StyleNpm />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/StyleNpm.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H3>Color</H3>

<p>GitHub</p>
<CodeWrapper>
  <ExampleComponents.ColorGitHub />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/ColorGitHub.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<p>NPM</p>

<CodeWrapper>
  <ExampleComponents.ColorNpm />
  {#snippet codeblock()}
    <HighlightCompo
      codeLang="ts"
      replaceLib="svelte-shields"
      code={exampleModules['./examples/ColorNpm.svelte'] as string}
    />
  {/snippet}
</CodeWrapper>

<H3>Logo and Label</H3>

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
