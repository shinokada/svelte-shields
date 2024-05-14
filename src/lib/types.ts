import { NpmDownloads } from "$lib";

export type LinkType =  string[] | [string, string];
export interface GitHubPropsType {
  user: string;
  repo: string;
  include_prereleases?: boolean;
  sort?: 'date' | 'semver';
  filter?: string;
  display_name?: 'tag' | 'release';
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

export interface GitHubDownloadsPropsType {
  user: string;
  repo: string;
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

export interface NpmVersionPropsType {
  packageName: string;
  tag?: string;
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