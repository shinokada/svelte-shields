export interface DownloadPropsType extends BaseBadgePropsType {
  source: 'npm' | 'github';
  user?: string;
  repo?: string;
  interval?: 'dw' | 'dm' | 'dy' | 'd18m';
  packageName?: string;
}