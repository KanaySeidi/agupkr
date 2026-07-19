import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const Budget = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="budget-programs" title={t("sidebar.budget")} />;
};

export default Budget;
