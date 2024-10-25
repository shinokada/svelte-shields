<script lang="ts">
  import type { LibType, PageData } from '$lib/types.js';
  import { svelte5_icons } from '$lib/data/icons';
  import { StaticBadge } from '$lib';
  let { data } = $props<{ data: PageData }>();
  function safeReplace(packageName: string | undefined) {
    return typeof packageName === 'string' ? packageName.replace(/-/g, '--') : '';
  }
  // console.log('data: ', data)
</script>

{#snippet runesIcon({ packageName }: LibType)}
  <StaticBadge
    badgeContent={safeReplace(packageName) +
      '-' +
      (data?.versions[packageName]?.latest || '') +
      '-blue'}
  />
  <StaticBadge
    badgeContent={safeReplace(packageName) +
      '-' +
      (data?.versions[packageName]?.previousStable || '') +
      '-blue'}
  />
{/snippet}

<div class="flex flex-wrap justify-center gap-6">
  {#each svelte5_icons as { packageName }}
    {@render runesIcon({
      packageName
    })}
  {/each}
</div>
