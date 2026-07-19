import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const Journal = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="bulletin" title={t("sidebar.journal")} />;
};

export default Journal;
