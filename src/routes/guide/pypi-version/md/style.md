<script>
  import { PypiVersion } from 'svelte-shields'
  import type { PypiVersionPropsType } from 'svelte-shields';

  const style1: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    style: 'flat',
  }
  const style2: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    style: 'flat-square',
  }
  const style3: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    style: 'for-the-badge',
  }
  const style4: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    style: 'plastic',
  }
  const style5: PypiVersionPropsType = {
    packageName: 'vennfig',
    logo: '',
    style: 'social',
  }
</script>

<PypiVersion {...style1} />
<PypiVersion {...style2} />
<PypiVersion {...style3} />
<PypiVersion {...style4} />
<PypiVersion {...style5} />