<script lang="ts">
  import { License } from 'svelte-shields'
  import type { LicensePropsType } from 'svelte-shields';

  const style6: LicensePropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    style: 'flat',
  }
  const style7: LicensePropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    style: 'flat-square',
  }
  const style8: LicensePropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    style: 'for-the-badge',
  }
  const style9: LicensePropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    style: 'plastic',
  }
  const style10: LicensePropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    style: 'social',
  }

</script>

<License {...style6} />
<License {...style7} />
<License {...style8} />
<License {...style9} />
<License {...style10} />