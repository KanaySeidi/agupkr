import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useScheduleStore } from "@/store/schedule.store";
import PdfBento from "@/components/organisms/pdfBeno/PdfBento";

const PdfIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const Schedule = () => {
  const { t } = useTranslation();
  const { items, status, fetchList } = useScheduleStore();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  if (status === 'idle' || (status === 'success' && items.length === 0)) {
    return <PdfBento />;
  }

  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => {
    (acc[item.schedule_type] ??= []).push(item);
    return acc;
  }, {});

  return (
    <section className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sinii mb-1">
          {t("auto2.components.organisms.pdfBeno.PdfBento.27")}
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {Object.entries(grouped).map(([type, schedules]) => (
          <div key={type} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-sinii mb-4">
              {schedules[0]?.schedule_type_display ?? type}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {schedules.map((s) => (
                <a
                  key={s.id}
                  href={s.file_url || s.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-sinii hover:bg-blue-50 hover:text-sinii text-slate-700 transition-all duration-150 group"
                >
                  <span className="text-slate-400 group-hover:text-sinii transition-colors">
                    <PdfIcon />
                  </span>
                  <span className="text-sm font-medium leading-snug">{s.title}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
