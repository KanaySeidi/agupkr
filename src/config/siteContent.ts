import type {
  LanguageOption,
  QuickLinksGroup,
  SidebarNavItem,
} from "@/types";

export const languageOptions: LanguageOption[] = [
  { title: "Рус", key: "ru" },
  { title: "Кыр", key: "ky" },
  { title: "Eng", key: "en" },
];

export const quickLinksConfig: QuickLinksGroup[] = [
  {
    id: "about",
    categoryKey: "header.navs.nav2",
    links: [
      { id: "about-1", titleKey: "sidebar.charter",     href: "/about/charter" },
      { id: "about-2", titleKey: "sidebar.history",     href: "/about/history" },
      { id: "about-3", titleKey: "sidebar.structure",   href: "/about/structure" },
      { id: "about-4", titleKey: "sidebar.cooperation", href: "/about/cooperation" },
      { id: "about-5", titleKey: "sidebar.integrity",   href: "/about/integrity" },
    ],
  },
  {
    id: "education",
    categoryKey: "header.navs.nav3",
    links: [
      { id: "edu-1", titleKey: "sidebar.education.bakalavr", href: "/education/bakalavr" },
      { id: "edu-2", titleKey: "sidebar.education.magistr",  href: "/education/magistr" },
      { id: "edu-3", titleKey: "sidebar.education.doctor",   href: "/education/doctor" },
      { id: "edu-4", titleKey: "sidebar.education.aspirant", href: "/education/aspirant" },
      { id: "edu-5", titleKey: "sidebar.education.spo",      href: "/education/spo" },
    ],
  },
  {
    id: "advanced",
    categoryKey: "header.navs.nav4",
    links: [
      { id: "adv-1", titleKey: "sidebar.advanced.profDevelop", href: "/advanced/profdevelop" },
      { id: "adv-2", titleKey: "header.schedule",              href: "/schedule" },
      { id: "adv-3", titleKey: "header.library",               href: "/library" },
      { id: "adv-4", titleKey: "header.navs.nav5",             href: "/aplicant2025" },
      { id: "adv-5", titleKey: "header.navs.nav7",             href: "/contacts" },
    ],
  },
];

export const structureConfig: SidebarNavItem[] = [
  { id: 1, title: "structure.item1", path: "/about" },
  { id: 2, title: "structure.item2", path: "/about" },
  { id: 3, title: "structure.item3", path: "/education" },
  { id: 4, title: "structure.item4", path: "/knowledge" },
  { id: 5, title: "structure.item5", path: "/aplicant" },
  { id: 6, title: "structure.item6", path: "/news" },
  { id: 7, title: "structure.item7", path: "/news" },
  { id: 8, title: "structure.item8", path: "/contacts" },
  { id: 9, title: "structure.item9", path: "/contacts" },
  { id: 10, title: "structure.item10", path: "/contacts" },
  { id: 11, title: "structure.item11", path: "/contacts" },
  { id: 12, title: "structure.item12", path: "/contacts" },
  { id: 13, title: "structure.item13", path: "/contacts" },
  { id: 14, title: "structure.item14", path: "/contacts" },
  { id: 15, title: "structure.item15", path: "/contacts" },
  { id: 16, title: "structure.item16", path: "/contacts" },
  { id: 17, title: "structure.item17", path: "/contacts" },
];
