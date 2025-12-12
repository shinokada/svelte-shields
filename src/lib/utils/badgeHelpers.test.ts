import { describe, it, expect } from 'vitest';
import { buildBadgeParams } from './badgeHelpers';
import { buildBadgeUrl } from './constants';

describe('buildBadgeParams', () => {
	describe('basic parameters', () => {
		it('should always include style parameter', () => {
			const result = buildBadgeParams({ style: 'flat' });
			expect(result).toContain('style=flat');
		});

		it('should handle for-the-badge style', () => {
			const result = buildBadgeParams({ style: 'for-the-badge' });
			expect(result).toContain('style=for-the-badge');
		});
	});

	describe('optional parameters', () => {
		it('should include logo when provided', () => {
			const result = buildBadgeParams({ style: 'flat', logo: 'svelte' });
			expect(result).toContain('logo=svelte');
		});

		it('should omit logo when undefined', () => {
			const result = buildBadgeParams({ style: 'flat', logo: undefined });
			expect(result).not.toContain('logo');
		});

		it('should include logoColor when provided', () => {
			const result = buildBadgeParams({ style: 'flat', logoColor: 'red' });
			expect(result).toContain('logoColor=red');
		});

		it('should include color when provided', () => {
			const result = buildBadgeParams({ style: 'flat', color: 'blue' });
			expect(result).toContain('color=blue');
		});
	});

	describe('URL encoding', () => {
		it('should encode label with spaces', () => {
			const result = buildBadgeParams({ style: 'flat', label: 'My Package' });
			expect(result).toContain('label=My%20Package');
		});

		it('should encode label with special characters', () => {
			const result = buildBadgeParams({ style: 'flat', label: 'test@example.com' });
			expect(result).toContain('label=test%40example.com');
		});

		it('should encode first link URL', () => {
			const result = buildBadgeParams({
				style: 'flat',
				link: ['https://example.com/path?foo=bar', 'https://example.org']
			});
			expect(result).toContain('link=https%3A%2F%2Fexample.com');
		});

		it('should encode second link URL', () => {
			const result = buildBadgeParams({
				style: 'flat',
				link: ['https://example.com', 'https://example.org/path']
			});
			expect(result).toContain('link=https%3A%2F%2Fexample.org');
		});
	});

	describe('multiple parameters', () => {
		it('should join all parameters with &', () => {
			const result = buildBadgeParams({
				style: 'for-the-badge',
				logo: 'npm',
				color: 'red',
				label: 'version'
			});
			expect(result).toContain('style=for-the-badge');
			expect(result).toContain('logo=npm');
			expect(result).toContain('color=red');
			expect(result).toContain('label=version');
			// Should have 4 parameters joined by &
			const parts = result.split('&');
			expect(parts.length).toBe(4);
		});

		it('should handle mix of defined and undefined parameters', () => {
			const result = buildBadgeParams({
				style: 'flat',
				logo: 'svelte',
				logoColor: undefined,
				color: 'blue',
				label: undefined
			});
			expect(result).toContain('style=flat');
			expect(result).toContain('logo=svelte');
			expect(result).toContain('color=blue');
			expect(result).not.toContain('logoColor');
			expect(result).not.toContain('label');
		});
	});

	describe('link parameter edge cases', () => {
		it('should handle link with only first element', () => {
			const result = buildBadgeParams({
				style: 'flat',
				link: ['https://example.com', '']
			});
			expect(result).toContain('link=https%3A%2F%2Fexample.com');
		});

		it('should handle both link elements', () => {
			const result = buildBadgeParams({
				style: 'flat',
				link: ['https://example.com', 'https://example.org']
			});
			const linkMatches = result.match(/link=/g);
			expect(linkMatches?.length).toBe(2);
		});
	});

	describe('cache seconds', () => {
		it('should include cacheSeconds when provided', () => {
			const result = buildBadgeParams({ style: 'flat', cacheSeconds: '3600' });
			expect(result).toContain('cacheSeconds=3600');
		});

		it('should omit cacheSeconds when undefined', () => {
			const result = buildBadgeParams({ style: 'flat', cacheSeconds: undefined });
			expect(result).not.toContain('cacheSeconds');
		});
	});
});

describe('buildBadgeUrl', () => {
	it('should combine base URL, path, and params', () => {
		const url = buildBadgeUrl('/npm/v/svelte-shields', 'style=flat&logo=npm');
		expect(url).toBe('https://img.shields.io/npm/v/svelte-shields?style=flat&logo=npm');
	});

	it('should handle empty params', () => {
		const url = buildBadgeUrl('/npm/v/test', '');
		expect(url).toBe('https://img.shields.io/npm/v/test?');
	});

	it('should handle paths with special characters', () => {
		const url = buildBadgeUrl('/npm/v/@scope/package', 'style=flat');
		expect(url).toBe('https://img.shields.io/npm/v/@scope/package?style=flat');
	});

	it('should preserve encoding in params', () => {
		const url = buildBadgeUrl('/npm/v/test', 'label=My%20Package');
		expect(url).toContain('label=My%20Package');
	});
});
