<script lang="ts">
  import { GitHubSponsors } from 'svelte-shields'
  import type { GitHubSponsorsPropsType } from 'svelte-shields';
  
  const linkEx: GitHubSponsorsPropsType = {
    user: 'shinokada',
    label: 'TERA',
    link: ['https://tera.codewithshin.com', 'https://github.com/shinokada/tera']
  }
</script>

<GitHubSponsors {...linkEx} />