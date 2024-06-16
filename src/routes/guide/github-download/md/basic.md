<script lang="ts">
  import { GitHubDownload } from 'svelte-shields'
  import type { GitHubDownloadPropsType } from 'svelte-shields';
  
  const basic: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
  }

</script>

<GitHubDownload {...basic} />
