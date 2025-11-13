import type { sideBarNav } from "@/types";
import { useTranslation } from "react-i18next";

export const useSidebarNav = (): sideBarNav[] => {
  const { t } = useTranslation();

  return [
    { id: 1, title: t("sidebar.about"), path: "/about" },
    { id: 2, title: t("sidebar.charter"), path: "/about/charter" },
    { id: 3, title: t("sidebar.history"), path: "/about/history" },
    { id: 4, title: t("sidebar.logo"), path: "/about/logotip" },
    { id: 5, title: t("sidebar.structure"), path: "/about/structure" },
    { id: 6, title: t("sidebar.council"), path: "/about/council" },
    { id: 7, title: t("sidebar.union"), path: "/about/union" },
    { id: 8, title: t("sidebar.qualitySystem"), path: "/about/quality-system" },
    { id: 9, title: t("sidebar.journal"), path: "/about/journal" },
    { id: 10, title: t("sidebar.budget"), path: "/about/budget" },
    { id: 11, title: t("sidebar.professors"), path: "/about/professors" },
    { id: 12, title: t("sidebar.cooperation"), path: "/about/cooperation" },
    { id: 13, title: t("sidebar.integrity"), path: "/about/integrity" },
    { id: 14, title: t("sidebar.lawsGeneral"), path: "/about/laws-general" },
    { id: 15, title: t("sidebar.lawsInternal"), path: "/about/laws-internal" },
  ];
};
