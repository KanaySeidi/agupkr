import { mainNavigationConfig } from "@/config/siteNavigation";
import type { SidebarNavItem } from "@/types";
import { useTranslation } from "react-i18next";

export const useNavLinks = (): SidebarNavItem[] => {
  const { t } = useTranslation();

  return mainNavigationConfig.map(({ id, path, titleKey }) => ({
    id,
    path,
    title: t(titleKey),
  }));
};
