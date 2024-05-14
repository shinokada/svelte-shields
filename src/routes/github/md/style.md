<script>
  import { GitHub } from 'svelte-shields'
  import type { GitHubPropsType } from 'svelte-shields';
  const release2: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'flat'
  }

  const release3: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'flat-square'
  }

  const release4: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'for-the-badge'
  }

  const release5: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'plastic'
  }

  const release6: GitHubPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'social'
  }
</script>

  <GitHub {...release2} />
  <GitHub {...release3} />
  <GitHub {...release4} />
  <GitHub {...release5} />
  <GitHub {...release6} />