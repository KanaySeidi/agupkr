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

export type sideBarNav = {
  title: string;
  id: number;
  path: string;
};
