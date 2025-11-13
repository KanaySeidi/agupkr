import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const QualitySystem = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={t("sidebar.qualitySystem")} />
        <ul className="flex flex-col gap-2">
          <li>• Совет по качеству образования</li>
          <li>• Положение о Совете</li>
          <li>• Положение о внутр.СМК </li>
          <li>• Системы менеджмента качества в АГУПКР </li>
          <li>• План работы Совета по качеству образования</li>
          <li>• Положение об аудите качества образования АГУПКР</li>
          <li>
            • График мониторинга образовательного процесса в Академии
            государственного управления при Президенте Кыргызской Республики на
            2021-2022 учебный год{" "}
          </li>
          <li>
            • Индикаторы мониторинга образовательного процесса в Академии
            государственного управления при Президенте Кыргызской Республики{" "}
          </li>
          <li>
            • План внутривузовского контроля качества АГУПКР на 2021-2022
            учебный ГОД
          </li>
        </ul>
      </div>
    </>
  );
};

export default QualitySystem;
