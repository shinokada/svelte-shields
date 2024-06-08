<script lang="ts">
  import { JsrVersion } from 'svelte-shields'
  import type { JsrVersionPropsType } from 'svelte-shields';
  
  const logo_label: JsrVersionPropsType = {
    scope: '@badrap',
    packageName: 'svelte',
    logo: 'svelte',
    label: 'SVELTE'
  }
</script>

<JsrVersion {...logo_label} />