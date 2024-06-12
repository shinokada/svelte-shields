<script lang="ts">
  import { GitHub } from 'svelte-shields'
  import type { GitHubVersionPropsType } from 'svelte-shields';
  const logo_label: GitHubVersionPropsType = {
    user: 'sveltejs',
    repo: 'svelte',
    logo: 'svelte',
    label: 'SVELTE'
  }
</script>

<GitHub {...logo_label} />