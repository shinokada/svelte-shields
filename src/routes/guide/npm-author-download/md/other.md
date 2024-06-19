<script lang="ts">
  import { NpmAuthorDownload } from 'svelte-shields'
  import type { NpmAuthorDownloadPropsType } from 'svelte-shields';

  const other: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    logo: 'svelte',
    cacheSeconds: '86400'
  }
</script>

<NpmAuthorDownload {...other} />