import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const EduMagistratura = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="magistratura" title={t("sidebar.education.magistr")} />;
};

export default EduMagistratura;
