<script lang="ts">
  import { JsrVersion, type JsrVersionPropsType } from '$lib';

  const link: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    label: 'HONO',
    link: ['https://jsr.io/@hono/hono', 'https://github.com/badrap/hono']
  };
</script>

<JsrVersion {...link} />
