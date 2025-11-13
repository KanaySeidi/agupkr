import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import professors from "@/assets/img/image 26.png";
const Professors = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Line title={t("sidebar.professors")} />
      <div className="mt-10">
        <img src={professors} alt="" />
      </div>
    </div>
  );
};

export default Professors;
