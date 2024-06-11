<script lang="ts">
  import { GitHubSponsor } from 'svelte-shields'
  import type { GitHubSponsorPropsType } from 'svelte-shields';
  
  const logo_label: GitHubSponsorPropsType = {
    user: 'sveltejs',
    logo: 'svelte',
    label: 'SVELTE'
  }
</script>

<GitHubSponsor {...logo_label} />