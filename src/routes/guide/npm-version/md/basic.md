<script lang="ts">
  import { NpmVersion } from 'svelte-shields'
  import type { NpmVersionPropsType } from 'svelte-shields';
  
  const basic: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
  }
  const basic2: NpmVersionPropsType = {
    packageName: 'flowbite-svelte-icons',
    tag: 'next'
  }
</script>

<NpmVersion {...basic} />
<NpmVersion {...basic2} />