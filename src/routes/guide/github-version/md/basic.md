<script lang="ts">
  import { GitHub } from 'svelte-shields'
  import type { GitHubVersionPropsType } from 'svelte-shields';
  const release: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
  }
</script>

<GitHub {...release} />