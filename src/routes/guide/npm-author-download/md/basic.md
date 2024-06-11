<script lang="ts">
  import { NpmAuthorDownload } from 'svelte-shields'
  import type { NpmAuthorDownloadPropsType } from 'svelte-shields';
  
  const basic: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
  }

  const basic2: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
    interval: 'dm',
  }
</script>

<NpmAuthorDownload {...basic} />
<NpmAuthorDownload {...basic2} />