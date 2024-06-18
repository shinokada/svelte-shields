<script lang="ts">
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';
  const basic: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
  }
</script>

<JsrVersion {...basic} />