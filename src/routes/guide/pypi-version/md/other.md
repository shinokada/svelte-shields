<script>
  import { PypiVersion } from 'svelte-shields'
  import type { PypiVersionPropsType } from 'svelte-shields';

  const other: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    cacheSeconds: '86400',
  }
</script>

<PypiVersion {...other} />