<script lang="ts">
  import { GitHubSponsor } from 'svelte-shields'
  import type { GitHubSponsorPropsType } from 'svelte-shields';
  
  const style: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'flat'
  }

  const style2: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'flat-square'
  }

  const style3: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'for-the-badge'
  }

  const style4: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'plastic'
  }

  const style5: GitHubSponsorPropsType = {
    user: 'shinokada',
    style: 'social'
  }
</script>

<GitHubSponsor {...style} />
<GitHubSponsor {...style2} />
<GitHubSponsor {...style3} />
<GitHubSponsor {...style4} />
<GitHubSponsor {...style5} />
