export type LineProps = {
  title: string;
};

export type QuickLink = {
  titleKey: string;
  href: string;
};

export type QuickLinksGroup = {
  categoryKey: string;
  links: QuickLink[];
};
