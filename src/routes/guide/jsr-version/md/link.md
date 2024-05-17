<script lang="ts">
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';

  const link: JsrVersionPropsType = {
    scope: '@badrap',
    packageName: 'valita',
    logo: '',
    label: 'Svelte 5 UI Library',
    link: ['https://jsr.io/@badrap/valita', 'https://github.com/badrap/valita']
  }
</script>

<JsrVersion {...link} />