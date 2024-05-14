<script lang="ts">
  import { NpmDownloads } from 'svelte-shields'
  import type { NpmDownloadsPropsType } from 'svelte-shields';

  const logo_label: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: 'svelte',
    label: 'Svelte Awesome Icons',
  }
</script>

<NpmDownloads {...logo_label} />