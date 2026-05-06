import { structureConfig } from "@/config/siteContent";
import type { SidebarNavItem } from "@/types";
import { useTranslation } from "react-i18next";

export const useStructure = (): SidebarNavItem[] => {
  const { t } = useTranslation();

  return structureConfig.map((item) => ({
    ...item,
    title: t(item.title),
  }));
};
