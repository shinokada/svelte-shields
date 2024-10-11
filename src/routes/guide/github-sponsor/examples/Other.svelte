<script lang="ts">
  import { GitHubSponsor, type GitHubSponsorPropsType } from '$lib';

  const otherEx: GitHubSponsorPropsType = {
    user: 'shinokada',
    cacheSeconds: '86400'
  };
</script>

<GitHubSponsor {...otherEx} />
