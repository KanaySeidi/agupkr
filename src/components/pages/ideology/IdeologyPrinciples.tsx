import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const IdeologyPrinciples = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="ideology-principles" title={t("sidebar.ideology.principles")} />;
};

export default IdeologyPrinciples;
