<script>
  import { GitHub } from 'svelte-shields'
  import type { GitHubVersionPropsType } from 'svelte-shields';
  
  const otherEx: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    cacheSeconds: '86400',
  }
</script>

<GitHub {...otherEx} />