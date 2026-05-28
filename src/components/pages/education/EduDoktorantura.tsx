import Line from "@/components/atoms/Line";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useEducationStore } from "@/store/education.store";

export default function EduDoktorantura() {
  const { t } = useTranslation();
  const { programsByType, status, fetchByType } = useEducationStore();

  useEffect(() => {
    fetchByType("doctorate");
  }, [fetchByType]);

  const programs = programsByType["doctorate"] ?? [];
  const mainProgram = programs[0];
  const isLoading = status["doctorate"] === "loading" && programs.length === 0;

  return (
    <article className="w-full p-4 sm:p-6 md:p-10 rounded-2xl shadow-lg space-y-8">
      <header>
        <Line title={mainProgram?.title || t("sidebar.education.doctor")} />

        {isLoading && (
          <p className="text-slate-500 text-sm mt-5">{t("sidebar.education.doctor")}…</p>
        )}

        {mainProgram ? (
          <>
            {mainProgram.photo_url && (
              <img
                src={mainProgram.photo_url}
                alt={mainProgram.title}
                className="w-full max-h-64 object-cover rounded-md mt-5"
              />
            )}
            {mainProgram.description && (
              <div
                className="text-[15px] text-[#1a1a1a] leading-relaxed mt-5"
                dangerouslySetInnerHTML={{ __html: mainProgram.description }}
              />
            )}
            {mainProgram.link && (
              <a
                href={mainProgram.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-white bg-sinii hover:bg-sky-700 rounded-md px-4 py-2"
              >
                {mainProgram.title}
              </a>
            )}
          </>
        ) : !isLoading ? (
          <>
            <p className="text-[15px] text-[#1a1a1a] leading-relaxed mt-5">
              {t("auto.components.pages.education.EduDoktorantura.1")}
            </p>
            <p className="text-[15px] text-[#1a1a1a] mt-3">
              {t("auto.components.pages.education.EduDoktorantura.2")}
            </p>
          </>
        ) : null}
      </header>
    </article>
  );
}
