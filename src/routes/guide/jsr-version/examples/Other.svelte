<script lang="ts">
  import { JsrVersion, type JsrVersionPropsType } from '$lib';

  const other: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    cacheSeconds: '86400'
  };
</script>

<JsrVersion {...other} />
