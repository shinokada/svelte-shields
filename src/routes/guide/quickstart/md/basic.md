<script lang="ts">
  import { NpmVersion } from 'svelte-shields'
  import type { NpmVersionPropsType } from 'svelte-shields';
  const basic: NpmVersionPropsType = {
    packageName: 'svelte-shields',
    logo: 'svelte',
    label: 'Svelte Shields',
  }
</script>

<NpmVersion {...basic} />
