<script lang="ts">
  import { NpmDownload } from 'svelte-shields'
  import type { NpmDownloadPropsType } from 'svelte-shields';

  const logo_label: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    label: 'Svelte Awesome Icons',
  }
</script>

<NpmDownload {...logo_label} />