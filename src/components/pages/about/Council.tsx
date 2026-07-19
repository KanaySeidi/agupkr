import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const Council = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="academic-council" title={t("sidebar.council")} />;
};

export default Council;
