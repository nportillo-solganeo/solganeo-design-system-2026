// Solganeo 2026 : composants exposés sur window.Solganeo (documentation).
import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Défaut "primary". */
  variant?: 'primary' | 'secondary' | 'ghost' | 'on-deep' | 'ghost-deep';
  /** Défaut "md" ; "lg" dans un hero. */
  size?: 'md' | 'lg';
  /** Ajoute la flèche après le libellé. */
  arrow?: boolean;
  /** Nom d'une icône affichée avant le libellé. */
  icon?: IconName;
  /** Rend un lien <a> au lieu d'un <button>. */
  href?: string;
  children: React.ReactNode;
}
export declare const Button: React.FC<ButtonProps>;

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Défaut "default". */
  tone?: 'default' | 'brand' | 'signal';
  children: React.ReactNode;
}
export declare const Tag: React.FC<TagProps>;

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  help?: string;
  error?: string;
  /** true : textarea. */
  multiline?: boolean;
  disabled?: boolean;
}
export declare const Input: React.FC<InputProps>;

export interface SectionHeaderProps {
  title: string;
  /** Numéro éditorial, ex. "01". */
  index?: string;
  overline?: string;
  lead?: string;
  /** Défaut "start". */
  align?: 'start' | 'center';
  /** Sur un fond deep. */
  onDeep?: boolean;
}
export declare const SectionHeader: React.FC<SectionHeaderProps>;

export interface ServiceCardProps {
  title: string;
  index?: string;
  description?: string;
  tags?: string[];
  /** Défaut "#". */
  href?: string;
  /** Défaut « En savoir plus ». */
  linkLabel?: string;
}
export declare const ServiceCard: React.FC<ServiceCardProps>;

export interface LogoSources {
  /** Logo pour fond clair (Logo_Solganeo-Light). */
  light?: string;
  /** Logo pour fond sombre (Logo_Solganeo-Dark). */
  dark?: string;
  /** Symbole seul (Logo_Solganeo). */
  mark?: string;
}

export interface NavBarProps {
  logo?: LogoSources;
  /** Défaut : Expertises, Cabinet, Carrières, Contact. */
  links?: string[];
  active?: string;
  /** Défaut « Prendre rendez-vous » ; null pour masquer. */
  cta?: string | null;
  onCta?: () => void;
}
export declare const NavBar: React.FC<NavBarProps>;

export interface HeroProps {
  title: string;
  tag?: string;
  overline?: string;
  lead?: string;
  primary?: string;
  secondary?: string;
  /** Colonne de droite libre. */
  aside?: React.ReactNode;
  /** Si pas d'aside : affiche logo.mark. */
  logo?: LogoSources;
}
export declare const Hero: React.FC<HeroProps>;

export interface FooterProps {
  logo?: LogoSources;
  tagline?: string;
  columns?: { title: string; links: string[] }[];
  legal?: string[];
}
export declare const Footer: React.FC<FooterProps>;

export type IconName =
  | 'add'
  | 'ads_click'
  | 'analytics'
  | 'apartment'
  | 'api'
  | 'arrow_back'
  | 'arrow_forward'
  | 'arrow_outward'
  | 'badge'
  | 'bar_chart'
  | 'calendar_month'
  | 'call'
  | 'campaign'
  | 'chat'
  | 'check'
  | 'check_circle'
  | 'chevron_left'
  | 'chevron_right'
  | 'close'
  | 'cloud'
  | 'cloud_sync'
  | 'code'
  | 'dashboard'
  | 'database'
  | 'delete'
  | 'download'
  | 'edit'
  | 'error'
  | 'filter_list'
  | 'forum'
  | 'groups'
  | 'handshake'
  | 'help'
  | 'home'
  | 'hub'
  | 'info'
  | 'keyboard_arrow_down'
  | 'language'
  | 'lightbulb'
  | 'location_on'
  | 'lock'
  | 'mail'
  | 'menu'
  | 'monitoring'
  | 'more_horiz'
  | 'notifications'
  | 'open_in_new'
  | 'person'
  | 'progress_activity'
  | 'psychology'
  | 'query_stats'
  | 'refresh'
  | 'remove'
  | 'rocket_launch'
  | 'schedule'
  | 'school'
  | 'search'
  | 'send'
  | 'settings'
  | 'share'
  | 'smart_toy'
  | 'stars'
  | 'trending_up'
  | 'tune'
  | 'upload'
  | 'verified_user'
  | 'videocam'
  | 'warning'
  | 'work'
  | 'workspace_premium';

export type IconAnimation = 'spin' | 'pulse' | 'bounce' | 'nudge' | 'shake' | 'pop' | 'draw';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: IconName;
  /** En px, défaut 24. */
  size?: number;
  animate?: IconAnimation;
  /** Défaut "always". "hover" : au survol de l'icône ou de son lien, bouton ou .sg-icon-host. */
  trigger?: 'always' | 'hover';
  /** Libellé accessible ; sans lui l'icône est décorative. */
  title?: string;
}
export declare const Icon: React.FC<IconProps>;

export interface IconMarkupOptions {
  /** En px, défaut 24. */
  size?: number;
  /** Défaut "currentColor". */
  color?: string;
  animate?: IconAnimation;
  /** En secondes. */
  duration?: number;
  /** Défaut : en boucle sauf pop et draw. */
  loop?: boolean;
}
/** SVG autonome, animé en SMIL, sous forme de chaîne. */
export declare function iconMarkup(name: IconName, options?: IconMarkupOptions): string;
/** Les 70 noms disponibles. */
export declare const icons: IconName[];
/** Noms rangés par famille (Navigation, Actions, Contact, Statut, Métier, Tech). */
export declare const iconGroups: Record<string, IconName[]>;
