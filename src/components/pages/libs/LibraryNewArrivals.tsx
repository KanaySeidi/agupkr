import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLibraryStore } from "@/store/library.store";

const LibraryNewArrivals = () => {
  const { t } = useTranslation();
  const { categories, fetchCategories } = useLibraryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const category = categories.find(
    (c) =>
      c.slug === "new-arrivals" ||
      c.slug === "new_arrivals" ||
      c.title.toLowerCase().includes("поступ") ||
      c.title.toLowerCase().includes("новинк")
  );

  const resources = category?.resources ?? [];

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryNewArrivals.27")}</h1>
        <p className="text-sm text-slate-500">{t("auto2.components.pages.libs.LibraryNewArrivals.28")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {resources.map((resource) => (
          <div key={resource.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sinii transition-all duration-200 overflow-hidden flex flex-col">
            {resource.photo_url ? (
              <img src={resource.photo_url} alt={resource.title} className="h-40 w-full object-cover" />
            ) : (
              <div className="h-40 bg-gradient-to-br from-blue-500 to-blue-700" />
            )}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <span className="text-xs font-medium bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full w-fit">
                {resource.category_name}
              </span>
              <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                {resource.title}
              </p>
              <p className="text-xs text-slate-500 line-clamp-2">{resource.description}</p>
              <div className="flex items-center justify-end mt-auto pt-2">
                {(resource.link || resource.file_url) && (
                  <a
                    href={resource.link || resource.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-sinii border border-sinii rounded-full px-3 py-1 hover:bg-sinii hover:text-white transition-colors"
                  >
                    {t("auto2.components.pages.libs.LibraryNewArrivals.29")}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryNewArrivals;
