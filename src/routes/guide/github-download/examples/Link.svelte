<script lang="ts">
	import { GitHubDownload, type GitHubDownloadPropsType } from '$lib';

	const link: GitHubDownloadPropsType = {
		user: 'shinokada',
		repo: 'teffects',
		link: ['https://teffects.codewithshin.com', 'https://github.com/shinokada/teffects']
	};
</script>

<GitHubDownload {...link} />
