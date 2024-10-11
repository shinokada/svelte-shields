<script lang="ts">
  import { GitHubVersion, type GitHubVersionPropsType } from '$lib';

  const otherEx: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    cacheSeconds: '86400'
  };
</script>

<GitHubVersion {...otherEx} />
