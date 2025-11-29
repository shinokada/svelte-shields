<script lang="ts">
	import { StaticBadge, type StaticBadgePropsType } from '$lib';

	const basic: StaticBadgePropsType = {
		badgeContent: 'any_text-you_like-blue'
	};

	const basic2: StaticBadgePropsType = {
		badgeContent: 'just the message-8a2be2'
	};
</script>

<div class="grid gap-4">
	<StaticBadge {...basic} />
	<StaticBadge {...basic2} />
</div>
