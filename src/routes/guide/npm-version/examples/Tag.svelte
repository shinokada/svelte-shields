<script lang="ts">
  import { NpmVersion, type NpmVersionPropsType } from '$lib';

  const basic: NpmVersionPropsType = {
    packageName: 'svelte-awesome-icons'
  };
  const basic2: NpmVersionPropsType = {
    packageName: 'svelte-awesome-icons',
    tag: 'v1-latest'
  };
</script>

<div class="grid gap-4">
  <NpmVersion {...basic} />
  <NpmVersion {...basic2} />
</div>
