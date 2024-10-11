<script lang="ts">
  import { GitHubDownload, type GitHubDownloadPropsType } from '$lib';

  const basic: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects'
  };
</script>

<GitHubDownload {...basic} />
