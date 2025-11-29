<script lang="ts">
	import { NpmDownload, type NpmDownloadPropsType } from '$lib';

	const other: NpmDownloadPropsType = {
		packageName: 'svelte-awesome-icons',
		logo: 'svelte',
		label: 'Svelte Awesome Icons',
		cacheSeconds: '86400'
	};
</script>

<NpmDownload {...other} />
