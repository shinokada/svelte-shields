<script lang="ts">
  import { Download } from 'svelte-shields';
  import type { DownloadPropsType } from 'svelte-shields';

  const npmdownload: DownloadPropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    interval: 'dw',
    color: 'red'
  }
  const githubdownload: DownloadPropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'tera',
    color: 'red'
  }

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>


<Download {...npmdownload} />
<Download {...githubdownload} />