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
    categoryKey: "quick.about.title",
    links: [
      {
        id: "about-charter",
        titleKey: "quick.about.charter",
        href: "/about/charter",
      },
      {
        id: "about-mission",
        titleKey: "quick.about.mission",
        href: "/about/mission",
      },
      { id: "about-logo", titleKey: "quick.about.logo", href: "/about/logo" },
      {
        id: "about-structure",
        titleKey: "quick.about.structure",
        href: "/about/structure",
      },
      {
        id: "about-international",
        titleKey: "quick.about.international",
        href: "/about/international",
      },
    ],
  },
  {
    id: "study-1",
    categoryKey: "quick.study.title",
    links: [
      {
        id: "study-1-charter",
        titleKey: "quick.study.charter",
        href: "/study/charter",
      },
      {
        id: "study-1-mission",
        titleKey: "quick.study.mission",
        href: "/study/mission",
      },
      { id: "study-1-logo", titleKey: "quick.study.logo", href: "/study/logo" },
      {
        id: "study-1-structure",
        titleKey: "quick.study.structure",
        href: "/study/structure",
      },
      {
        id: "study-1-international",
        titleKey: "quick.study.international",
        href: "/study/international",
      },
    ],
  },
  {
    id: "study-2",
    categoryKey: "quick.study.title",
    links: [
      {
        id: "study-2-charter",
        titleKey: "quick.study.charter",
        href: "/study/charter",
      },
      {
        id: "study-2-mission",
        titleKey: "quick.study.mission",
        href: "/study/mission",
      },
      { id: "study-2-logo", titleKey: "quick.study.logo", href: "/study/logo" },
      {
        id: "study-2-structure",
        titleKey: "quick.study.structure",
        href: "/study/structure",
      },
      {
        id: "study-2-international",
        titleKey: "quick.study.international",
        href: "/study/international",
      },
    ],
  },
  {
    id: "study-3",
    categoryKey: "quick.study.title",
    links: [
      {
        id: "study-3-charter",
        titleKey: "quick.study.charter",
        href: "/study/charter",
      },
      {
        id: "study-3-mission",
        titleKey: "quick.study.mission",
        href: "/study/mission",
      },
      { id: "study-3-logo", titleKey: "quick.study.logo", href: "/study/logo" },
      {
        id: "study-3-structure",
        titleKey: "quick.study.structure",
        href: "/study/structure",
      },
      {
        id: "study-3-international",
        titleKey: "quick.study.international",
        href: "/study/international",
      },
    ],
  },
  {
    id: "study-4",
    categoryKey: "quick.study.title",
    links: [
      {
        id: "study-4-charter",
        titleKey: "quick.study.charter",
        href: "/study/charter",
      },
      {
        id: "study-4-mission",
        titleKey: "quick.study.mission",
        href: "/study/mission",
      },
      { id: "study-4-logo", titleKey: "quick.study.logo", href: "/study/logo" },
      {
        id: "study-4-structure",
        titleKey: "quick.study.structure",
        href: "/study/structure",
      },
      {
        id: "study-4-international",
        titleKey: "quick.study.international",
        href: "/study/international",
      },
    ],
  },
  {
    id: "study-5",
    categoryKey: "quick.study.title",
    links: [
      {
        id: "study-5-charter",
        titleKey: "quick.study.charter",
        href: "/study/charter",
      },
      {
        id: "study-5-mission",
        titleKey: "quick.study.mission",
        href: "/study/mission",
      },
      { id: "study-5-logo", titleKey: "quick.study.logo", href: "/study/logo" },
      {
        id: "study-5-structure",
        titleKey: "quick.study.structure",
        href: "/study/structure",
      },
      {
        id: "study-5-international",
        titleKey: "quick.study.international",
        href: "/study/international",
      },
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
