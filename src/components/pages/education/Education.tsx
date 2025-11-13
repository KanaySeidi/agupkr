import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full">
        <Line title={t("sidebar.education.index")} />
      </div>
    </>
  );
};

export default Education;
