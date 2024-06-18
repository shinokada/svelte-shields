<script lang="ts">
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';

  const link: JsrVersionPropsType = {
    scope: '@hono',
    packageName: 'hono',
    label: 'Svelte 5 UI Library',
    link: ['https://jsr.io/@hono/hono', 'https://github.com/badrap/hono']
  }
</script>

<JsrVersion {...link} />