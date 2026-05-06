import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Budget = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={t("sidebar.budget")} />
        <ul className="flex flex-col gap-2">
          <li>{t("auto.components.pages.about.Budget.1")}</li>
          <li>{t("auto.components.pages.about.Budget.2")}</li>
          <li>
            {t("auto.components.pages.about.Budget.3")}</li>
          <li>{t("auto.components.pages.about.Budget.4")}</li>
        </ul>
      </div>
    </>
  );
};

export default Budget;
