import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const QualitySystem = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="quality-management" title={t("sidebar.qualitySystem")} />;
};

export default QualitySystem;
