<script lang="ts">
  import { GitHubDownload, type GitHubDownloadPropsType } from '$lib';

  const other: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    cacheSeconds: '86400'
  };
</script>

<GitHubDownload {...other} />
