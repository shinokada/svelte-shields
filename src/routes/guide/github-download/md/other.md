<script>
  import { NpmDownloads } from 'svelte-shields'
  import type { NpmDownloadsPropsType } from 'svelte-shields';

  const other: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    label: 'Svelte Awesome Icons',
    cacheSeconds: '86400',
  }
</script>

<NpmDownloads {...other} />