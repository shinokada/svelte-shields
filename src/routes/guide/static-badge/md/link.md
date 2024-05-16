<script lang="ts">
  import { StaticBadge } from 'svelte-shields'
  import type { StaticBadgePropsType } from 'svelte-shields';
  
  const link: StaticBadgePropsType = {
    badgeContent: 'link_1-link_2-blue',
    logo: '',
    link: ['https://codewithshin.com', 'https://github.com/shinokada']
  }
</script>

<StaticBadge {...link} />