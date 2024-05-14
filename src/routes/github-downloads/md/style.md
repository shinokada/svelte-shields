<script>
  import { NpmDownloads } from 'svelte-shields'
  import type { NpmDownloadsPropsType } from 'svelte-shields';

  const style1: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'flat',
  }
  const style2: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'flat-square',
  }
  const style3: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'for-the-badge',
  }
  const style4: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'plastic',
  }
  const style5: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    style: 'social',
  }
</script>

<NpmDownloads {...style1} />
<NpmDownloads {...style2} />
<NpmDownloads {...style3} />
<NpmDownloads {...style4} />
<NpmDownloads {...style5} />