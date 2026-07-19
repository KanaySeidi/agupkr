import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduAspirantura = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="aspirantura" title={t("sidebar.education.aspirant")} />;
};

export default EduAspirantura;
