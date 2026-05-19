import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLibraryStore } from "@/store/library.store";

const CATEGORY_SLUG = "books";

const LibraryBooks = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const { categories, categoriesStatus, fetchCategories, setParams } = useLibraryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const category = categories.find(
    (c) => c.slug === CATEGORY_SLUG || c.title.toLowerCase().includes("книг")
  );

  const resources = category?.resources ?? [];

  const filtered = resources.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (value: string) => {
    setSearch(value);
    setParams({ search: value });
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryBooks.45")}</h1>
        <p className="text-sm text-slate-500">{t("auto2.components.pages.libs.LibraryBooks.46")}</p>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder={t("auto2.components.pages.libs.LibraryBooks.47")}
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-sinii transition-colors"
        />
      </div>

      {categoriesStatus === 'loading' && (
        <p className="text-sm text-slate-400 text-center py-12">{t("auto2.components.pages.libs.LibraryBooks.48")}</p>
      )}

      {filtered.length === 0 && categoriesStatus === 'success' ? (
        <p className="text-sm text-slate-400 text-center py-12">{t("auto2.components.pages.libs.LibraryBooks.48")}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((resource) => (
            <div key={resource.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sinii transition-all duration-200 overflow-hidden flex flex-col">
              {resource.photo_url ? (
                <img src={resource.photo_url} alt={resource.title} className="h-32 w-full object-cover" />
              ) : (
                <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-700" />
              )}
              <div className="p-3 flex flex-col gap-1.5 flex-1">
                <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full w-fit">{resource.category_name}</span>
                <p className="text-xs font-semibold text-slate-800 leading-snug line-clamp-2">{resource.title}</p>
                <p className="text-xs text-slate-500 line-clamp-2">{resource.description}</p>
                <div className="flex items-center justify-end mt-auto pt-1">
                  {(resource.link || resource.file_url) && (
                    <a
                      href={resource.link || resource.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-sinii hover:underline"
                    >
                      {t("auto2.components.pages.libs.LibraryBooks.50")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LibraryBooks;
