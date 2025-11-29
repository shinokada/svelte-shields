<script lang="ts">
	import { PypiVersion, type PypiVersionPropsType } from '$lib';

	const other: PypiVersionPropsType = {
		packageName: 'vennfig',
		cacheSeconds: '86400'
	};
</script>

<PypiVersion {...other} />
