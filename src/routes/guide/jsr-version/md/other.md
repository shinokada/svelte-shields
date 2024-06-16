<script>
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';

  const other: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    logo: '',
    cacheSeconds: '86400',
  }
</script>

<JsrVersion {...other} />