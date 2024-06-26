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

export interface GitHubVersionPropsType extends BaseBadgePropsType {
  user: string;
  repo: string;
  include_prereleases?: boolean;
  sort?: 'date' | 'semver';
  filter?: string;
  display_name?: 'tag' | 'release';
}

export interface GitHubDownloadPropsType extends BaseBadgePropsType {
  user: string;
  repo: string;
}

export interface NpmDownloadPropsType extends BaseBadgePropsType {
  interval?: 'dw' | 'dm' | 'dy'| 'd18m';
  packageName: string;
}

export interface NpmVersionPropsType extends BaseBadgePropsType {
  packageName: string;
  tag?: string;
}

export interface NpmAuthorDownloadPropsType extends BaseBadgePropsType {
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
  source: 'github' | 'npm';
  github_user?: string;
  github_repo?: string;
  npm_packageName?: string;
  npm_registry_uri?: string;
}

export interface GitHubSponsorPropsType extends BaseBadgePropsType {
  user: string;
}

export interface VersionPropsType extends BaseBadgePropsType {
  source: 'jsr' | 'npm' | 'pypi';
  packageName: string;
  jsr_scope?: string;
  npm_tag?: string;
  pypiBaseUrl?: string;
}

export interface DownloadPropsType extends BaseBadgePropsType {
  source: 'npm' | 'github';
  user?: string;
  repo?: string;
  interval?: 'dw' | 'dm' | 'dy' | 'd18m';
  packageName?: string;
}