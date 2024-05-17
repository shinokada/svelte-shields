<script>
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';

  const style1: JsrVersionPropsType = {
    scope: '@badrap',
    packageName: 'valita',
    logo: '',
    style: 'flat',
  }
  const style2: JsrVersionPropsType = {
    scope: '@badrap',
    packageName: 'valita',
    logo: '',
    style: 'flat-square',
  }
  const style3: JsrVersionPropsType = {
    scope: '@badrap',
    packageName: 'valita',
    logo: '',
    style: 'for-the-badge',
  }
  const style4: JsrVersionPropsType = {
    scope: '@badrap',
    packageName: 'valita',
    logo: '',
    style: 'plastic',
  }
  const style5: JsrVersionPropsType = {
    scope: '@badrap',
    packageName: 'valita',
    logo: '',
    style: 'social',
  }
</script>

<JsrVersion {...style1} />
<JsrVersion {...style2} />
<JsrVersion {...style3} />
<JsrVersion {...style4} />
<JsrVersion {...style5} />