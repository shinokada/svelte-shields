<script lang="ts">
  import { NpmDownload, type NpmDownloadPropsType } from '$lib';

  const color1: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    color: 'indigo'
  };
  const color2: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    color: '4B0082'
  };
  const color3: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    color: 'rgb(75, 0, 130)'
  };
  const color4: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    color: 'rgba(75, 0, 130, 1)'
  };

  const color5: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    color: 'hsl(275, 100%, 25%)'
  };

  const color6: NpmDownloadPropsType = {
    packageName: 'svelte-awesome-icons',
    color: 'hsla(275, 100%, 25%, 1)'
  };
</script>

<div class="grid gap-4">
  <NpmDownload {...color1} />
  <NpmDownload {...color2} />
  <NpmDownload {...color3} />
  <NpmDownload {...color4} />
  <NpmDownload {...color5} />
  <NpmDownload {...color6} />
</div>
