import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/guide/github');
});

test('Guide home page has expected h1, meta title', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'GitHub Component - Svelte Shields' })).toBeVisible();
});

test('Guide home page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('GitHub Component - Svelte Shields');
});

test('Guide home page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute('content', 'Svelte Shields GitHub component for Svelte Runes');
});

test('Guide home page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'GitHub Component - Svelte Shields');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute('content', 'Svelte Shields GitHub component for Svelte Runes');
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/guide/github');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/svelte-shields?title=Github'
  );
});

test('Guide home page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'GitHub Component - Svelte Shields');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute('content', 'Svelte Shields GitHub component for Svelte Runes');
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/svelte-shields?title=Github'
  );
});
