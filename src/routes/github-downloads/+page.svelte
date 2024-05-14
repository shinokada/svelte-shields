<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { GitHubDownloads } from '$lib'
  import type { GitHubDownloadsPropsType } from '$lib';
  const download: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'tera',
    logo: 'svelte',
    label: 'TERA',
    color: 'red',
    cacheSeconds: '86400',
    link: ['https://codewithshin.com', 'https://flowbite-svelte-icons.codewithshin.com']
  }
  const download1: GitHubDownloadsPropsType = {
    user: 'shinokada',
    repo: 'teffects',

  }

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>GitHubDownloads component</h1>

<H2>Props</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} />

<H2>Types</H2>

<HighlightCompo codeLang="ts" code={modules['./md/types.md'] as string} />

<H2>Examples</H2>

<CodeWrapper>
<GitHubDownloads {...download} />
</CodeWrapper>

<CodeWrapper>
<GitHubDownloads {...download1} />
</CodeWrapper>