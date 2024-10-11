<script lang="ts">
  import { GitHubDownload, type GitHubDownloadPropsType } from '$lib';

  const logo_label: GitHubDownloadPropsType = {
    user: 'sveltejs',
    repo: 'svelte',
    logo: 'svelte'
  };
</script>

<GitHubDownload {...logo_label} />
