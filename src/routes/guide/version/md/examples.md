<script lang="ts">
  import { Version } from 'svelte-shields';
  import type { VersionPropsType } from 'svelte-shields';
  const basic: VersionPropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    color: 'red'
  }
  const basic2: VersionPropsType = {
    source: 'jsr',
    jsr_scope: '@hono',
    packageName: 'hono',
    color: 'red'
  }
  const basic3: VersionPropsType = {
    source: 'pypi',
    packageName: 'vennfig',
    color: 'red'
  }
</script>

<Version {...basic} />
<Version {...basic2} />
<Version {...basic3} />