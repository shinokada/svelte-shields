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

<h1>GitHubDownloads</h1>

<CodeWrapper>
<GitHubDownloads {...download} />
</CodeWrapper>

<CodeWrapper>
<GitHubDownloads {...download1} />
</CodeWrapper>