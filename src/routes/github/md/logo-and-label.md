<script lang="ts">
  import { GitHub } from 'svelte-shields'
  import type { GitHubPropsType } from 'svelte-shields';
  const release: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
  }
</script>

<GitHub {...release} />