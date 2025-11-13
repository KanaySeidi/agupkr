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
          Академическая честность – это совокупность морально-нравственных норм,
          принципов и ценностей, определяющих поведение каждого члена
          академического сообщества, включающая такие принципы как избегание
          обмана и плагиата, приверженность академическим стандартам, честность
          и принципиальность в научных исследованиях и публикациях.
        </p>
      </div>
    </>
  );
};

export default Integrity;
