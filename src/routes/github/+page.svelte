<script lang="ts">
  import { GitHub } from '$lib'
  import type { GitHubPropsType } from '$lib';
  const release: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    label: 'TERA',
    color: 'green',
  }
  const release1: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    label: 'new-tera',
    style: 'social',
    cacheSeconds: '86400',
    link: ['https://codewithshin.com', 'https://flowbite-svelte-icons.codewithshin.com']
  }
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>GitHub</h1>

<CodeWrapper>
  <GitHub {...release} />
</CodeWrapper>

<CodeWrapper>
<GitHub {...release1} />
</CodeWrapper>