<script lang="ts">
  import { License } from 'svelte-shields'
  import type { LicensePropsType } from 'svelte-shields';

  const basic: LicensePropsType = {
    licenseType: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
  }

  const basic2: LicensePropsType = {
    licenseType: 'npm',
    packageName: 'svelte-shields',
  }
</script>

<License {...basic} />
<License {...basic2} />