import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduKafedEM = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="kafedra-em" title={t("sidebar.education.kafedem")} />;
};

export default EduKafedEM;
