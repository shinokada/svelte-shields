<script lang="ts">
	import { GitHubDownload, type GitHubDownloadPropsType } from '$lib';

	const color1: GitHubDownloadPropsType = {
		user: 'shinokada',
		repo: 'teffects',
		color: 'red'
	};
	const color2: GitHubDownloadPropsType = {
		user: 'shinokada',
		repo: 'teffects',
		color: 'FF0000'
	};
	const color3: GitHubDownloadPropsType = {
		user: 'shinokada',
		repo: 'teffects',
		color: 'rgb(255, 0, 0)'
	};
	const color4: GitHubDownloadPropsType = {
		user: 'shinokada',
		repo: 'teffects',
		color: 'rgba(255, 0, 0, 1) '
	};
	const color5: GitHubDownloadPropsType = {
		user: 'shinokada',
		repo: 'teffects',
		color: 'hsl(0, 100%, 50%)'
	};
	const color6: GitHubDownloadPropsType = {
		user: 'shinokada',
		repo: 'teffects',
		color: 'hsla(0, 100%, 50%, 1)'
	};
</script>

<div class="grid gap-4">
	<GitHubDownload {...color1} />
	<GitHubDownload {...color2} />
	<GitHubDownload {...color3} />
	<GitHubDownload {...color4} />
	<GitHubDownload {...color5} />
	<GitHubDownload {...color6} />
</div>
