<script lang="ts">
  import { GitHubDownload } from 'svelte-shields'
  import type { GitHubDownloadPropsType } from 'svelte-shields';

  const link: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    link: ['https://teffects.codewithshin.com', 'https://github.com/shinokada/teffects']
  }
</script>

<GitHubDownload {...link} />