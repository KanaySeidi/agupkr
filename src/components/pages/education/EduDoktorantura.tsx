import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

export default function EduDoktorantura() {
  const { t } = useTranslation();

  return (
    <article className="w-full p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg space-y-8">
      <header>
        <Line title={t("sidebar.education.doctor")} />

        <p className="text-[15px] text-[#1a1a1a] leading-relaxed mt-5">
          {t("auto.components.pages.education.EduDoktorantura.1")}</p>

        <p className="text-[15px] text-[#1a1a1a] mt-3">
          {t("auto.components.pages.education.EduDoktorantura.2")}</p>
        <ul className="list-disc list-inside text-[#1a1a1a] mt-2 space-y-1">
          <li>
            {t("auto.components.pages.education.EduDoktorantura.3")}</li>
          <li>
            {t("auto.components.pages.education.EduDoktorantura.4")}</li>
        </ul>
      </header>

      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          {t("auto.components.pages.education.EduDoktorantura.5")}</h3>

        <ul className="list-disc list-inside text-[#1a1a1a] space-y-1 text-[15px]">
          <li>{t("auto.components.pages.education.EduDoktorantura.6")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.7")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.8")}</li>
        </ul>
      </section>

      {}
      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          {t("auto.components.pages.education.EduDoktorantura.9")}</h3>

        <ul className="list-disc list-inside text-[#1a1a1a] space-y-1 text-[15px]">
          <li>{t("auto.components.pages.education.EduDoktorantura.10")}</li>
          <li>
            {t("auto.components.pages.education.EduDoktorantura.11")}</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          {t("auto.components.pages.education.EduDoktorantura.12")}</h3>

        <ul className="list-disc list-inside text-[#1a1a1a] text-[15px] space-y-1">
          <li>
            {t("auto.components.pages.education.EduDoktorantura.13")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.14")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.15")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.16")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.17")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.18")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.19")}</li>
          <li>{t("auto.components.pages.education.EduDoktorantura.20")}</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          {t("auto.components.pages.education.EduDoktorantura.21")}</h3>

        <ul className="list-disc list-inside text-[#1a1a1a] text-[15px] space-y-1">
          <li>{t("auto.components.pages.education.EduDoktorantura.22")}</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          {t("auto.components.pages.education.EduDoktorantura.23")}</h3>

        <ul className="list-disc list-inside text-[15px] text-[#1a1a1a] space-y-1">
          <li>
            <a href="#" className="text-sinii underline">
              {t("auto.components.pages.education.EduDoktorantura.24")}</a>
          </li>
          <li>
            <a href="#" className="text-sinii underline">
              {t("auto.components.pages.education.EduDoktorantura.25")}</a>
          </li>
          <li>{t("auto.components.pages.education.EduDoktorantura.26")}</li>
          <li>
            <a href="#" className="text-sinii underline">
              {t("auto.components.pages.education.EduDoktorantura.27")}</a>
          </li>
          <li>
            {t("auto.components.pages.education.EduDoktorantura.28")}</li>
          <li>
            {t("auto.components.pages.education.EduDoktorantura.29")}</li>
          <li>
            {t("auto.components.pages.education.EduDoktorantura.30")}</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-sinii">{t("auto.components.pages.education.EduDoktorantura.31")}</h3>
        <h3 className="font-semibold text-sinii">{t("auto.components.pages.education.EduDoktorantura.32")}</h3>
      </section>
    </article>
  );
}
