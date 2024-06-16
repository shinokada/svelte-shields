<script lang="ts">
  import { License } from 'svelte-shields'
  import type { LicensePropsType } from 'svelte-shields';

  const other: LicensePropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
    logo: 'svelte',
    label: 'Svelte Shields',
    cacheSeconds: '86400',
  }

</script>



<License {...other} />