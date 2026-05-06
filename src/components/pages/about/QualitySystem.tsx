import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const QualitySystem = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={t("sidebar.qualitySystem")} />
        <ul className="flex flex-col gap-2">
          <li>{t("auto.components.pages.about.QualitySystem.1")}</li>
          <li>{t("auto.components.pages.about.QualitySystem.2")}</li>
          <li>{t("auto.components.pages.about.QualitySystem.3")}</li>
          <li>{t("auto.components.pages.about.QualitySystem.4")}</li>
          <li>{t("auto.components.pages.about.QualitySystem.5")}</li>
          <li>{t("auto.components.pages.about.QualitySystem.6")}</li>
          <li>
            {t("auto.components.pages.about.QualitySystem.7")}{" "}
          </li>
          <li>
            {t("auto.components.pages.about.QualitySystem.8")}{" "}
          </li>
          <li>
            {t("auto.components.pages.about.QualitySystem.9")}</li>
        </ul>
      </div>
    </>
  );
};

export default QualitySystem;
