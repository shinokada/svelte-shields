<script lang="ts">
	import { NpmAuthorDownload, type NpmAuthorDownloadPropsType } from '$lib';

	const basic: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada'
	};

	const basic2: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		interval: 'dm'
	};
</script>

<div class="grid gap-4">
	<NpmAuthorDownload {...basic} />
	<NpmAuthorDownload {...basic2} />
</div>
