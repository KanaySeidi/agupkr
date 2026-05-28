import Line from "@/components/atoms/Line";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useEducationStore } from "@/store/education.store";

const EduBakalavr = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();
  const { programsByType, directions, status, fetchByType, fetchDirections } =
    useEducationStore();

  useEffect(() => {
    fetchByType("bachelor");
    fetchDirections();
  }, [fetchByType, fetchDirections]);

  const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  const programs = programsByType["bachelor"] ?? [];
  const mainProgram = programs[0];
  const isLoading =
    (status["bachelor"] === "loading" && programs.length === 0) ||
    (status["directions"] === "loading" && directions.length === 0);

  return (
    <article className="w-full bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10">
      <header className="mb-6">
        <Line title={mainProgram?.title || t("sidebar.education.bakalavr")} />
        {isLoading && (
          <p className="text-slate-500 text-sm mt-3">{t("sidebar.education.bakalavr")}…</p>
        )}
        {mainProgram?.description && (
          <div
            className="mt-3 text-sm md:text-base text-slate-700"
            dangerouslySetInnerHTML={{ __html: mainProgram.description }}
          />
        )}
      </header>

      {directions.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-slate-900">
            {t("auto.components.pages.education.EduBakalavr.5")}
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {directions.map((d) => (
              <div key={d.id} className="border rounded-lg p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{d.title}</h3>
                    {d.description && (
                      <p className="text-xs text-slate-500 mt-1">
                        {t("auto.components.pages.education.EduBakalavr.7")}
                      </p>
                    )}
                  </div>

                  {d.description && (
                    <button
                      aria-expanded={!!open[String(d.id)]}
                      onClick={() => toggle(String(d.id))}
                      className="self-start shrink-0 inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-sinii text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
                    >
                      {open[String(d.id)]
                        ? t("auto2.components.pages.education.EduBakalavr.12")
                        : t("auto2.components.pages.education.EduBakalavr.13")}
                    </button>
                  )}
                </div>

                <div
                  className={`mt-3 transition-all ${
                    open[String(d.id)] ? "max-h-96" : "max-h-0 overflow-hidden"
                  }`}
                >
                  {d.description && (
                    <div
                      className="text-sm text-slate-700"
                      dangerouslySetInnerHTML={{ __html: d.description }}
                    />
                  )}
                  {d.link && (
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-xs text-sinii underline"
                    >
                      {d.link}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default EduBakalavr;
