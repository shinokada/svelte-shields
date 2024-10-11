<script lang="ts">
  import { GitHubVersion, type GitHubVersionPropsType } from '$lib';

  const release2: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'flat'
  };

  const release3: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'flat-square'
  };

  const release4: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'for-the-badge'
  };

  const release5: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'plastic'
  };

  const release6: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'social'
  };
</script>

<div class="grid gap-4">
  <GitHubVersion {...release2} />
  <GitHubVersion {...release3} />
  <GitHubVersion {...release4} />
  <GitHubVersion {...release5} />
  <GitHubVersion {...release6} />
</div>
