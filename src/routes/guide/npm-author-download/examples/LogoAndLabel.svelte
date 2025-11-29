<script lang="ts">
	import { NpmAuthorDownload, type NpmAuthorDownloadPropsType } from '$lib';

	const logo_label: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		logo: 'svelte',
		label: 'Shinichi Okada'
	};
</script>

<NpmAuthorDownload {...logo_label} />
