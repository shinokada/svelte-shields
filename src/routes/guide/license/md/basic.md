<script lang="ts">
  import { License } from 'svelte-shields'
  import type { LicensePropsType } from 'svelte-shields';

  const basic: LicensePropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
  }

  const basic2: LicensePropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
  }
</script>

<License {...basic} />
<License {...basic2} />