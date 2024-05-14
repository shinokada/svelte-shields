export interface NpmDownloadsPropsType {
  interval?: 'dw' | 'dm' | 'dy'| 'd18m';
  packageName: string;
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