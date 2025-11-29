<script lang="ts">
	import { GitHubSponsor, type GitHubSponsorPropsType } from '$lib';

	const linkEx: GitHubSponsorPropsType = {
		user: 'shinokada',
		label: 'TERA',
		link: ['https://tera.codewithshin.com', 'https://github.com/shinokada/tera']
	};
</script>

<GitHubSponsor {...linkEx} />
