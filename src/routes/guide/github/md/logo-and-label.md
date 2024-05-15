<script lang="ts">
  import { GitHub } from 'svelte-shields'
  import type { GitHubPropsType } from 'svelte-shields';
  const logo_label: GitHubPropsType = {
    user: 'sveltejs',
    repo: 'svelte',
    logo: 'svelte',
    label: 'SVELTE'
  }
</script>

<GitHub {...logo_label} />