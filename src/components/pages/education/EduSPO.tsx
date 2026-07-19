import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduSPO = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="spo" title={t("sidebar.education.spo")} />;
};

export default EduSPO;
