import aplicant from "@/assets/img/aplicant.agupkr.jpg";
import Admission2026Content from "./Admission2026Content";
import { useTranslation } from "react-i18next";

const Aplicant = () => {
  const { t } = useTranslation();

  return (
      <>
        <div className="relative w-full">
          <img
              src={aplicant}
              alt={t("header.aplicant")}
              className="rounded-md w-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium">
                {t("header.aplicant")}
              </h1>

              <div className="w-40 sm:w-72 h-[2px] bg-white mt-4 sm:mt-6 mx-auto" />
            </div>
          </div>
        </div>

        <Admission2026Content />
      </>
  );
};

export default Aplicant;