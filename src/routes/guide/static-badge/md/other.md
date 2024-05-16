<script>
  import { StaticBadge } from 'svelte-shields'
  import type { StaticBadgePropsType } from 'svelte-shields';

  const other: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    cacheSeconds: '86400',
  }
</script>

<StaticBadge {...other} />