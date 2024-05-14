<script lang="ts">
  import { GitHub } from 'svelte-shields'
  import type { GitHubPropsType } from 'svelte-shields';
  const linkEx: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    label: 'TERA',
    link: ['https://tera.codewithshin.com', 'https://github.com/shinokada/tera']
  }
</script>

<GitHub {...linkEx} />