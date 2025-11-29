<script lang="ts">
	import { NpmVersion, type NpmVersionPropsType } from '$lib';

	const basic: NpmVersionPropsType = {
		packageName: 'svelte'
	};
	const basic2: NpmVersionPropsType = {
		packageName: '@sveltejs/kit'
	};
</script>

<div class="grid gap-4">
	<NpmVersion {...basic} />
	<NpmVersion {...basic2} />
</div>
