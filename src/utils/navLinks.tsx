import type { sideBarNav } from "@/types";
import { useTranslation } from "react-i18next";

export const useNavLinks = (): sideBarNav[] => {
  const { t } = useTranslation();

  return [
    { id: 1, title: t("header.navs.nav1"), path: "/" },
    { id: 2, title: t("header.navs.nav2"), path: "/about" },
    { id: 3, title: t("header.navs.nav3"), path: "/education" },
    { id: 4, title: t("header.navs.nav4"), path: "/knowledge" },
    { id: 5, title: t("header.navs.nav5"), path: "/aplicant" },
    { id: 6, title: t("header.navs.nav6"), path: "/news" },
    { id: 7, title: t("header.navs.nav7"), path: "/contacts" },
  ];
};
