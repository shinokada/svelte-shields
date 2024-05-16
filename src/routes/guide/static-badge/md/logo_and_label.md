<script lang="ts">
  import { StaticBadge } from 'svelte-shields'
  import type { StaticBadgePropsType } from 'svelte-shields';

  const logo_label: StaticBadgePropsType = {
    badgeContent: 'Svelte-blue',
    logo: 'svelte',
    label: 'Awesome',
    color:'red'
  }
</script>

<StaticBadge {...logo_label} />