<script lang="ts">
  import { GitHubVersion, type GitHubVersionPropsType } from '$lib';

  const color1: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'orange'
  };

  const color2: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'FF7F00' // Hex (Orange)
  };

  const color3: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'rgb(255, 127, 0)' // RGB (Orange)
  };

  const color4: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'rgba(255, 127, 0, 1)' // RGBA (Orange, fully opaque)
  };

  const color5: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'hsl(40, 100%, 50%)' // HSL (Orange)
  };

  const color6: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    color: 'hsla(40, 100%, 50%, 1)' // HSLA (Orange, fully opaque)
  };
</script>

<div class="grid gap-4">
  <GitHubVersion {...color1} />
  <GitHubVersion {...color2} />
  <GitHubVersion {...color3} />
  <GitHubVersion {...color4} />
  <GitHubVersion {...color5} />
  <GitHubVersion {...color6} />
</div>
