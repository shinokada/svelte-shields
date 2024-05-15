<script lang="ts">
  import { NpmAuthorDownloads } from 'svelte-shields'
  import type { NpmAuthorDownloadsPropsType } from 'svelte-shields';
  
  const basic: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
  }

  const basic2: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    interval: 'dm',
  }
</script>

<NpmAuthorDownloads {...basic} />
<NpmAuthorDownloads {...basic2} />