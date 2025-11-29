<script lang="ts">
	import { PypiVersion, type PypiVersionPropsType } from '$lib';

	const logo_label: PypiVersionPropsType = {
		packageName: 'vennfig',
		logo: 'python',
		label: 'VENNFIG'
	};
</script>

<PypiVersion {...logo_label} />
