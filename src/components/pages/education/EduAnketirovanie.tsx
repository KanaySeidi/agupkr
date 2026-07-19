import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduAnketirovanie = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="education-survey" title={t("sidebar.education.anket")} />;
};

export default EduAnketirovanie;
