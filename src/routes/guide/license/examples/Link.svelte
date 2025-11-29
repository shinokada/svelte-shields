<script lang="ts">
	import { License, type LicensePropsType } from '$lib';

	const link: LicensePropsType = {
		source: 'github',
		github_user: 'shinokada',
		github_repo: 'svelte-shields',
		logo: 'svelte',
		link: ['https://github.com/shinokada/svelte-shields', 'https://svelte-shields.codewithshin.com']
	};
</script>

<License {...link} />
