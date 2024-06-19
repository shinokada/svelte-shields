<script lang="ts">
  import { PypiVersion } from 'svelte-shields'
  import type { PypiVersionPropsType } from 'svelte-shields';

  const other: PypiVersionPropsType = {
    packageName: 'vennfig',
    cacheSeconds: '86400',
  }
</script>

<PypiVersion {...other} />