<script>
  import { NpmAuthorDownload } from 'svelte-shields'
  import type { NpmAuthorDownloadPropsType } from 'svelte-shields';

  const style1: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
    ,
    style: 'flat',
  }
  const style2: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
    ,
    style: 'flat-square',
  }
  const style3: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
    ,
    style: 'for-the-badge',
  }
  const style4: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
    ,
    style: 'plastic',
  }
  const style5: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada'
    ,
    style: 'social',
  }
</script>

<NpmAuthorDownload {...style1} />
<NpmAuthorDownload {...style2} />
<NpmAuthorDownload {...style3} />
<NpmAuthorDownload {...style4} />
<NpmAuthorDownload {...style5} />