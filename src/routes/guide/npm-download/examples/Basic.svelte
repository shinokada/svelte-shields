<script lang="ts">
  import { NpmDownload, type NpmDownloadPropsType } from '$lib';

  const basic: NpmDownloadPropsType = {
    packageName: 'flowbite-svelte-icons'
  };

  const basic2: NpmDownloadPropsType = {
    packageName: 'flowbite-svelte-icons',
    interval: 'dm'
  };
</script>

<div class="grid gap-4">
  <NpmDownload {...basic} />
  <NpmDownload {...basic2} />
</div>
