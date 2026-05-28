import Line from "@/components/atoms/Line";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useEducationStore } from "@/store/education.store";

export default function EduAspirantura() {
  const { t } = useTranslation();
  const { programsByType, status, fetchByType } = useEducationStore();

  useEffect(() => {
    fetchByType("phd");
  }, [fetchByType]);

  const programs = programsByType["phd"] ?? [];
  const mainProgram = programs[0];
  const isLoading = status["phd"] === "loading" && programs.length === 0;

  return (
    <div className="w-full space-y-3 mt-6">
      <Line title={mainProgram?.title || t("sidebar.education.aspirant")} />

      {isLoading && (
        <p className="text-slate-500 text-sm">{t("sidebar.education.aspirant")}…</p>
      )}

      {mainProgram ? (
        <div className="flex flex-col gap-6 text-sinii text-[15px]">
          {mainProgram.photo_url && (
            <img
              src={mainProgram.photo_url}
              alt={mainProgram.title}
              className="w-full max-h-64 object-cover rounded-md"
            />
          )}
          {mainProgram.description && (
            <div
              className="text-[#1a1a1a]"
              dangerouslySetInnerHTML={{ __html: mainProgram.description }}
            />
          )}
          {mainProgram.link && (
            <a
              href={mainProgram.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-sinii hover:bg-sky-700 rounded-md px-4 py-2 self-start"
            >
              {mainProgram.title}
            </a>
          )}
        </div>
      ) : !isLoading ? (
        <div className="flex flex-col gap-6 text-sinii text-[15px]">
          <p className="text-[18px] text-sinii mt-5">
            {t("auto.components.pages.education.EduAspirantura.1")}
          </p>
          <section className="space-y-3 text-[#1a1a1a]">
            <p>{t("auto.components.pages.education.EduAspirantura.2")}</p>
            <p>{t("auto.components.pages.education.EduAspirantura.3")}</p>
          </section>
        </div>
      ) : null}
    </div>
  );
}
