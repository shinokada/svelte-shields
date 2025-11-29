<script lang="ts">
	import { NpmVersion, type NpmVersionPropsType } from '$lib';

	const other: NpmVersionPropsType = {
		packageName: 'svelte',
		cacheSeconds: '86400'
	};
</script>

<NpmVersion {...other} />
