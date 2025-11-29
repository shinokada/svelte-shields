<script lang="ts">
	import { NpmDownload, type NpmDownloadPropsType } from '$lib';

	const style1: NpmDownloadPropsType = {
		packageName: 'svelte-awesome-icons',
		style: 'flat'
	};
	const style2: NpmDownloadPropsType = {
		packageName: 'svelte-awesome-icons',
		style: 'flat-square'
	};
	const style3: NpmDownloadPropsType = {
		packageName: 'svelte-awesome-icons',
		style: 'for-the-badge'
	};
	const style4: NpmDownloadPropsType = {
		packageName: 'svelte-awesome-icons',
		style: 'plastic'
	};
	const style5: NpmDownloadPropsType = {
		packageName: 'svelte-awesome-icons',
		style: 'social'
	};
</script>

<div class="grid gap-4">
	<NpmDownload {...style1} />
	<NpmDownload {...style2} />
	<NpmDownload {...style3} />
	<NpmDownload {...style4} />
	<NpmDownload {...style5} />
</div>
