<script lang="ts">
  import { License, type LicensePropsType } from '$lib';

  const color1: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'indigo'
  };
  const color2: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: '4B0082'
  };
  const color3: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'rgb(75, 0, 130)'
  };
  const color4: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'rgba(75, 0, 130, 1)'
  };
  const color5: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'hsl(275, 100%, 25%)'
  };
  const color6: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    color: 'hsla(275, 100%, 25%, 1)'
  };
</script>

<div class="grid gap-4">
  <License {...color1} />
  <License {...color2} />
  <License {...color3} />
  <License {...color4} />
  <License {...color5} />
  <License {...color6} />
</div>
