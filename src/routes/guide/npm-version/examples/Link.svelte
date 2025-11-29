<script lang="ts">
	import { NpmVersion, type NpmVersionPropsType } from '$lib';

	const link: NpmVersionPropsType = {
		packageName: 'svelte',
		label: 'Svelte',
		link: ['https://svelte.dev', 'https://github.com/sveltejs/svelte']
	};
</script>

<NpmVersion {...link} />
