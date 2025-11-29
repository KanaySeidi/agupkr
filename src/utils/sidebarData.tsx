import type { sideBarNav } from "@/types";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const useSidebarNav = (): sideBarNav[] => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const getSection = (): "about" | "education" | "advanced" | "main" => {
    if (pathname.startsWith("/about")) return "about";
    if (pathname.startsWith("/education")) return "education";
    if (pathname.startsWith("/advanced")) return "advanced";
    return "main";
  };

  const section = getSection();

  if (section === "about") {
    return [
      { id: 1, title: t("sidebar.about"), path: "/about" },
      { id: 2, title: t("sidebar.charter"), path: "/about/charter" },
      { id: 3, title: t("sidebar.history"), path: "/about/history" },
      { id: 4, title: t("sidebar.logo"), path: "/about/logotip" },
      { id: 5, title: t("sidebar.structure"), path: "/about/structure" },
      { id: 6, title: t("sidebar.council"), path: "/about/council" },
      { id: 7, title: t("sidebar.union"), path: "/about/union" },
      {
        id: 8,
        title: t("sidebar.qualitySystem"),
        path: "/about/quality-system",
      },
      { id: 9, title: t("sidebar.journal"), path: "/about/journal" },
      { id: 10, title: t("sidebar.budget"), path: "/about/budget" },
      { id: 11, title: t("sidebar.professors"), path: "/about/professors" },
      { id: 12, title: t("sidebar.cooperation"), path: "/about/cooperation" },
      { id: 13, title: t("sidebar.integrity"), path: "/about/integrity" },
      { id: 14, title: t("sidebar.lawsGeneral"), path: "/about/laws-general" },
      {
        id: 15,
        title: t("sidebar.lawsInternal"),
        path: "/about/laws-internal",
      },
    ];
  }

  if (section === "education") {
    return [
      { id: 1, title: t("sidebar.education.index"), path: "/education" },
      { id: 2, title: t("sidebar.education.spo"), path: "/education/spo" },
      {
        id: 3,
        title: t("sidebar.education.bakalavr"),
        path: "/education/bakalavr",
      },
      {
        id: 4,
        title: t("sidebar.education.magistr"),
        path: "/education/magistr",
      },
      {
        id: 5,
        title: t("sidebar.education.doctor"),
        path: "/education/doctor",
      },
      {
        id: 6,
        title: t("sidebar.education.aspirant"),
        path: "/education/aspirant",
      },
      {
        id: 7,
        title: t("sidebar.education.kafedgmu"),
        path: "/education/kafedgmu",
      },
      {
        id: 8,
        title: t("sidebar.education.kafedem"),
        path: "/education/kafedem",
      },
      {
        id: 9,
        title: t("sidebar.education.kafedbp"),
        path: "/education/kafedbp",
      },
      { id: 10, title: t("sidebar.education.anket"), path: "/education/anket" },
    ];
  }

  if (section === "advanced") {
    return [
      { id: 1, title: t("sidebar.advanced.about"), path: "/advanced" },
      {
        id: 2,
        title: t("sidebar.advanced.profDevelop"),
        path: "/advanced/profdevelop",
      },
      {
        id: 3,
        title: t("sidebar.advanced.employees"),
        path: "/advanced/employees",
      },
    ];
  }

  return [{ id: 1, title: t("navbar.home"), path: "/" }];
};
