import { expect, test } from '@playwright/test';

test('guide/quickstart page has expected h1', async ({ page }) => {
  await page.goto('/guide/quickstart');
  await expect(page.locator('h1')).toHaveText('Quickstart - Svelte Shields');
});


test('guide/github page has expected h1', async ({ page }) => {
  await page.goto('/guide/github');
  await expect(page.locator('h1')).toHaveText('GitHub Component - Svelte Shields');
});

test('guide/github-download page has expected h1', async ({ page }) => {
  await page.goto('/guide/github-download');
  await expect(page.locator('h1')).toHaveText('GitHubDownload Component - Svelte Shields');
});

test('guide/github-sponsor page has expected h1', async ({ page }) => {
  await page.goto('/guide/github-sponsor');
  await expect(page.locator('h1')).toHaveText('GitHubSponsor Component - Svelte Shields');
});


test('guide/jsr-version page has expected h1', async ({ page }) => {
  await page.goto('/guide/jsr-version');
  await expect(page.locator('h1')).toHaveText('JsrVersion Component - Svelte Shields');
});

test('guide/license page has expected h1', async ({ page }) => {
  await page.goto('/guide/license');
  await expect(page.locator('h1')).toHaveText('License Component - Svelte Shields');
});

test('guide/npm-author-download page has expected h1', async ({ page }) => {
  await page.goto('/guide/npm-author-download');
  await expect(page.locator('h1')).toHaveText('NpmAuthorDownload Component - Svelte Shields');
});

test('guide/npm-download page has expected h1', async ({ page }) => {
  await page.goto('/guide/npm-download');
  await expect(page.locator('h1')).toHaveText('NpmDownload Component - Svelte Shields');
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
