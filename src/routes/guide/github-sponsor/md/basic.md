<script lang="ts">
  import { GitHubSponsor } from 'svelte-shields'
  import type { GitHubSponsorPropsType } from 'svelte-shields';
  
  const sponsor: GitHubSponsorPropsType = {
    user: 'shinokada',
  }
</script>

<GitHubSponsor {...sponsor} />