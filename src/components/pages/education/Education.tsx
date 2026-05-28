import Line from "@/components/atoms/Line";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useEducationStore } from "@/store/education.store";

const Education = () => {
  const { t } = useTranslation();
  const { allPrograms, status, fetchAll } = useEducationStore();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const isLoading = status["all"] === "loading" && allPrograms.length === 0;

  return (
    <>
      <div className="w-full">
        <Line title={t("sidebar.education.index")} />
        <main className="w-full p-4 sm:p-6 md:p-10">
          {isLoading && (
            <div className="text-slate-500 text-sm py-4">{t("sidebar.education.index")}…</div>
          )}

          {allPrograms.length > 0 ? (
            <section className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allPrograms.map((program) => (
                <article
                  key={program.id}
                  className="bg-white rounded-lg shadow-sm p-5 flex flex-col gap-3"
                >
                  {program.photo_url && (
                    <img
                      src={program.photo_url}
                      alt={program.title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  )}
                  <h3 className="text-base font-semibold text-slate-900">{program.title}</h3>
                  {program.description && (
                    <div
                      className="text-sm text-slate-600 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: program.description }}
                    />
                  )}
                  {program.link && (
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block text-sm text-white bg-sinii hover:bg-sky-700 rounded-md px-3 py-1 self-start"
                    >
                      {t("sidebar.education.index")}
                    </a>
                  )}
                </article>
              ))}
            </section>
          ) : !isLoading ? (
            <>
              <header className="mb-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-700">
                  {t("auto.components.pages.education.Education.1")}</h1>
                <p className="mt-5 text-lg text-sinii ">
                  {t("auto.components.pages.education.Education.2")}</p>
              </header>

              <section className="mb-8 bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-lg sm:text-2xl font-semibold text-slate-900 mb-4">
                  {t("auto.components.pages.education.Education.3")}</h2>
                <ul className="space-y-3 list-inside">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.4")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.5")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.6")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.7")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.8")}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>{t("auto.components.pages.education.Education.9")}</span>
                  </li>
                </ul>
              </section>
            </>
          ) : null}
        </main>
      </div>
    </>
  );
};

export default Education;
