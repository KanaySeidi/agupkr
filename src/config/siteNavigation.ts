import type { HeaderShortcutItem, NavItemConfig } from "@/types";

export type AppSection = "about" | "education" | "advanced" | "library" | "abdrakhmanov" | "ideology" | "professional_development";

const normalizePath = (path: string) =>
  path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;

export const mainNavigationConfig: NavItemConfig[] = [
  { id: 1, path: "/about", titleKey: "header.navs.nav1" },
  { id: 2, path: "/abdrakhmanov", titleKey: "header.navs.nav2" },
  { id: 3, path: "/ideology", titleKey: "header.navs.nav3" },
  { id: 4, path: "/advanced", titleKey: "header.navs.nav4" },
  { id: 5, path: "/education", titleKey: "header.navs.nav5" },
  { id: 6, path: "/about/cooperation", titleKey: "header.navs.nav6" },
  { id: 7, path: "/about/council", titleKey: "header.navs.nav7" },
  { id: 8, path: "/contacts", titleKey: "header.navs.nav8" },
];

export const headerShortcutConfig: HeaderShortcutItem[] = [
  {
    id: "aplicant",
    titleKey: "header.aplicant",
    path: "/aplicant2025",
    className: "w-44",
    variant: "outlined",
  },
  {
    id: "avn",
    titleKey: "header.avn",
    href: "https://avn.apap.kg/",
    className: "w-32",
    variant: "outlined",
  },
  {
    id: "digitalAcademy",
    titleKey: "header.digitalAcademy",
    href: "https://da.agupkr.kg/",
    className: "w-40",
    variant: "outlined",
  },
];

export const sidebarNavigationConfig: Record<AppSection, NavItemConfig[]> = {
  about: [
    { id: 1, path: "/about", titleKey: "sidebar.about" },
    { id: 2, path: "/about/charter", titleKey: "sidebar.charter" },
    { id: 3, path: "/about/history", titleKey: "sidebar.history" },
    { id: 4, path: "/about/logotip", titleKey: "sidebar.logo" },
    { id: 5, path: "/about/structure", titleKey: "sidebar.structure" },
    { id: 6, path: "/about/council", titleKey: "sidebar.council" },
    { id: 7, path: "/about/union", titleKey: "sidebar.union" },
    { id: 8, path: "/about/quality-system", titleKey: "sidebar.qualitySystem" },
    { id: 9, path: "/about/journal", titleKey: "sidebar.journal" },
    { id: 10, path: "/about/budget", titleKey: "sidebar.budget" },
    { id: 11, path: "/about/professors", titleKey: "sidebar.professors" },
    { id: 12, path: "/about/integrity", titleKey: "sidebar.integrity" },
    { id: 13, path: "/about/laws-general", titleKey: "sidebar.lawsGeneral" },
    { id: 14, path: "/about/laws-internal", titleKey: "sidebar.lawsInternal" },
  ],
  abdrakhmanov: [
    { id: 1, path: "/abdrakhmanov", titleKey: "sidebar.abdrakhmanov.main" },
    { id: 2, path: "/abdrakhmanov/biography", titleKey: "sidebar.abdrakhmanov.biography" },
    { id: 3, path: "/abdrakhmanov/works", titleKey: "sidebar.abdrakhmanov.works" },
    { id: 4, path: "/abdrakhmanov/legacy", titleKey: "sidebar.abdrakhmanov.legacy" },
    { id: 5, path: "/abdrakhmanov/gallery", titleKey: "sidebar.abdrakhmanov.gallery" },
  ],
  ideology: [
    { id: 1, path: "/ideology", titleKey: "sidebar.ideology.main" },
    { id: 2, path: "/ideology/values", titleKey: "sidebar.ideology.values" },
    { id: 3, path: "/ideology/principles", titleKey: "sidebar.ideology.principles" },
  ],
  professional_development: [
    { id: 1, path: "/advanced", titleKey: "sidebar.advanced.about" },
    { id: 2, path: "/advanced/profdevelop", titleKey: "sidebar.advanced.profDevelop" },
    { id: 3, path: "/advanced/employees", titleKey: "sidebar.advanced.employees" },
  ],
  education: [
    { id: 1, path: "/education", titleKey: "sidebar.education.index" },
    { id: 2, path: "/education/spo", titleKey: "sidebar.education.spo" },
    { id: 3, path: "/education/bakalavr", titleKey: "sidebar.education.bakalavr" },
    { id: 4, path: "/education/magistr", titleKey: "sidebar.education.magistr" },
    { id: 5, path: "/education/doctor", titleKey: "sidebar.education.doctor" },
    { id: 7, path: "/education/kafedgmu", titleKey: "sidebar.education.kafedgmu" },
    { id: 8, path: "/education/kafedem", titleKey: "sidebar.education.kafedem" },
    { id: 9, path: "/education/kafedbp", titleKey: "sidebar.education.kafedbp" },
    { id: 10, path: "/education/anket", titleKey: "sidebar.education.anket" },
  ],
  advanced: [
    { id: 1, path: "/advanced", titleKey: "sidebar.advanced.about" },
    { id: 2, path: "/advanced/profdevelop", titleKey: "sidebar.advanced.profDevelop" },
    { id: 3, path: "/advanced/employees", titleKey: "sidebar.advanced.employees" },
  ],
  library: [
    { id: 1, path: "/library", titleKey: "sidebar.library.title" },
    { id: 2, path: "/library/new-arrive", titleKey: "sidebar.library.newArrivals" },
    { id: 3, path: "/library/journals", titleKey: "sidebar.library.electronicJournals" },
    { id: 4, path: "/library/e-book", titleKey: "sidebar.library.electronicBooks" },
    { id: 5, path: "/library/research", titleKey: "sidebar.library.departments" },
    { id: 6, path: "/library/samd", titleKey: "sidebar.library.SAMDepartment" },
    { id: 7, path: "/library/nir", titleKey: "sidebar.library.NIR" },
  ],
};

const standaloneRouteTitleKeys: Record<string, string> = {
  "/schedule": "header.schedule",
  "/contacts": "header.navs.nav8",
  "/aplicant2025": "admission.blockTitle",
  "/news": "header.navs.nav5",
  "/library": "sidebar.library.title",
};

export const routeTitleKeys = [
  ...mainNavigationConfig,
  ...Object.values(sidebarNavigationConfig).flat(),
].reduce<Record<string, string>>((acc, item) => {
  acc[item.path] = item.titleKey;
  return acc;
}, { ...standaloneRouteTitleKeys });

export const getSidebarSection = (pathname: string): AppSection | null => {
  const normalizedPath = normalizePath(pathname);

  if (normalizedPath.startsWith("/abdrakhmanov")) return "abdrakhmanov";
  if (normalizedPath.startsWith("/ideology")) return "ideology";
  if (normalizedPath.startsWith("/about")) return "about";
  if (normalizedPath.startsWith("/education")) return "education";
  if (normalizedPath.startsWith("/advanced")) return "advanced";
  if (normalizedPath.startsWith("/library")) return "library";

  return null;
};

export const hasSidebar = (pathname: string) => getSidebarSection(pathname) !== null;

export const getRouteTitleKey = (pathname: string) =>
  routeTitleKeys[normalizePath(pathname)];
