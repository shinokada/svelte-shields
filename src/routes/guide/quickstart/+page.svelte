<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { NpmVersion } from '$lib'
  import type { NpmVersionPropsType } from '$lib';
  const basic: NpmVersionPropsType = {
    packageName: 'svelte-shields',
    logo: 'svelte',
    label: 'Svelte Shields',
  }

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Quickstart - Svelte Shields</h1>

<p>Svelte Shields is a collection of Shields badges for Svelte Runes.</p>

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<p>Enable Runes in <Code>svelte.config.js</Code>:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation-2.md'] as string} />

<H2>Basic usage</H2>

<CodeWrapper>
  <NpmVersion {...basic} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/basic.md'] as string} />