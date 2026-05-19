import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLibraryStore } from "@/store/library.store";

const LibraryJournals = () => {
  const { t } = useTranslation();
  const { categories, fetchCategories } = useLibraryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const category = categories.find(
    (c) => c.slug === "journals" || c.title.toLowerCase().includes("журнал")
  );

  const resources = category?.resources ?? [];

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryJournals.28")}</h1>
        <p className="text-sm text-slate-500">{t("auto2.components.pages.libs.LibraryJournals.29")}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t("auto2.components.pages.libs.LibraryJournals.32")}</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">{t("auto2.components.pages.libs.LibraryJournals.33")}</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t("auto2.components.pages.libs.LibraryJournals.35")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {resources.map((r) => (
              <tr key={r.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3.5">
                  <p className="font-medium text-slate-800 leading-snug">{r.title}</p>
                </td>
                <td className="px-4 py-3.5 hidden md:table-cell">
                  <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full">{r.description}</span>
                </td>
                <td className="px-4 py-3.5 text-center">
                  {(r.link || r.file_url) ? (
                    <a
                      href={r.link || r.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-sinii hover:underline"
                    >
                      {t("auto2.components.pages.libs.LibraryJournals.36")}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400">{t("auto2.components.pages.libs.LibraryJournals.37")}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryJournals;
