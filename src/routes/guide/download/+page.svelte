<script lang="ts">
  import { HighlightCompo, CodeWrapper, H2 } from 'runes-webkit';
  import * as ExampleComponents from './examples';
  const exampleModules = import.meta.glob('./examples/*', {
    query: '?raw',
    import: 'default',
    eager: true
  }) as Record<string, string>;
</script>

<h1>Download Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={exampleModules['./examples/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={exampleModules['./examples/types.md'] as string} />

<H2>Examples</H2>

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
