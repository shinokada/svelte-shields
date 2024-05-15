<script lang="ts">
  import { PypiVersion } from 'svelte-shields'
  import type { PypiVersionPropsType } from 'svelte-shields';

  const color1: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    color: 'green'
  }

  const color2: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    color: '00FF00' 
  }

  const color3: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    color: 'rgb(0, 255, 0)' 
  }

  const color4: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    color: 'rgba(0, 255, 0, 1)' 
  }

  const color5: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    color: 'hsl(120, 100%, 50%)' 
  }

  const color6: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    color: 'hsla(120, 100%, 50%, 1)' 
  }
</script>

<PypiVersion {...color1} />
<PypiVersion {...color2} />
<PypiVersion {...color3} />
<PypiVersion {...color4} />
<PypiVersion {...color5} />
<PypiVersion {...color6} />