<script lang="ts">
	import { Download, type DownloadPropsType } from '$lib';

	const npmdownload: DownloadPropsType = {
		source: 'npm',
		packageName: 'svelte-shields',
		interval: 'dw',
		color: 'red'
	};
	const githubdownload: DownloadPropsType = {
		source: 'github',
		user: 'shinokada',
		repo: 'tera',
		color: 'red'
	};
</script>

<div class="grid gap-4">
	<Download {...npmdownload} />
	<Download {...githubdownload} />
</div>
