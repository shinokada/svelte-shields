<script lang="ts">
	import { NpmDownload, type NpmDownloadPropsType } from '$lib';

	const logo_label: NpmDownloadPropsType = {
		packageName: 'svelte-awesome-icons',
		logo: 'svelte',
		label: 'Svelte Awesome Icons'
	};
</script>

<NpmDownload {...logo_label} />
