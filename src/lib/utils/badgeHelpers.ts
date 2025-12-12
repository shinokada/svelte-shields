import type { BaseBadgePropsType } from '../types';

/**
 * Builds common badge URL parameters from props
 */
export function buildBadgeParams(props: BaseBadgePropsType): string {
	const {
		style = 'flat',
		logo,
		logoColor,
		logoSize,
		label,
		labelColor,
		color,
		cacheSeconds,
		link
	} = props;

	const params: string[] = [];

	// Style is always included
	params.push(`style=${style}`);

	// Optional parameters - all values must be URL-encoded for shields.io compatibility
	if (logo) params.push(`logo=${encodeURIComponent(logo)}`);
	if (logoColor) params.push(`logoColor=${encodeURIComponent(logoColor)}`);
	if (logoSize) params.push(`logoSize=${encodeURIComponent(logoSize)}`);
	if (label) params.push(`label=${encodeURIComponent(label)}`);
	if (labelColor) params.push(`labelColor=${encodeURIComponent(labelColor)}`);
	if (color) params.push(`color=${encodeURIComponent(color)}`);
	if (cacheSeconds) params.push(`cacheSeconds=${cacheSeconds}`);
	if (link?.[0]) params.push(`link=${encodeURIComponent(link[0])}`);
	if (link?.[1]) params.push(`link=${encodeURIComponent(link[1])}`);

	return params.join('&');
}

/**
 * Checks if a badge image loads successfully
 * @param url - The badge URL to check
 * @param minWidth - Minimum expected width (default: 50)
 * @param minHeight - Minimum expected height (default: 10)
 * @param timeout - Timeout in milliseconds (default: 5000)
 * @returns Promise<boolean> - Whether the badge loaded successfully
 */
export async function checkBadgeLoad(
	url: string,
	minWidth = 50,
	minHeight = 10,
	timeout = 5000
): Promise<boolean> {
	if (typeof window === 'undefined') return false;

	return new Promise((resolve) => {
		const img = new Image();
		let settled = false;

		const finish = (ok: boolean) => {
			if (settled) return;
			settled = true;
			clearTimeout(timeoutId);
			resolve(ok);
		};

		img.onload = () => {
			finish(img.naturalWidth > minWidth && img.naturalHeight > minHeight);
		};

		img.onerror = () => {
			finish(false);
		};

		const timeoutId = setTimeout(() => finish(false), timeout);
		img.src = url;
	});
}
