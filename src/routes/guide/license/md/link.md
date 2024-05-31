<script lang="ts">
  import { License } from 'svelte-shields'
  import type { LicensePropsType } from 'svelte-shields';

  const link: LicensePropsType = {
    licenseType: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
    logo: 'svelte',
    link: ['https://github.com/shinokada/svelte-shields', 'https://svelte-shields.codewithshin.com'],
  }
</script>


<License {...link} />