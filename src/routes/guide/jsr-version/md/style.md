<script>
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';

  const style1: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    logo: '',
    style: 'flat',
  }
  const style2: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    logo: '',
    style: 'flat-square',
  }
  const style3: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    logo: '',
    style: 'for-the-badge',
  }
  const style4: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    logo: '',
    style: 'plastic',
  }
  const style5: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    logo: '',
    style: 'social',
  }
</script>

<JsrVersion {...style1} />
<JsrVersion {...style2} />
<JsrVersion {...style3} />
<JsrVersion {...style4} />
<JsrVersion {...style5} />