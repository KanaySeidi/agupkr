import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const Union = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="trade-union" title={t("sidebar.union")} />;
};

export default Union;
