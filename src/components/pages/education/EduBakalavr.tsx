import Line from "@/components/atoms/Line";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const EduBakalavr = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();

  const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  const directions = [
    {
      id: "gm",
      titleKey: "auto2.components.pages.education.EduBakalavr.1",
      profileKeys: ["auto2.components.pages.education.EduBakalavr.2"],
    },
    {
      id: "econ",
      titleKey: "auto2.components.pages.education.EduBakalavr.3",
      profileKeys: [
        "auto2.components.pages.education.EduBakalavr.4",
        "auto2.components.pages.education.EduBakalavr.5",
        "auto2.components.pages.education.EduBakalavr.6",
      ],
    },
    {
      id: "mgmt",
      titleKey: "auto2.components.pages.education.EduBakalavr.7",
      profileKeys: [
        "auto2.components.pages.education.EduBakalavr.8",
        "auto2.components.pages.education.EduBakalavr.9",
      ],
    },
    {
      id: "law",
      titleKey: "auto2.components.pages.education.EduBakalavr.10",
      profileKeys: ["auto2.components.pages.education.EduBakalavr.11"],
    },
  ];

  return (
    <article className="w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10">
      <header className="mb-6">
        <Line title={t("sidebar.education.bakalavr")} />
        <h2 className="text-lg font-semibold text-slate-900 mt-5">
          {t("auto.components.pages.education.EduBakalavr.1")}</h2>
        <p className="mt-3 text-sm md:text-base text-slate-700">
          {t("auto.components.pages.education.EduBakalavr.2")}</p>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">{t("auto.components.pages.education.EduBakalavr.3")}</h2>
        <p className="mt-2 text-sm text-slate-700">
          {t("auto.components.pages.education.EduBakalavr.4")}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          {t("auto.components.pages.education.EduBakalavr.5")}</h2>

        <p className="mt-3 text-sm text-slate-700">
          {t("auto.components.pages.education.EduBakalavr.6")}</p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {directions.map((d) => (
            <div key={d.id} className="border rounded-lg p-4 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {t(d.titleKey)}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {t("auto.components.pages.education.EduBakalavr.7")}</p>
                </div>

                <button
                  aria-expanded={!!open[d.id]}
                  onClick={() => toggle(d.id)}
                  className="self-start shrink-0 inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-sinii text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  {open[d.id] ? t("auto2.components.pages.education.EduBakalavr.12") : t("auto2.components.pages.education.EduBakalavr.13")}
                </button>
              </div>

              <div
                className={`mt-3 transition-all ${
                  open[d.id] ? "max-h-96" : "max-h-0 overflow-hidden"
                }`}
              >
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  {d.profileKeys.map((profileKey) => (
                    <li key={profileKey}>{t(profileKey)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          {t("auto.components.pages.education.EduBakalavr.8")}</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>
            {t("auto.components.pages.education.EduBakalavr.9")}</li>
          <li>
            {t("auto.components.pages.education.EduBakalavr.10")}</li>
          <li>{t("auto.components.pages.education.EduBakalavr.11")}</li>
          <li>
            {t("auto.components.pages.education.EduBakalavr.12")}</li>
        </ul>
      </section>
    </article>
  );
};

export default EduBakalavr;
