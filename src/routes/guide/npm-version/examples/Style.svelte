<script lang="ts">
	import { NpmVersion, type NpmVersionPropsType } from '$lib';

	const style1: NpmVersionPropsType = {
		packageName: 'svelte',
		style: 'flat'
	};
	const style2: NpmVersionPropsType = {
		packageName: 'svelte',
		style: 'flat-square'
	};
	const style3: NpmVersionPropsType = {
		packageName: 'svelte',
		style: 'for-the-badge'
	};
	const style4: NpmVersionPropsType = {
		packageName: 'svelte',
		style: 'plastic'
	};
	const style5: NpmVersionPropsType = {
		packageName: 'svelte',
		style: 'social'
	};
</script>

<div class="grid gap-4">
	<NpmVersion {...style1} />
	<NpmVersion {...style2} />
	<NpmVersion {...style3} />
	<NpmVersion {...style4} />
	<NpmVersion {...style5} />
</div>
