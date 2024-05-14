<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { NpmDownloads } from '$lib'
  import type { NpmDownloadsPropsType } from '$lib';

const download: NpmDownloadsPropsType = {
  packageName: 'flowbite-svelte-icons',
  interval: 'dw',
  logo: 'svelte',
  color: 'red',
  cacheSeconds: '86400',
  link: ['https://codewithshin.com', 'https://flowbite-svelte-icons.codewithshin.com']
}
const download1: NpmDownloadsPropsType = {
  packageName: 'flowbite-svelte-icons',
  interval: 'dw',
  logoSize: 'auto',
  logo: 'svelte',
  label: 'FSI',
  style: 'for-the-badge',
}
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>NpmDownloads</h1>

<CodeWrapper>
<NpmDownloads {...download} />
</CodeWrapper>

<CodeWrapper>
<NpmDownloads {...download1} />
</CodeWrapper>