<script lang="ts">
  import { NpmVersion } from 'svelte-shields'
  import type { NpmVersionPropsType } from 'svelte-shields';
  const logo_label: NpmVersionPropsType = {
    packageName: 'svelte',
    logo: 'svelte',
    label: 'SVELTE'
  }
</script>

<NpmVersion {...logo_label} />