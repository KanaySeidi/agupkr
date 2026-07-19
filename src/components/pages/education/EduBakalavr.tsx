import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduBakalavr = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="bachelor" title={t("sidebar.education.bakalavr")} />;
};

export default EduBakalavr;
