import { useTranslation } from "react-i18next";
import integrity from "@/assets/img/integrity.png";
import Line from "@/components/atoms/Line";

const Integrity = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={t("sidebar.integrity")} />

        <img src={integrity} alt="" />

        <p className="mt-20">
          {t("auto.components.pages.about.Integrity.1")}</p>
      </div>
    </>
  );
};

export default Integrity;
