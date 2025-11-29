<script lang="ts">
	import { GitHubSponsor, type GitHubSponsorPropsType } from '$lib';

	const sponsor: GitHubSponsorPropsType = {
		user: 'shinokada'
	};
</script>

<GitHubSponsor {...sponsor} />
