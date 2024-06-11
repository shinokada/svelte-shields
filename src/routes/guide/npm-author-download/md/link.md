<script lang="ts">
  import { NpmAuthorDownload } from 'svelte-shields'
  import type { NpmAuthorDownloadPropsType } from 'svelte-shields';

  const link: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
    logo: 'svelte',
    link: ['https://github.com/shinokada', 'https://codewithshin.com'],
  }
</script>

<NpmAuthorDownload {...link} />