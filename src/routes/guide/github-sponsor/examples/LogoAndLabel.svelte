<script lang="ts">
	import { GitHubSponsor, type GitHubSponsorPropsType } from '$lib';

	const logo_label: GitHubSponsorPropsType = {
		user: 'sveltejs',
		logo: 'svelte',
		label: 'SVELTE'
	};
</script>

<GitHubSponsor {...logo_label} />
