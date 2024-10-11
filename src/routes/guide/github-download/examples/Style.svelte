<script lang="ts">
  import { GitHubDownload, type GitHubDownloadPropsType } from '$lib';

  const style1: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'flat'
  };
  const style2: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'flat-square'
  };
  const style3: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'for-the-badge'
  };
  const style4: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'plastic'
  };
  const style5: GitHubDownloadPropsType = {
    user: 'shinokada',
    repo: 'teffects',
    style: 'social'
  };
</script>

<div class="grid gap-4">
  <GitHubDownload {...style1} />
  <GitHubDownload {...style2} />
  <GitHubDownload {...style3} />
  <GitHubDownload {...style4} />
  <GitHubDownload {...style5} />
</div>
