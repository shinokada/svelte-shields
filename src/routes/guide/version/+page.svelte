<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { Version } from '$lib';
  import type { VersionPropsType } from '$lib';
  const basic: VersionPropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    color: 'red'
  };
  const basic2: VersionPropsType = {
    source: 'jsr',
    jsr_scope: '@hono',
    packageName: 'hono',
    color: 'red'
  };
  const basic3: VersionPropsType = {
    source: 'pypi',
    packageName: 'vennfig',
    color: 'red'
  };

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Version Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="md" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<CodeWrapper class="grid gap-4">
  <Version {...basic} />
  <Version {...basic2} />
  <Version {...basic3} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/examples.md'] as string} />
