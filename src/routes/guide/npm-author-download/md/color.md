<script lang="ts">
  import { NpmAuthorDownload } from 'svelte-shields'
  import type { NpmAuthorDownloadPropsType } from 'svelte-shields';

  const color1: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'indigo'
  }
  const color2: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: '4B0082'
  }
  const color3: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'rgb(75, 0, 130)'
  }
  const color4: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'rgba(75, 0, 130, 1)'
  }

  const color5: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'hsl(275, 100%, 25%)'
  }

  const color6: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    color: 'hsla(275, 100%, 25%, 1)',
  }
</script>

<NpmAuthorDownload {...color1} />
<NpmAuthorDownload {...color2} />
<NpmAuthorDownload {...color3} />
<NpmAuthorDownload {...color4} />
<NpmAuthorDownload {...color5} />
<NpmAuthorDownload {...color6} />