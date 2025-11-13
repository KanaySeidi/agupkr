import type { sideBarNav } from "@/types";
import { useTranslation } from "react-i18next";

export const useStructure = (): sideBarNav[] => {
  const { t } = useTranslation();

  return [
    { id: 1, title: t("structure.item1"), path: "/about" },
    { id: 2, title: t("structure.item2"), path: "/about" },
    { id: 3, title: t("structure.item3"), path: "/education" },
    { id: 4, title: t("structure.item4"), path: "/knowledge" },
    { id: 5, title: t("structure.item5"), path: "/aplicant" },
    { id: 6, title: t("structure.item6"), path: "/news" },
    { id: 7, title: t("structure.item7"), path: "/news" },
    { id: 8, title: t("structure.item8"), path: "/contacts" },
    { id: 9, title: t("structure.item9"), path: "/contacts" },
    { id: 10, title: t("structure.item10"), path: "/contacts" },
    { id: 11, title: t("structure.item11"), path: "/contacts" },
    { id: 12, title: t("structure.item12"), path: "/contacts" },
    { id: 13, title: t("structure.item13"), path: "/contacts" },
    { id: 14, title: t("structure.item14"), path: "/contacts" },
    { id: 15, title: t("structure.item15"), path: "/contacts" },
    { id: 16, title: t("structure.item16"), path: "/contacts" },
    { id: 17, title: t("structure.item17"), path: "/contacts" },
  ];
};
