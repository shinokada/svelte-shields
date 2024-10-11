<script lang="ts">
  import { JsrVersion, type JsrVersionPropsType } from '$lib';

  const basic: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono'
  };
</script>

<JsrVersion {...basic} />
