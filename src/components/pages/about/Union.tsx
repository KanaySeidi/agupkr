import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Union = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={t("sidebar.union")} />
        <h1>
          {t("auto.components.pages.about.Union.1")}</h1>
        <p>
          {t("auto.components.pages.about.Union.2")}</p>
      </div>
    </>
  );
};

export default Union;
