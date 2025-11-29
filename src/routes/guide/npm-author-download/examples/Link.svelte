<script lang="ts">
	import { NpmAuthorDownload, type NpmAuthorDownloadPropsType } from '$lib';

	const link: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		logo: 'svelte',
		link: ['https://github.com/shinokada', 'https://codewithshin.com']
	};
</script>

<NpmAuthorDownload {...link} />
