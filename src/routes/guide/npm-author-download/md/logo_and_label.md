<script lang="ts">
  import { NpmAuthorDownload } from 'svelte-shields'
  import type { NpmAuthorDownloadPropsType } from 'svelte-shields';

  const logo_label: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
    logo: 'svelte',
    label: 'Shinichi Okada'
  }
</script>

<NpmAuthorDownload {...logo_label} />