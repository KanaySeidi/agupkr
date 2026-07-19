import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const AboutUstav = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="charter" title={t("sidebar.charter")} />;
};

export default AboutUstav;
