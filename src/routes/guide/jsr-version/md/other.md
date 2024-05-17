<script>
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';

  const other: JsrVersionPropsType = {
    scope: '@badrap',
    packageName: 'valita',
    logo: '',
    cacheSeconds: '86400',
  }
</script>

<JsrVersion {...other} />