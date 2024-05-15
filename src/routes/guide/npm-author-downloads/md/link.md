<script lang="ts">
  import { NpmAuthorDownloads } from 'svelte-shields'
  import type { NpmAuthorDownloadsPropsType } from 'svelte-shields';

  const link: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: 'svelte',
    link: ['https://github.com/shinokada', 'https://codewithshin.com'],
  }
</script>

<NpmAuthorDownloads {...link} />