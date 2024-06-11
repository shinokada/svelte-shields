<script>
  import { NpmDownload } from 'svelte-shields'
  import type { NpmDownloadPropsType } from 'svelte-shields';

  const other: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    label: 'Svelte Awesome Icons',
    cacheSeconds: '86400',
  }
</script>

<NpmDownload {...other} />