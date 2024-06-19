<script lang="ts">
  import { PypiVersion } from 'svelte-shields'
  import type { PypiVersionPropsType } from 'svelte-shields';
  
  const basic: PypiVersionPropsType = {
    packageName: 'vennfig' 
  }
</script>

<PypiVersion {...basic} />
