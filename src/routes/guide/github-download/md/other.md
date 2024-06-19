<script lang="ts">
  import { GitHubDownload } from 'svelte-shields'
  import type { GitHubDownloadPropsType } from 'svelte-shields';

  const other: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    cacheSeconds: '86400',
  }
</script>

<GitHubDownload {...other} />