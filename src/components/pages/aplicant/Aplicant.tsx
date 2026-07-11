import aplicant from "@/assets/img/aplicant.img.png";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Aplicant = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="relative w-full">
        <img
            src={aplicant}
            alt={`Абитуриент ${currentYear}`}
            className="rounded-md w-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium">
              Абитуриент {currentYear}
            </h1>

            <div className="w-40 sm:w-72 h-[2px] bg-white mt-4 sm:mt-6 mx-auto"/>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:gap-5">
        <h1 className="text-xl sm:text-2xl w-full">{t("admission.title")}</h1>
        <p className="w-full sm:w-2/3 text-sm sm:text-base">{t("admission.subtitle")}</p>
      </div>
      <div className="rounded-md bg-[#F7F9FF] px-3 sm:px-5 py-5 flex flex-col gap-5 mt-8 sm:mt-10">
        <Line title={t("admission.blockTitle")}/>
        <p className="text-sm sm:text-base">{t("admission.desc")}</p>
        <p className="text-sm sm:text-base">{t("admission.direction")}</p>
        <div>
          <p className="text-base sm:text-lg font-semibold my-3 sm:my-4">
            {t("admission.profilesTitle")}
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
            <li>{t("admission.profile1")}</li>
            <li>{t("admission.profile2")}</li>
            <li>{t("admission.profile3")}</li>
            <li>{t("admission.profile4")}</li>
          </ul>
          <p className="w-full text-justify mt-4 text-sm sm:text-base">{t("admission.note")}</p>
        </div>
        <div>
          <p className="my-3 sm:my-4 text-base sm:text-lg font-semibold">
            {t("admission.requirementsTitle")}
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-2 sm:gap-3 text-sm sm:text-base">
            <li>{t("admission.req1")}</li>
            <li>{t("admission.req2")}</li>
            <li>{t("admission.req3")}</li>
            <li>{t("admission.req4")}</li>
            <li>{t("admission.req5")}</li>
            <li>{t("admission.req6")}</li>
            <li>{t("admission.req7")}</li>
            <li>{t("admission.req8")}</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          <p className="text-sm sm:text-base">{t("admission.finalNote")}</p>
          <a href="http://www.apap.kg" target="_blank" rel="noopener noreferrer">
            <p className="text-sinii decoration-solid">{t("auto.components.pages.aplicant.Aplicant.2")}</p>
          </a>
        </div>
        <button
          onClick={() => navigate("/about")}
          className="w-full h-12 rounded-md border-2 border-sinii text-sinii flex justify-center items-center uppercase font-semibold cursor-pointer hover:bg-sinii hover:text-white transition-colors"
        >
          {t("AGU.button")}
          <ArrowToTop width={22} height={22} />
        </button>
      </div>
    </>
  );
};

export default Aplicant;
