<script lang="ts">
  import { PypiVersion } from 'svelte-shields'
  import type { PypiVersionPropsType } from 'svelte-shields';

  const link: PypiVersionPropsType = {
    packageName: 'vennfig',
    label: 'VENNFIG',
    link: ['https://vennfig.codewithshin.com', 'https://github.com/shinokada/vennfig']
  }
</script>

<PypiVersion {...link} />