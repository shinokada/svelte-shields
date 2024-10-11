<script lang="ts">
  import { NpmAuthorDownload, type NpmAuthorDownloadPropsType } from '$lib';

  const style1: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'flat'
  };
  const style2: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'flat-square'
  };
  const style3: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'for-the-badge'
  };
  const style4: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'plastic'
  };
  const style5: NpmAuthorDownloadPropsType = {
    author: 'shinichiokada',
    style: 'social'
  };
</script>

<div class="grid gap-4">
  <NpmAuthorDownload {...style1} />
  <NpmAuthorDownload {...style2} />
  <NpmAuthorDownload {...style3} />
  <NpmAuthorDownload {...style4} />
  <NpmAuthorDownload {...style5} />
</div>
