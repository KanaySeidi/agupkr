import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduKafedGMU = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="kafedra-gmu" title={t("sidebar.education.kafedgmu")} />;
};

export default EduKafedGMU;
