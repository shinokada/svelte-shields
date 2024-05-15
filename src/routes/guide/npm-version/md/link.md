<script lang="ts">
  import { NpmVersion } from 'svelte-shields'
  import type { NpmVersionPropsType } from 'svelte-shields';

  const link: NpmVersionPropsType = {
    packageName: 'svelte-5-ui-lib',
    label: 'Svelte 5 UI Library',
    link: ['https://svelte-5-ui-lib.codewithshin.com', 'https://github.com/shinokada/svelte-5-ui-lib']
  }
</script>

<NpmVersion {...link} />