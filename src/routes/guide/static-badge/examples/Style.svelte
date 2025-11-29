<script lang="ts">
	import { StaticBadge, type StaticBadgePropsType } from '$lib';

	const style1: StaticBadgePropsType = {
		badgeContent: 'any_text-you_like-blue',
		style: 'flat'
	};
	const style2: StaticBadgePropsType = {
		badgeContent: 'any_text-you_like-blue',
		style: 'flat-square'
	};
	const style3: StaticBadgePropsType = {
		badgeContent: 'any_text-you_like-blue',
		style: 'for-the-badge'
	};
	const style4: StaticBadgePropsType = {
		badgeContent: 'any_text-you_like-blue',
		style: 'plastic'
	};
	const style5: StaticBadgePropsType = {
		badgeContent: 'any_text-you_like-blue',
		style: 'social'
	};
</script>

<div class="grid gap-4">
	<StaticBadge {...style1} />
	<StaticBadge {...style2} />
	<StaticBadge {...style3} />
	<StaticBadge {...style4} />
	<StaticBadge {...style5} />
</div>
