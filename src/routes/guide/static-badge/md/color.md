<script lang="ts">
  import { StaticBadge } from 'svelte-shields'
  import type { StaticBadgePropsType } from 'svelte-shields';

  const color1: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    color: 'green'
  }

  const color2: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    color: '00FF00' 
  }

  const color3: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    color: 'rgb(0, 255, 0)' 
  }

  const color4: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    color: 'rgba(0, 255, 0, 1)' 
  }

  const color5: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    color: 'hsl(120, 100%, 50%)' 
  }

  const color6: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    color: 'hsla(120, 100%, 50%, 1)' 
  }
</script>

<StaticBadge {...color1} />
<StaticBadge {...color2} />
<StaticBadge {...color3} />
<StaticBadge {...color4} />
<StaticBadge {...color5} />
<StaticBadge {...color6} />