<script lang="ts">
  import { Version, type VersionPropsType } from '$lib';

  const basic: VersionPropsType = {
    source: 'npm',
    packageName: 'svelte-shields',
    color: 'red'
  };
  const basic2: VersionPropsType = {
    source: 'jsr',
    jsr_scope: '@hono',
    packageName: 'hono',
    color: 'red'
  };
  const basic3: VersionPropsType = {
    source: 'pypi',
    packageName: 'vennfig',
    color: 'red'
  };
</script>

<div class="grid gap-4">
  <Version {...basic} />
  <Version {...basic2} />
  <Version {...basic3} />
</div>
