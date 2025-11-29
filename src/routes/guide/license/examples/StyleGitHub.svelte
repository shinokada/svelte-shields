<script lang="ts">
	import { License, type LicensePropsType } from '$lib';

	const style1: LicensePropsType = {
		source: 'github',
		github_user: 'shinokada',
		github_repo: 'svelte-shields',
		style: 'flat'
	};
	const style2: LicensePropsType = {
		source: 'github',
		github_user: 'shinokada',
		github_repo: 'svelte-shields',
		style: 'flat-square'
	};
	const style3: LicensePropsType = {
		source: 'github',
		github_user: 'shinokada',
		github_repo: 'svelte-shields',
		style: 'for-the-badge'
	};
	const style4: LicensePropsType = {
		source: 'github',
		github_user: 'shinokada',
		github_repo: 'svelte-shields',
		style: 'plastic'
	};
	const style5: LicensePropsType = {
		source: 'github',
		github_user: 'shinokada',
		github_repo: 'svelte-shields',
		style: 'social'
	};
</script>

<div class="grid gap-4">
	<License {...style1} />
	<License {...style2} />
	<License {...style3} />
	<License {...style4} />
	<License {...style5} />
</div>
