import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLibraryStore } from "@/store/library.store";

const LibraryResearchChairs = () => {
  const { t } = useTranslation();
  const { categories, fetchCategories } = useLibraryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const category = categories.find(
    (c) =>
      c.slug === "research-chairs" ||
      c.slug === "research_chairs" ||
      c.title.toLowerCase().includes("кафедр") ||
      c.title.toLowerCase().includes("chair")
  );

  const resources = category?.resources ?? [];

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryResearchChairs.25")}</h1>
        <p className="text-sm text-slate-500">
          {t("auto2.components.pages.libs.LibraryResearchChairs.26")}
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {resources.map((r) => (
          <div key={r.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-sinii transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sinii text-base mb-0.5">{r.title}</h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{r.description}</p>

                <div className="flex items-center justify-between">
                  {(r.link || r.file_url) && (
                    <a
                      href={r.link || r.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-sinii hover:underline"
                    >
                      {t("auto2.components.pages.libs.LibraryResearchChairs.29")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryResearchChairs;
