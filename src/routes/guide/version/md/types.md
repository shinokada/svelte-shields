export interface VersionPropsType extends BaseBadgePropsType {
  version: 'jsr' | 'npm' | 'pypi';
  packageName: string;
  jsr_scope?: string;
  npm_tag?: string;
  pypiBaseUrl?: string;
}