<script lang="ts">
	import { StaticBadge, type StaticBadgePropsType } from '$lib';

	const logo_label: StaticBadgePropsType = {
		badgeContent: 'Svelte-blue',
		logo: 'svelte',
		label: 'Awesome',
		color: 'red'
	};
</script>

<StaticBadge {...logo_label} />
