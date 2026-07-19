import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const History = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="history" title={t("sidebar.history")} />;
};

export default History;
