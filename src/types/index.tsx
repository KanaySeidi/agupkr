export type LineProps = {
  title: string;
};

export type QuickLink = {
  titleKey: string;
  href: string;
  id: string;
};

export type QuickLinksGroup = {
  id: string;
  categoryKey: string;
  links: QuickLink[];
};

export type SidebarNavItem = {
  title: string;
  id: number;
  path: string;
};

export type NavItemConfig = {
  id: number;
  path: string;
  titleKey: string;
};

export type HeaderShortcutItem = {
  id: string;
  titleKey: string;
  path?: string;
  href?: string;
  className: string;
  variant?: "filled" | "outlined";
};

export type LanguageOption = {
  title: string;
  key: string;
};
