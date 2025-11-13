import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Budget = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={t("sidebar.budget")} />
        <ul className="flex flex-col gap-2">
          <li>Проект программного бюджета и мер ССБР АГУПКР за 2019-2021гг</li>
          <li>Презентация_ССБР АГУПКР _2019-2021</li>
          <li>
            Сведения о доходах от платного обучения,  фактических и плановых
             расходах внебюджетных средств (контракт)
          </li>
          <li>Академии за 2020 и 2021 годы</li>
        </ul>
      </div>
    </>
  );
};

export default Budget;
