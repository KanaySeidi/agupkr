import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const AbdrakhmanovBiography = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="abdrakhmanov-biography" title={t("sidebar.abdrakhmanov.biography")} />;
};

export default AbdrakhmanovBiography;
