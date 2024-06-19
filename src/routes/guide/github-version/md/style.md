<script>
  import { GitHub } from 'svelte-shields'
  import type { GitHubVersionPropsType } from 'svelte-shields';
  
  const release2: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'flat'
  }

  const release3: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'flat-square'
  }

  const release4: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'for-the-badge'
  }

  const release5: GitHubVersionPropsType = {
    user: 'shinokada',
    repo: 'tera',
    style: 'plastic'
  }

  const release6: GitHubVersionPropsType = {
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