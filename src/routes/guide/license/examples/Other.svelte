<script lang="ts">
	import { License, type LicensePropsType } from '$lib';

	const other: LicensePropsType = {
		source: 'github',
		github_user: 'shinokada',
		github_repo: 'svelte-shields',
		logo: 'svelte',
		label: 'Svelte Shields',
		cacheSeconds: '86400'
	};
</script>

<License {...other} />
