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
        <img src={aplicant} alt="Абитуриент" className="rounded-md" />
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <h1 className="text-2xl w-1/3">{t("admission.title")}</h1>
        <p className="w-1/2">{t("admission.subtitle")}</p>
      </div>
      <div className="rounded-md bg-[#F7F9FF] px-2 py-5 flex flex-col gap-5 mt-10">
        <Line title={t("admission.blockTitle")} />
        <p>{t("admission.desc")}</p>
        <p>{t("admission.direction")}</p>
        <div>
          <p className="text-lg font-semibold my-4">
            {t("admission.profilesTitle")}
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-3">
            <li>{t("admission.profile1")}</li>
            <li>{t("admission.profile2")}</li>
            <li>{t("admission.profile3")}</li>
            <li>{t("admission.profile4")}</li>
          </ul>
          <p className="w-1/2 text-justify mt-5">{t("admission.note")}</p>
        </div>
        <div>
          <p className="my-4 text-lg font-semibold">
            {t("admission.requirementsTitle")}
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-3">
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
        <div className="flex gap-2">
          <p>{t("admission.finalNote")}</p>
          <a href="http://www.apap.kg" target="_blank">
            <p className="text-sinii decoration-solid">АГУПКР</p>
          </a>
        </div>
        <button
          onClick={() => navigate("/about")}
          className="w-full h-13 rounded-md border-2 border-sinii text-sinii flex justify-center items-center uppercase font-semibold cursor-pointer"
        >
          {t("AGU.button")}
          <ArrowToTop width={25} height={25} />
        </button>
      </div>
      <div className="rounded-md bg-[#F7F9FF] px-2 py-5 mt-10">
        <p className="my-4 text-lg font-semibold">
          Краткая информация для МАГИСТРАТУРЫ (бюджет)
        </p>
        <a
          className="text-sinii"
          href="http://www.apap.kg/uploads/pdf/%D0%90%D0%B1%D0%B8%D1%82%D1%83%D1%80%D0%B8%D0%B5%D0%BD%D1%82%202025-2026/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA%20%D1%80%D0%B5%D0%BA%D0%BE%D0%BC%D0%BE%D0%BD%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D1%85.pdf"
        >
          Список кандидатов, рекомендованных на совместную магистерскую
          программу АГУПКР имени Ж.Абдрахманова с Фондом Ханнса Зайделя по
          направлению “Менедмент” профиль “Менеджмент в государственном и
          муниципальном управлении”
        </a>
      </div>
      <div className="rounded-md bg-[#F7F9FF] px-2 py-5 mt-10">
        <div className="flex gap-4 items-center cursor-pointer">
          <a
            href="http://www.apap.kg/uploads/SPPK/%D0%9F%D0%BB%D0%B0%D0%BD-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%20%D0%A7%D1%83%D0%B9%2C%20%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA_2025%20%D0%B3%D0%BE%D0%B4.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-2xl text-sinii">
              План – график курсов повышения квалификации ЦППК АГУПКР
            </p>
          </a>

          <ArrowToTop width={25} height={25} />
        </div>
      </div>
    </>
  );
};

export default Aplicant;
