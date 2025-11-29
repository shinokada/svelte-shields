<script lang="ts">
	import { StaticBadge, type StaticBadgePropsType } from '$lib';

	const other: StaticBadgePropsType = {
		badgeContent: 'any_text-you_like-blue',
		cacheSeconds: '86400'
	};
</script>

<StaticBadge {...other} />
