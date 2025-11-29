import Stepper from "@/components/ui/Stepper";
import { useTranslation } from "react-i18next";

const AdProfDevelopStepper = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full">
        <div className="w-full flex justify-between items-center rounded-md">
          <p className="text-sinii text-2xl">{t("advanced.stepper.title")}</p>
          <p className="bg-sinii text-white w-2/4 py-2 px-5 rounded-md">
            {t("advanced.stepper.subtitle")}
          </p>
        </div>
        <Stepper autoplay autoplayInterval={5000}>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item1_title")}
            </p>
            <p>{t("advanced.stepper.item1_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item2_title")}
            </p>
            <p>{t("advanced.stepper.item2_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item3_title")}
            </p>
            <p>{t("advanced.stepper.item3_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item4_title")}
            </p>
            <p>{t("advanced.stepper.item4_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item5_title")}
            </p>
            <p>{t("advanced.stepper.item5_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item6_title")}
            </p>
            <p>{t("advanced.stepper.item6_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item7_title")}
            </p>
            <p>{t("advanced.stepper.item7_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item8_title")}
            </p>
            <p>{t("advanced.stepper.item8_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item9_title")}
            </p>
            <p>{t("advanced.stepper.item9_subtitle")}</p>
          </div>
          <div>
            <p className="text-sinii text-lg mb-2">
              {t("advanced.stepper.item10_title")}
            </p>
            <p>{t("advanced.stepper.item10_subtitle")}</p>
          </div>
        </Stepper>
      </div>
    </>
  );
};

export default AdProfDevelopStepper;
