export type LinkType =  string[] | [string, string];
export interface BaseBadgePropsType {
  style?: "flat" | "flat-square" | "for-the-badge" | "plastic" | "social";
  logo?: string;
  logoColor?: string;
  logoSize?: string;
  label?: string;
  labelColor?: string;
  color?: string;
  cacheSeconds?: string;
  link?: LinkType;
  class?: string;
}

export interface GitHubPropsType extends BaseBadgePropsType {
  user: string;
  repo: string;
  include_prereleases?: boolean;
  sort?: 'date' | 'semver';
  filter?: string;
  display_name?: 'tag' | 'release';
}

export interface GitHubDownloadsPropsType extends BaseBadgePropsType {
  user: string;
  repo: string;
}

export interface NpmDownloadsPropsType extends BaseBadgePropsType {
  interval?: 'dw' | 'dm' | 'dy'| 'd18m';
  packageName: string;
}

export interface NpmVersionPropsType extends BaseBadgePropsType {
  packageName: string;
  tag?: string;
}

export interface NpmAuthorDownloadsPropsType extends BaseBadgePropsType {
  interval?: 'dw' | 'dm' | 'dy'| 'd18m';
  author: string;
}

export interface PypiVersionPropsType extends BaseBadgePropsType {
  packageName: string;
  pypiBaseUrl?: string;
}

export interface StaticBadgePropsType extends BaseBadgePropsType {
  badgeContent: string;
}

export interface JsrVersionPropsType extends BaseBadgePropsType {
  scope: string;
  packageName: string;
}

export interface LicensePropsType extends BaseBadgePropsType {
  license: 'github' | 'npm';
  github_user?: string;
  github_repo?: string;
  npm_packageName?: string;
  npm_registry_uri?: string;
}

export interface GitHubSponsorsPropsType extends BaseBadgePropsType {
  user: string;
}

export interface VersionPropsType extends BaseBadgePropsType {
  version: 'jsr' | 'npm' | 'pypi';
  packageName: string;
  jsr_scope?: string;
  npm_tag?: string;
  pypiBaseUrl?: string;
}
