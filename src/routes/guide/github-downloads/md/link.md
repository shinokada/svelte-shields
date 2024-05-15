<script lang="ts">
  import { NpmDownloads } from 'svelte-shields'
  import type { NpmDownloadsPropsType } from 'svelte-shields';

  const link: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    link: ['https://github.com/shinokada/svelte-awesome-icons', 'https://svelte-awesome-icons.codewithshin.com'],
  }
</script>

<NpmDownloads {...link} />