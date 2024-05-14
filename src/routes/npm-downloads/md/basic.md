<script lang="ts">
  import { NpmDownloads } from 'svelte-shields'
  import type { NpmDownloadsPropsType } from 'svelte-shields';
  
  const basic: NpmDownloadsPropsType = {
    packageName: 'flowbite-svelte-icons',
  }

  const basic2: NpmDownloadsPropsType = {
    packageName: 'flowbite-svelte-icons',
    interval: 'dm',
  }
</script>

<NpmDownloads {...basic} />
<NpmDownloads {...basic2} />