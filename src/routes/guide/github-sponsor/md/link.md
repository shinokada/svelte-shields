<script lang="ts">
  import { GitHubSponsor } from 'svelte-shields'
  import type { GitHubSponsorPropsType } from 'svelte-shields';
  
  const linkEx: GitHubSponsorPropsType = {
    user: 'shinokada',
    label: 'TERA',
    link: ['https://tera.codewithshin.com', 'https://github.com/shinokada/tera']
  }
</script>

<GitHubSponsor {...linkEx} />