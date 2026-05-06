import { useTranslation } from "react-i18next";


const LawsInternal = () => {
  const { t } = useTranslation();
  return <div>{t("sidebar.lawsInternal")}</div>;
};

export default LawsInternal;
