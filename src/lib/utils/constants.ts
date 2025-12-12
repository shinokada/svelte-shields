/**
 * Base URL for Shields.io badge service
 * Can be overridden for self-hosted instances or alternative services
 */
export const SHIELDS_IO_BASE = 'https://img.shields.io';

/**
 * Build a Shields.io badge URL
 * @param path - The badge path (e.g., '/npm/v/packageName')
 * @param params - Query parameters string
 * @returns Complete badge URL
 */
export function buildBadgeUrl(path: string, params: string): string {
	return `${SHIELDS_IO_BASE}${path}?${params}`;
}
