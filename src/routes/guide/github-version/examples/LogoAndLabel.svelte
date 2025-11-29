<script lang="ts">
	import { GitHubVersion, type GitHubVersionPropsType } from '$lib';

	const logo_label: GitHubVersionPropsType = {
		user: 'sveltejs',
		repo: 'svelte',
		logo: 'svelte',
		label: 'SVELTE'
	};
</script>

<GitHubVersion {...logo_label} />
