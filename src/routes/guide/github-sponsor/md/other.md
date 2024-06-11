<script>
  import { GitHubSponsor } from 'svelte-shields'
  import type { GitHubSponsorPropsType } from 'svelte-shields';
  
  const otherEx: GitHubSponsorPropsType = {
    user: 'shinokada',
    cacheSeconds: '86400',
  }
</script>

<GitHubSponsor {...otherEx} />