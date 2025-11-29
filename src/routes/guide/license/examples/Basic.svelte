<script lang="ts">
	import { License, type LicensePropsType } from '$lib';

	const basic: LicensePropsType = {
		source: 'github',
		github_user: 'shinokada',
		github_repo: 'svelte-shields'
	};

	const basic2: LicensePropsType = {
		source: 'npm',
		npm_packageName: 'svelte-shields'
	};
</script>

<div class="grid gap-4">
	<License {...basic} />
	<License {...basic2} />
</div>
