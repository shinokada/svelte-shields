<script lang="ts">
	import { GitHubVersion, type GitHubVersionPropsType } from '$lib';

	const linkEx: GitHubVersionPropsType = {
		user: 'shinokada',
		repo: 'tera',
		label: 'TERA',
		link: ['https://tera.codewithshin.com', 'https://github.com/shinokada/tera']
	};
</script>

<GitHubVersion {...linkEx} />
