import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const LawsGeneral = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="laws-general" title={t("sidebar.lawsGeneral")} />;
};

export default LawsGeneral;
