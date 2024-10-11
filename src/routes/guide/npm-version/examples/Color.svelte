<script lang="ts">
  import { NpmVersion, type NpmVersionPropsType } from '$lib';

  const color1: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'green'
  };

  const color2: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: '00FF00'
  };

  const color3: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'rgb(0, 255, 0)'
  };

  const color4: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'rgba(0, 255, 0, 1)'
  };

  const color5: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'hsl(120, 100%, 50%)'
  };

  const color6: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    color: 'hsla(120, 100%, 50%, 1)'
  };
</script>

<div class="grid gap-4">
  <NpmVersion {...color1} />
  <NpmVersion {...color2} />
  <NpmVersion {...color3} />
  <NpmVersion {...color4} />
  <NpmVersion {...color5} />
  <NpmVersion {...color6} />
</div>
