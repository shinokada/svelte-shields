<script lang="ts">
  import { NpmAuthorDownloads } from 'svelte-shields'
  import type { NpmAuthorDownloadsPropsType } from 'svelte-shields';

  const logo_label: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: 'svelte',
    label: 'Shinichi Okada',
  }
</script>

<NpmAuthorDownloads {...logo_label} />