<script lang="ts">
  import { NpmDownload } from 'svelte-shields'
  import type { NpmDownloadPropsType } from 'svelte-shields';
  
  const basic: NpmDownloadPropsType = {
    packageName: 'flowbite-svelte-icons',
  }

  const basic2: NpmDownloadPropsType = {
    packageName: 'flowbite-svelte-icons',
    interval: 'dm',
  }
</script>

<NpmDownload {...basic} />
<NpmDownload {...basic2} />