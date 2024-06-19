<script lang="ts">
  import { GitHub } from 'svelte-shields'
  import type { GitHubVersionPropsType } from 'svelte-shields';
  
  const linkEx: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    label: 'TERA',
    link: ['https://tera.codewithshin.com', 'https://github.com/shinokada/tera']
  }
</script>

<GitHub {...linkEx} />