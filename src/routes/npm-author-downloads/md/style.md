<script>
  import { NpmAuthorDownloads } from 'svelte-shields'
  import type { NpmAuthorDownloadsPropsType } from 'svelte-shields';

  const style1: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    style: 'flat',
  }
  const style2: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    style: 'flat-square',
  }
  const style3: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    style: 'for-the-badge',
  }
  const style4: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    style: 'plastic',
  }
  const style5: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    style: 'social',
  }
</script>

<NpmAuthorDownloads {...style1} />
<NpmAuthorDownloads {...style2} />
<NpmAuthorDownloads {...style3} />
<NpmAuthorDownloads {...style4} />
<NpmAuthorDownloads {...style5} />