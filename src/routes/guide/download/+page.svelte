<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { Download } from '$lib';
  import type { DownloadPropsType } from '$lib';

  const npmdownload: DownloadPropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    interval: 'dw',
    color: 'red'
  };
  const githubdownload: DownloadPropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'tera',
    color: 'red'
  };

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Download Badge - Svelte Shields</h1>

<H2>Props</H2>

<HighlightCompo codeLang="md" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<CodeWrapper divClass="grid gap-4">
  <Download {...npmdownload} />
  <Download {...githubdownload} />
</CodeWrapper>

<HighlightCompo codeLang="ts" code={modules['./md/examples.md'] as string} />
