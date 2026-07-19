import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const AboutLogo = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="academy-logo" title={t("sidebar.logo")} />;
};

export default AboutLogo;
