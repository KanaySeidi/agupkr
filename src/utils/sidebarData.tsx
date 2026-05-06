import { getSidebarSection, sidebarNavigationConfig } from "@/config/siteNavigation";
import type { SidebarNavItem } from "@/types";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const useSidebarNav = (): SidebarNavItem[] => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const section = getSidebarSection(pathname);
  const items = section ? sidebarNavigationConfig[section] : [];

  return items.map(({ id, path, titleKey }) => ({
    id,
    path,
    title: t(titleKey),
  }));
};
