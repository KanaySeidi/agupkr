import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const AdEmploy = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="state-employees-training" title={t("sidebar.advanced.employees")} />;
};

export default AdEmploy;
