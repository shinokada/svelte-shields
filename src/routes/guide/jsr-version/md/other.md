<script>
  import { NpmVersion } from 'svelte-shields'
  import type { NpmVersionPropsType } from 'svelte-shields';
  const other: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    cacheSeconds: '86400',
  }
</script>

<NpmVersion {...other} />