<script lang="ts">
	import { NpmVersion, type NpmVersionPropsType } from '$lib';

	const logo_label: NpmVersionPropsType = {
		packageName: 'svelte',
		logo: 'svelte',
		label: 'SVELTE'
	};
</script>

<NpmVersion {...logo_label} />
