<script lang="ts">
  import { License, type LicensePropsType } from '$lib';

  const logo_label: LicensePropsType = {
    source: 'github',
    github_user: 'shinokada',
    github_repo: 'svelte-shields',
    logo: 'svelte',
    label: 'LICENSE'
  };
</script>

<License {...logo_label} />
