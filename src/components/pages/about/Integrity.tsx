import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const Integrity = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="academic-honesty" title={t("sidebar.integrity")} />;
};

export default Integrity;
