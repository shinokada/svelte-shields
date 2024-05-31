<script lang="ts">
  import { GitHubSponsors } from 'svelte-shields'
  import type { GitHubSponsorsPropsType } from 'svelte-shields';
  
  const logo_label: GitHubSponsorsPropsType = {
    user: 'sveltejs',
    logo: 'svelte',
    label: 'SVELTE'
  }
</script>

<GitHubSponsors {...logo_label} />