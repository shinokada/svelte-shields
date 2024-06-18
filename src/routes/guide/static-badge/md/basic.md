<script lang="ts">
  import { StaticBadge } from 'svelte-shields'
  import type { StaticBadgePropsType } from 'svelte-shields';

  const basic: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue' 
  }
  const basic2: StaticBadgePropsType = {
    badgeContent: 'just_the_message-8a2be2' 
  }
</script>

<StaticBadge {...basic} />
<StaticBadge {...basic2} />
