<script lang="ts">
	import { License, type LicensePropsType } from '$lib';

	const color7: LicensePropsType = {
		source: 'npm',
		npm_packageName: 'svelte-shields',
		color: 'indigo'
	};
	const color8: LicensePropsType = {
		source: 'npm',
		npm_packageName: 'svelte-shields',
		color: '4B0082'
	};
	const color9: LicensePropsType = {
		source: 'npm',
		npm_packageName: 'svelte-shields',
		color: 'rgb(75, 0, 130)'
	};
	const color10: LicensePropsType = {
		source: 'npm',
		npm_packageName: 'svelte-shields',
		color: 'rgba(75, 0, 130, 1)'
	};
	const color11: LicensePropsType = {
		source: 'npm',
		npm_packageName: 'svelte-shields',
		color: 'hsl(275, 100%, 25%)'
	};
	const color12: LicensePropsType = {
		source: 'npm',
		npm_packageName: 'svelte-shields',
		color: 'hsla(275, 100%, 25%, 1)'
	};
</script>

<div class="grid gap-4">
	<License {...color7} />
	<License {...color8} />
	<License {...color9} />
	<License {...color10} />
	<License {...color11} />
	<License {...color12} />
</div>
