import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Line from "@/components/atoms/Line";
import { useSiteStore } from "@/store/site.store";

const EduAnketirovanie = () => {
  const { t } = useTranslation();
  const surveys = useSiteStore(s => s.surveys);
  const surveysStatus = useSiteStore(s => s.surveysStatus);
  const fetchSurveys = useSiteStore(s => s.fetchSurveys);

  useEffect(() => { fetchSurveys(); }, [fetchSurveys]);

  return (
    <div className="w-full flex flex-col gap-5">
      <Line title={t("sidebar.education.anket")} />
      {surveysStatus === 'loading' && surveys.length === 0 && (
        <p className="text-sm text-black/50">{t("loader.loading", "Загрузка...")}</p>
      )}
      <ul className="flex flex-col gap-4">
        {surveys.map(survey => (
          <li key={survey.id} className="border rounded-lg p-4 flex flex-col gap-2">
            <p className="font-semibold text-sinii">{survey.title}</p>
            {survey.description && (
              <p className="text-sm text-black/70">{survey.description}</p>
            )}
            <a
              href={survey.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-sinii underline hover:opacity-80 w-fit"
            >
              {t("surveys.open", "Пройти опрос")}
            </a>
          </li>
        ))}
        {surveysStatus === 'success' && surveys.length === 0 && (
          <p className="text-sm text-black/50">{t("surveys.empty", "Опросов пока нет")}</p>
        )}
      </ul>
    </div>
  );
};

export default EduAnketirovanie;
