import aplicant from "@/assets/img/aplicant.png";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Aplicant = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img src={aplicant} alt={t("auto.components.pages.aplicant.Aplicant.1")} className="rounded-md w-full object-cover" />
      </div>
      <div className="mt-8 sm:mt-10 flex flex-col gap-4 sm:gap-5">
        <h1 className="text-xl sm:text-2xl w-full">{t("admission.title")}</h1>
        <p className="w-full sm:w-2/3 text-sm sm:text-base">{t("admission.subtitle")}</p>
      </div>
      <div className="rounded-md bg-[#F7F9FF] px-3 sm:px-5 py-5 flex flex-col gap-5 mt-8 sm:mt-10">
        <Line title={t("admission.blockTitle")} />
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
      <div className="rounded-md bg-[#F7F9FF] px-3 sm:px-5 py-5 mt-8 sm:mt-10">
        <p className="my-3 sm:my-4 text-base sm:text-lg font-semibold">
          {t("auto.components.pages.aplicant.Aplicant.3")}</p>
        <a
          className="text-sinii text-sm sm:text-base underline"
          href="http://www.apap.kg/uploads/pdf/%D0%90%D0%B1%D0%B8%D1%82%D1%83%D1%80%D0%B8%D0%B5%D0%BD%D1%82%202025-2026/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA%20%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%BE%D0%BD%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("auto.components.pages.aplicant.Aplicant.4")}</a>
      </div>
      <div className="rounded-md bg-[#F7F9FF] px-3 sm:px-5 py-5 mt-8 sm:mt-10">
        <div className="flex items-start gap-3 cursor-pointer">
          <a
            href="http://www.apap.kg/uploads/SPPK/%D0%9F%D0%BB%D0%B0%D0%BD-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D0%A7%D1%83%D0%B9%2C%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA_2025%20%D0%B3%D0%BE%D0%B4.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sinii text-base sm:text-xl hover:underline flex-1"
          >
            {t("auto.components.pages.aplicant.Aplicant.5")}</a>
          <ArrowToTop width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default Aplicant;
