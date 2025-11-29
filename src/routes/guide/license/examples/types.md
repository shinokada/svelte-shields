import type { HTMLImgAttributes } from 'svelte/elements';

export type LinkType = string[] | [string, string];
export interface BaseBadgePropsType {
style?: 'flat' | 'flat-square' | 'for-the-badge' | 'plastic' | 'social';
logo?: string | undefined | null;
logoColor?: string | undefined | null;
logoSize?: string | undefined | null;
label?: string | undefined | null;
labelColor?: string | undefined | null;
color?: string | undefined | null;
cacheSeconds?: string | undefined | null;
link?: LinkType;
class?: string | undefined | null;
}
interface ExtendedStyle extends BaseBadgePropsType, HTMLImgAttributes {
style?: 'flat' | 'flat-square' | 'for-the-badge' | 'plastic' | 'social';
}

export interface LicensePropsType extends ExtendedStyle {
source: 'github' | 'npm';
github_user?: string;
github_repo?: string;
npm_packageName?: string;
npm_registry_uri?: string;
}
