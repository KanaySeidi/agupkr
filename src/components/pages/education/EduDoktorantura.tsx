import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduDoktorantura = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="doctorate" title={t("sidebar.education.doctor")} />;
};

export default EduDoktorantura;
