import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const Structure = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="structure" title={t("sidebar.structure")} />;
};

export default Structure;
