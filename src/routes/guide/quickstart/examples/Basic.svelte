<script lang="ts">
  import { NpmVersion, type NpmVersionPropsType } from '$lib';

  const basic: NpmVersionPropsType = {
    packageName: 'svelte-shields',
    logo: 'svelte',
    label: 'Svelte Shields'
  };
</script>

<NpmVersion {...basic} />
