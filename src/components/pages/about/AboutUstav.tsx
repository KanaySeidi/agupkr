import { useTranslation } from "react-i18next";


const AboutUstav = () => {
  const { t } = useTranslation();
  return <div>{t("sidebar.charter")}</div>;
};

export default AboutUstav;
