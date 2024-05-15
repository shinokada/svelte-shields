<script>
  import { NpmAuthorDownloads } from 'svelte-shields'
  import type { NpmAuthorDownloadsPropsType } from 'svelte-shields';

  const other: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: 'svelte',
    cacheSeconds: '86400',
  }
</script>

<NpmAuthorDownloads {...other} />