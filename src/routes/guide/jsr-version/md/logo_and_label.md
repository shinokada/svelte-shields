<script lang="ts">
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';
  
  const logo_label: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    logo: 'hono',
    label: 'HONO'
  }
</script>

<JsrVersion {...logo_label} />