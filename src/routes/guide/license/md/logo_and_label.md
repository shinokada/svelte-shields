<script lang="ts">
  import { License } from 'svelte-shields'
  import type { LicensePropsType } from 'svelte-shields';

  const logo_label: LicensePropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
    logo: 'svelte',
    label: 'LICENSE',
  }
</script>

<License {...logo_label} />