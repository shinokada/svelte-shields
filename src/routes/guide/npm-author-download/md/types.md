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

export interface NpmAuthorDownloadPropsType extends BaseBadgePropsType {
  interval?: 'dw' | 'dm' | 'dy'| 'd18m';
  author: string;
}