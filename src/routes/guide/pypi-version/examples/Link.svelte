<script lang="ts">
	import { PypiVersion, type PypiVersionPropsType } from '$lib';

	const link: PypiVersionPropsType = {
		packageName: 'vennfig',
		label: 'VENNFIG',
		link: ['https://vennfig.codewithshin.com', 'https://github.com/shinokada/vennfig']
	};
</script>

<PypiVersion {...link} />
