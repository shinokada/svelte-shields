<script lang="ts">
  import { GitHubSponsors } from 'svelte-shields'
  import type { GitHubSponsorsPropsType } from 'svelte-shields';
  
  const color1: GitHubSponsorsPropsType = {
    user: 'shinokada',
    color: 'orange'
  }

  const color2: GitHubSponsorsPropsType = {
    user: 'shinokada',
    color: 'FF7F00' // Hex (Orange)
  }

  const color3: GitHubSponsorsPropsType = {
    user: 'shinokada',
    color: 'rgb(255, 127, 0)' // RGB (Orange)
  }

  const color4: GitHubSponsorsPropsType = {
    user: 'shinokada',
    color: 'rgba(255, 127, 0, 1)' // RGBA (Orange, fully opaque)
  }

  const color5: GitHubSponsorsPropsType = {
    user: 'shinokada',
    color: 'hsl(40, 100%, 50%)' // HSL (Orange)
  }

  const color6: GitHubSponsorsPropsType = {
    user: 'shinokada',
    color: 'hsla(40, 100%, 50%, 1)' // HSLA (Orange, fully opaque)
  }
</script>

<GitHubSponsors {...color1} />
<GitHubSponsors {...color2} />
<GitHubSponsors {...color3} />
<GitHubSponsors {...color4} />
<GitHubSponsors {...color5} />
<GitHubSponsors {...color6} />