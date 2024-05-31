<script>
  import { GitHubSponsors } from 'svelte-shields'
  import type { GitHubSponsorsPropsType } from 'svelte-shields';
  
  const style: GitHubSponsorsPropsType = {
    user: 'shinokada',
    style: 'flat'
  }

  const style2: GitHubSponsorsPropsType = {
    user: 'shinokada',
    style: 'flat-square'
  }

  const style3: GitHubSponsorsPropsType = {
    user: 'shinokada',
    style: 'for-the-badge'
  }

  const style4: GitHubSponsorsPropsType = {
    user: 'shinokada',
    style: 'plastic'
  }

  const style5: GitHubSponsorsPropsType = {
    user: 'shinokada',
    style: 'social'
  }
</script>

<GitHubSponsors {...style} />
<GitHubSponsors {...style2} />
<GitHubSponsors {...style3} />
<GitHubSponsors {...style4} />
<GitHubSponsors {...style5} />
