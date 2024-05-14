<script>
  import { GitHub } from 'svelte-shields'
  import type { GitHubPropsType } from 'svelte-shields';
  const otherEx: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    cacheSeconds: '86400',
  }
</script>

<GitHub {...otherEx} />