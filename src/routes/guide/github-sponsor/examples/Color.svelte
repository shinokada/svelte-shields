<script lang="ts">
  import { GitHubSponsor, type GitHubSponsorPropsType } from '$lib';

  const color1: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'orange'
  };

  const color2: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'FF7F00' // Hex (Orange)
  };

  const color3: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'rgb(255, 127, 0)' // RGB (Orange)
  };

  const color4: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'rgba(255, 127, 0, 1)' // RGBA (Orange, fully opaque)
  };

  const color5: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'hsl(40, 100%, 50%)' // HSL (Orange)
  };

  const color6: GitHubSponsorPropsType = {
    user: 'shinokada',
    color: 'hsla(40, 100%, 50%, 1)' // HSLA (Orange, fully opaque)
  };
</script>

<div class="grid gap-4">
  <GitHubSponsor {...color1} />
  <GitHubSponsor {...color2} />
  <GitHubSponsor {...color3} />
  <GitHubSponsor {...color4} />
  <GitHubSponsor {...color5} />
  <GitHubSponsor {...color6} />
</div>
