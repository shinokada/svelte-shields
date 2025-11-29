<script lang="ts">
	import { NpmAuthorDownload, type NpmAuthorDownloadPropsType } from '$lib';

	const other: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		logo: 'svelte',
		cacheSeconds: '86400'
	};
</script>

<NpmAuthorDownload {...other} />
