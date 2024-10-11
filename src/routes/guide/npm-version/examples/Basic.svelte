<script lang="ts">
  import { NpmVersion, type NpmVersionPropsType } from '$lib';

  const basic: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib'
  };
  const basic2: NpmVersionPropsType = {
    packageName: 'flowbite-svelte-icons',
    tag: 'next'
  };
</script>

<div class="grid gap-4">
  <NpmVersion {...basic} />
  <NpmVersion {...basic2} />
</div>
