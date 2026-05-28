import Line from "@/components/atoms/Line";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useEducationStore } from "@/store/education.store";

const EduSPO = () => {
  const { t } = useTranslation();
  const { programsByType, status, fetchByType } = useEducationStore();

  useEffect(() => {
    fetchByType("spo");
  }, [fetchByType]);

  const programs = programsByType["spo"] ?? [];
  const isLoading = status["spo"] === "loading" && programs.length === 0;

  if (programs.length === 0 && !isLoading) {
    return <div>{t("sidebar.education.spo")}</div>;
  }

  return (
    <div className="w-full space-y-4 mt-6">
      {isLoading && (
        <div className="text-slate-500 text-sm">{t("sidebar.education.spo")}…</div>
      )}
      {programs.map((program) => (
        <article key={program.id} className="w-full">
          <Line title={program.title || t("sidebar.education.spo")} />
          {program.photo_url && (
            <img
              src={program.photo_url}
              alt={program.title}
              className="w-full max-h-64 object-cover rounded-md my-4"
            />
          )}
          {program.description && (
            <div
              className="text-[15px] text-[#1a1a1a] mt-4"
              dangerouslySetInnerHTML={{ __html: program.description }}
            />
          )}
          {program.link && (
            <a
              href={program.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-white bg-sinii hover:bg-sky-700 rounded-md px-4 py-2"
            >
              {t("sidebar.education.spo")}
            </a>
          )}
        </article>
      ))}
    </div>
  );
};

export default EduSPO;
