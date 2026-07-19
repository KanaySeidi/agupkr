import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const AbdrakhmanovWorks = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="abdrakhmanov-works" title={t("sidebar.abdrakhmanov.works")} />;
};

export default AbdrakhmanovWorks;
