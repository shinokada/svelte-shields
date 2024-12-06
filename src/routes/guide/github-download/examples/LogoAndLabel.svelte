<script lang="ts">
  import { GitHubDownload, type GitHubDownloadPropsType } from '$lib';

  const logo_label: GitHubDownloadPropsType = {
    user: 'facebook',
    repo: 'react',
    logo: 'react'
  };
</script>

<GitHubDownload {...logo_label} />
