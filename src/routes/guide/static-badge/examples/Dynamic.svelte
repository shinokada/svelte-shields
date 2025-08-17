<script lang="ts">
  import type { LibType, PageData } from '$lib/types.js';
  import { svelte5_icons } from '$lib/data/icons';
  import { StaticBadge } from '$lib';
  let { data } = $props<{ data: PageData }>();
  interface VersionInfo {
    latest: string;
    previousStable: string;
  }

  interface Versions {
    [key: string]: VersionInfo;
  }

  let versions = $state<Versions>({});
  let isLoading = $state(true);

  // Handle the Promise without making the effect async
  $effect(() => {
    data.versions.then((versionData: Versions) => {
      versions = versionData;
      isLoading = false;
    });
  });

  function safeReplace(packageName: string | undefined) {
    return typeof packageName === 'string' ? packageName.replace(/-/g, '--') : '';
  }
</script>

{#snippet runesIcon({ packageName }: LibType)}
  {#if isLoading}
    <StaticBadge badgeContent="status-loading-yellow" />
  {:else}
    <StaticBadge
      badgeContent={safeReplace(packageName) +
        '-' +
        (versions[packageName]?.latest || '') +
        '-blue'}
    />
    <StaticBadge
      badgeContent={safeReplace(packageName) +
        '-' +
        (versions[packageName]?.previousStable || '') +
        '-blue'}
    />
  {/if}
{/snippet}

<div class="flex flex-wrap justify-center gap-6">
  {#each svelte5_icons as { packageName }}
    {@render runesIcon({
      packageName
    })}
  {/each}
</div>
