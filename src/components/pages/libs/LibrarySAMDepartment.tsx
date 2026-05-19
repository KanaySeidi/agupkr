import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLibraryStore } from "@/store/library.store";

const LibrarySAMDepartment = () => {
  const { t } = useTranslation();
  const { categories, fetchCategories } = useLibraryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const category = categories.find(
    (c) =>
      c.slug === "sam-department" ||
      c.slug === "sam" ||
      c.title.toLowerCase().includes("сам") ||
      c.title.toLowerCase().includes("самостоят")
  );

  const publications = category?.resources ?? [];

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">
          {t("auto2.components.pages.libs.LibrarySAMDepartment.27")}
        </h1>
        <p className="text-sm text-slate-500">
          {t("auto2.components.pages.libs.LibrarySAMDepartment.28")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-sinii mb-3">{t("auto2.components.pages.libs.LibrarySAMDepartment.29")}</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            {t("auto2.components.pages.libs.LibrarySAMDepartment.30")}
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            {t("auto2.components.pages.libs.LibrarySAMDepartment.31")}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-sinii mb-3">{t("auto2.components.pages.libs.LibrarySAMDepartment.32")}</h2>
          <p className="text-sm text-slate-500">{t("auto2.components.pages.libs.LibrarySAMDepartment.28")}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-sinii">{t("auto2.components.pages.libs.LibrarySAMDepartment.33")}</h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {publications.map((pub) => (
            <li key={pub.id} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 leading-snug mb-1">{pub.title}</p>
                <p className="text-xs text-slate-500">{pub.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                  {pub.category_name}
                </span>
                {(pub.link || pub.file_url) && (
                  <a
                    href={pub.link || pub.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-sinii hover:underline"
                  >
                    →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibrarySAMDepartment;
