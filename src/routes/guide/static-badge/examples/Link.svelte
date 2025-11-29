<script lang="ts">
	import { StaticBadge, type StaticBadgePropsType } from '$lib';

	const link: StaticBadgePropsType = {
		badgeContent: 'link_1-link_2-blue',
		link: ['https://codewithshin.com', 'https://github.com/shinokada']
	};
</script>

<StaticBadge {...link} />
