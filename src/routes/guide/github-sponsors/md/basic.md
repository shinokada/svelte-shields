<script lang="ts">
  import { GitHubSponsors } from 'svelte-shields'
  import type { GitHubSponsorsPropsType } from 'svelte-shields';
  
  const sponsor: GitHubSponsorsPropsType = {
    user: 'shinokada',
  }
</script>

<GitHubSponsors {...sponsor} />