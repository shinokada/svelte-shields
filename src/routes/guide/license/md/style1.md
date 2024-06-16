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

  const style1: LicensePropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
    style: 'flat',
  }
  const style2: LicensePropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
    style: 'flat-square',
  }
  const style3: LicensePropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
    style: 'for-the-badge',
  }
  const style4: LicensePropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
    style: 'plastic',
  }
  const style5: LicensePropsType = {
    source: 'github',
    user: 'shinokada',
    repo: 'svelte-shields',
    style: 'social',
  }
</script>

<License {...style1} />
<License {...style2} />
<License {...style3} />
<License {...style4} />
<License {...style5} />