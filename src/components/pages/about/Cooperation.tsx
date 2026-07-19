import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const Cooperation = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="international-cooperation" title={t("sidebar.cooperation")} />;
};

export default Cooperation;
