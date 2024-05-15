<script lang="ts">
  import { PypiVersion } from 'svelte-shields'
  import type { PypiVersionPropsType } from 'svelte-shields';
  
  const logo_label: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: 'python',
    label: 'VENNFIG'
  }
</script>

<PypiVersion {...logo_label} />