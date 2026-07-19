import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const IdeologyValues = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="ideology-values" title={t("sidebar.ideology.values")} />;
};

export default IdeologyValues;
