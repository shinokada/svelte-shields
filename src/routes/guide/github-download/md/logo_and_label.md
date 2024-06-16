<script lang="ts">
  import { GitHubDownload } from 'svelte-shields'
  import type { GitHubDownloadPropsType } from 'svelte-shields';

  const logo_label: GitHubDownloadPropsType = {
    user: 'sveltejs',
    repo: 'svelte',
    logo: 'svelte',
  }
</script>

<GitHubDownload {...logo_label} />