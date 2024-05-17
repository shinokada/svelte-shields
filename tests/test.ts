import { expect, test } from '@playwright/test';

test('guide/quickstart page has expected h1', async ({ page }) => {
  await page.goto('/guide/quickstart');
  await expect(page.locator('h1')).toHaveText('Quickstart - Svelte Shields');
});


test('guide/github page has expected h1', async ({ page }) => {
  await page.goto('/guide/github');
  await expect(page.locator('h1')).toHaveText('GitHub Component - Svelte Shields');
});

test('guide/github-downloads page has expected h1', async ({ page }) => {
  await page.goto('/guide/github-downloads');
  await expect(page.locator('h1')).toHaveText('GitHubDownloads Component - Svelte Shields');
});

test('guide/jsr-version page has expected h1', async ({ page }) => {
  await page.goto('/guide/jsr-version');
  await expect(page.locator('h1')).toHaveText('JsrVersion Component - Svelte Shields');
});

test('guide/npm-author-downloads page has expected h1', async ({ page }) => {
  await page.goto('/guide/npm-author-downloads');
  await expect(page.locator('h1')).toHaveText('NpmAuthorDownloads Component - Svelte Shields');
});

test('guide/npm-downloads page has expected h1', async ({ page }) => {
  await page.goto('/guide/npm-downloads');
  await expect(page.locator('h1')).toHaveText('NpmDownloads Component - Svelte Shields');
});

test('guide/npm-version page has expected h1', async ({ page }) => {
  await page.goto('/guide/npm-version');
  await expect(page.locator('h1')).toHaveText('NpmVersion Component - Svelte Shields');
});

test('guide/pypi-version page has expected h1', async ({ page }) => {
  await page.goto('/guide/pypi-version');
  await expect(page.locator('h1')).toHaveText('PypiVersion Component - Svelte Shields');
});

test('guide/static-badge page has expected h1', async ({ page }) => {
  await page.goto('/guide/static-badge');
  await expect(page.locator('h1')).toHaveText('StaticBadge Component - Svelte Shields');
});
