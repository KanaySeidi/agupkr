import CmsPageView from "@/components/organisms/cmsPage/CmsPageView";
import { useTranslation } from "react-i18next";

const AbdrakhmanovGallery = () => {
  const { t } = useTranslation();
  return <CmsPageView slug="abdrakhmanov-gallery" title={t("sidebar.abdrakhmanov.gallery")} />;
};

export default AbdrakhmanovGallery;
