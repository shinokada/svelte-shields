<script lang="ts">
  import { NpmDownload } from 'svelte-shields'
  import type { NpmDownloadPropsType } from 'svelte-shields';

  const link: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    link: ['https://github.com/shinokada/svelte-awesome-icons', 'https://svelte-awesome-icons.codewithshin.com'],
  }
</script>

<NpmDownload {...link} />