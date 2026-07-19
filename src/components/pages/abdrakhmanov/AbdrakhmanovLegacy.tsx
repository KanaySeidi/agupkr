import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const AbdrakhmanovLegacy = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="abdrakhmanov-legacy" title={t("sidebar.abdrakhmanov.legacy")} />;
};

export default AbdrakhmanovLegacy;
