import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const AdProfDevelop = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="professional-development" title={t("sidebar.advanced.profDevelop")} />;
};

export default AdProfDevelop;
