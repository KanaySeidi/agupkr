import { useTranslation } from "react-i18next";


const EduSPO = () => {
  const { t } = useTranslation();
  return <div>{t("sidebar.education.spo")}</div>;
};

export default EduSPO;
