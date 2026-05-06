import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

export default function EduAspirantura() {
  const { t } = useTranslation();

  return (
    <div className="w-full space-y-3 mt-6">
      <Line title={t("sidebar.education.aspirant")} />

      <p className="text-[18px] text-sinii mt-5">
        {t("auto.components.pages.education.EduAspirantura.1")}</p>

      <div className="flex flex-col gap-6 text-sinii text-[15px]">
        <section className="space-y-3 text-[#1a1a1a]">
          <p>
            {t("auto.components.pages.education.EduAspirantura.2")}</p>
          <p>
            {t("auto.components.pages.education.EduAspirantura.3")}</p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              {t("auto.components.pages.education.EduAspirantura.4")}</li>
            <li>
              {t("auto.components.pages.education.EduAspirantura.5")}</li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">
            {t("auto.components.pages.education.EduAspirantura.6")}</h3>
          <ul className="list-disc list-inside space-y-1 text-[#1a1a1a]">
            <li>{t("auto.components.pages.education.EduAspirantura.7")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.8")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.9")}</li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">
            {t("auto.components.pages.education.EduAspirantura.10")}</h3>
          <ul className="list-disc list-inside space-y-1 text-[#1a1a1a]">
            <li>
              {t("auto.components.pages.education.EduAspirantura.11")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.12")}</li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduAspirantura.13")}</h3>
          <p className="text-[#1a1a1a] mb-2">
            {t("auto.components.pages.education.EduAspirantura.14")}</p>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              {t("auto.components.pages.education.EduAspirantura.15")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.16")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.17")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.18")}</li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduAspirantura.19")}</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              {t("auto.components.pages.education.EduAspirantura.20")}</li>
            <li>
              {t("auto.components.pages.education.EduAspirantura.21")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.22")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.23")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.24")}</li>
            <li>
              {t("auto.components.pages.education.EduAspirantura.25")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.26")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.27")}</li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduAspirantura.28")}</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>{t("auto.components.pages.education.EduAspirantura.29")}</li>
            <li>{t("auto.components.pages.education.EduAspirantura.30")}</li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduAspirantura.31")}</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduAspirantura.32")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduAspirantura.33")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduAspirantura.34")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduAspirantura.35")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduAspirantura.36")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduAspirantura.37")}</a>
            </li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduAspirantura.38")}</h3>
          <h3 className="font-semibold">{t("auto.components.pages.education.EduAspirantura.39")}</h3>
        </section>
      </div>
    </div>
  );
}
