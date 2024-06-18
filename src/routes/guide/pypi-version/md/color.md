<script lang="ts">
  import { PypiVersion } from 'svelte-shields'
  import type { PypiVersionPropsType } from 'svelte-shields';

  const color1: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'green'
  }

  const color2: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: '00FF00' 
  }

  const color3: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'rgb(0, 255, 0)' 
  }

  const color4: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'rgba(0, 255, 0, 1)' 
  }

  const color5: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'hsl(120, 100%, 50%)' 
  }

  const color6: PypiVersionPropsType = {
    packageName: 'vennfig',
    color: 'hsla(120, 100%, 50%, 1)' 
  }
</script>

<PypiVersion {...color1} />
<PypiVersion {...color2} />
<PypiVersion {...color3} />
<PypiVersion {...color4} />
<PypiVersion {...color5} />
<PypiVersion {...color6} />