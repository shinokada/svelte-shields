<script lang="ts">
  import { NpmAuthorDownloads } from 'svelte-shields'
  import type { NpmAuthorDownloadsPropsType } from 'svelte-shields';

  const color1: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    color: 'indigo',
  }
  const color2: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    color: '4B0082',
  }
  const color3: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    color: 'rgb(75, 0, 130)',
  }
  const color4: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    color: 'rgba(75, 0, 130, 1)',
  }

  const color5: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    color: 'hsl(275, 100%, 25%)',
  }

  const color6: NpmAuthorDownloadsPropsType = {
    author: 'shinichiokada'
    logo: '',
    color: 'hsla(275, 100%, 25%, 1)',
  }
</script>

<NpmAuthorDownloads {...color1} />
<NpmAuthorDownloads {...color2} />
<NpmAuthorDownloads {...color3} />
<NpmAuthorDownloads {...color4} />
<NpmAuthorDownloads {...color5} />
<NpmAuthorDownloads {...color6} />