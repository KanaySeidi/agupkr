import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduKafedBP = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="kafedra-bp" title={t("sidebar.education.kafedbp")} />;
};

export default EduKafedBP;
