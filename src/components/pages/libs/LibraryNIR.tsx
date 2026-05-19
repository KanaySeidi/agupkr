import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLibraryStore } from "@/store/library.store";

const LibraryNIR = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");

  const { categories, fetchCategories } = useLibraryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const category = categories.find(
    (c) =>
      c.slug === "nir" ||
      c.title.toLowerCase().includes("нир") ||
      c.title.toLowerCase().includes("научн") ||
      c.title.toLowerCase().includes("исследован")
  );

  const resources = category?.resources ?? [];

  const filtered = resources.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryNIR.43")}</h1>
        <p className="text-sm text-slate-500">
          {t("auto2.components.pages.libs.LibraryNIR.44")}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <input
            type="text"
            placeholder={t("auto2.components.pages.libs.LibraryNIR.45")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-sinii transition-colors"
          />
        </div>
      </div>

      <div className="flex gap-3 mb-4 text-sm text-slate-500">
        <span>{t("auto2.components.pages.libs.LibraryNIR.49")}<strong className="text-sinii">{filtered.length}</strong></span>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <ul className="divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <li className="py-12 text-center text-slate-400 text-sm">{t("auto2.components.pages.libs.LibraryNIR.50")}</li>
          ) : (
            filtered.map((r) => (
              <li key={r.id} className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 leading-snug mb-1">{r.title}</p>
                  <p className="text-xs text-slate-500">{r.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 pt-0.5">
                  <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-1 rounded-full">{r.category_name}</span>
                  {(r.link || r.file_url) && (
                    <a
                      href={r.link || r.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-sinii hover:underline"
                    >
                      →
                    </a>
                  )}
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default LibraryNIR;
