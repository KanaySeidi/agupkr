import { useTranslation } from "react-i18next";


const EduAnketirovanie = () => {
  const { t } = useTranslation();
  return <div>{t("sidebar.education.anket")}</div>;
};

export default EduAnketirovanie;
