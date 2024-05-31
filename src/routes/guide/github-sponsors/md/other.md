<script>
  import { GitHubSponsors } from 'svelte-shields'
  import type { GitHubSponsorsPropsType } from 'svelte-shields';
  
  const otherEx: GitHubSponsorsPropsType = {
    user: 'shinokada',
    cacheSeconds: '86400',
  }
</script>

<GitHubSponsors {...otherEx} />