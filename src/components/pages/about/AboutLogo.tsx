import Line from "@/components/atoms/Line";
import logos from "@/assets/img/logos.png";
import { useTranslation } from "react-i18next";

const AboutLogo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={t("sidebar.logo")} />
        <img src={logos} alt="" />
        <h1>{t("logo.title")}</h1>
        <p>{t("logo.intro.creation")}</p>
        <p>{t("logo.intro.languages")}</p>
        <p>{t("logo.philosophy.text")}</p>
        <h3>{t("logo.colors.title")}</h3>
        <p>{t("logo.colors.blue")}</p>
      </div>
    </>
  );
};

export default AboutLogo;
