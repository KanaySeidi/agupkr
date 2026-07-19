import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const LawsInternal = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="laws-internal" title={t("sidebar.lawsInternal")} />;
};

export default LawsInternal;
