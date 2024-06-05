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
}

export interface LicensePropsType extends BaseBadgePropsType {
  license: 'github' | 'npm';
  user?: string;
  repo?: string;
  packageName?: string;
  registry_uri?: string;
}
