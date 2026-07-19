import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const Professors = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="honorary-professors" title={t("sidebar.professors")} />;
};

export default Professors;
