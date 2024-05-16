<script>
  import { StaticBadge } from 'svelte-shields'
  import type { StaticBadgePropsType } from 'svelte-shields';

  const style1: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'flat',
  }
  const style2: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'flat-square',
  }
  const style3: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'for-the-badge',
  }
  const style4: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'plastic',
  }
  const style5: StaticBadgePropsType = {
    badgeContent: 'any_text-you_like-blue',
    logo: '',
    style: 'social',
  }
</script>

<StaticBadge {...style1} />
<StaticBadge {...style2} />
<StaticBadge {...style3} />
<StaticBadge {...style4} />
<StaticBadge {...style5} />