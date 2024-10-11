<script lang="ts">
  import { License, type LicensePropsType } from '$lib';

  const style6: LicensePropsType = {
    source: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'flat'
  };
  const style7: LicensePropsType = {
    source: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'flat-square'
  };
  const style8: LicensePropsType = {
    source: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'for-the-badge'
  };
  const style9: LicensePropsType = {
    source: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'plastic'
  };
  const style10: LicensePropsType = {
    source: 'npm',
    npm_packageName: 'svelte-shields',
    style: 'social'
  };
</script>

<div class="grid gap-4">
  <License {...style6} />
  <License {...style7} />
  <License {...style8} />
  <License {...style9} />
  <License {...style10} />
</div>
