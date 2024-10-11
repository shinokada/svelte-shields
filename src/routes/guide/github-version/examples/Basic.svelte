<script lang="ts">
  import { GitHubVersion, type GitHubVersionPropsType } from '$lib';

  const release: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera'
  };
</script>

<GitHubVersion {...release} />
