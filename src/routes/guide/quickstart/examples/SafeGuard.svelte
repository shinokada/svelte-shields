<script lang="ts">
	import { NpmAuthorDownload, type NpmAuthorDownloadPropsType } from '$lib';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const weekly: NpmAuthorDownloadPropsType = {
		author: 'shinichiokada',
		style: 'for-the-badge'
	};

	let badgeLoaded = $state(false);
	let isChecking = $state(true);

	/**
	 * Check if badge loads successfully
	 */
	async function checkBadgeLoad(url: string): Promise<boolean> {
		if (!browser) return false;

		return new Promise((resolve) => {
			const img = new Image();
			let timeoutId: ReturnType<typeof setTimeout>;

			img.onload = () => {
				clearTimeout(timeoutId);
				resolve(img.naturalWidth > 50 && img.naturalHeight > 10);
			};
			img.onerror = () => {
				clearTimeout(timeoutId);
				resolve(false);
			};
			timeoutId = setTimeout(() => resolve(false), 5000);
			img.src = url;
		});
	}

	onMount(async () => {
		if (!browser) {
			isChecking = false;
			return;
		}

		const url = `https://img.shields.io/npm-stat/dw/shinichiokada?style=for-the-badge`;
		badgeLoaded = await checkBadgeLoad(url);
		isChecking = false;
	});
</script>

{#if isChecking}
	<p class="text-gray-500">Loading badge...</p>
{:else if badgeLoaded}
	<NpmAuthorDownload {...weekly} />
{:else}
	<p class="text-gray-500">Badge temporarily unavailable</p>
{/if}
