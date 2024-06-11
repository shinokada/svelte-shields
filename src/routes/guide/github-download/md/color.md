<script lang="ts">
  import { NpmDownloads } from 'svelte-shields'
  import type { NpmDownloadsPropsType } from 'svelte-shields';

  const color1: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'indigo',
  }
  const color2: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: '4B0082',
  }
  const color3: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'rgb(75, 0, 130)',
  }
  const color4: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'rgba(75, 0, 130, 1)',
  }

  const color5: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'hsl(275, 100%, 25%)',
  }

  const color6: NpmDownloadsPropsType = {
    packageName: 'svelte-awesome-icons',
    logo: '',
    color: 'hsla(275, 100%, 25%, 1)',
  }
</script>

<NpmDownloads {...color1} />
<NpmDownloads {...color2} />
<NpmDownloads {...color3} />
<NpmDownloads {...color4} />
<NpmDownloads {...color5} />
<NpmDownloads {...color6} />