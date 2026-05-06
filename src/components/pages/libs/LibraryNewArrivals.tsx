import { useTranslation } from "react-i18next";

const books = [
  { id: 1, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.1", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.2", year: 2024, categoryKey: "auto2.components.pages.libs.LibraryNewArrivals.3", color: "from-blue-500 to-blue-700" },
  { id: 2, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.4", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.5", year: 2024, categoryKey: "auto2.components.pages.libs.LibraryNewArrivals.6", color: "from-indigo-500 to-indigo-700" },
  { id: 3, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.7", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.8", year: 2024, categoryKey: "auto2.components.pages.libs.LibraryNewArrivals.9", color: "from-teal-500 to-teal-700" },
  { id: 4, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.10", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.11", year: 2024, categoryKey: "auto2.components.pages.libs.LibraryNewArrivals.12", color: "from-purple-500 to-purple-700" },
  { id: 5, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.13", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.14", year: 2024, categoryKey: "auto2.components.pages.libs.LibraryNewArrivals.15", color: "from-orange-500 to-orange-700" },
  { id: 6, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.16", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.17", year: 2024, category: "HR", color: "from-rose-500 to-rose-700" },
  { id: 7, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.18", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.19", year: 2023, categoryKey: "auto2.components.pages.libs.LibraryNewArrivals.20", color: "from-emerald-500 to-emerald-700" },
  { id: 8, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.21", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.22", year: 2023, categoryKey: "auto2.components.pages.libs.LibraryNewArrivals.23", color: "from-cyan-500 to-cyan-700" },
  { id: 9, titleKey: "auto2.components.pages.libs.LibraryNewArrivals.24", authorKey: "auto2.components.pages.libs.LibraryNewArrivals.25", year: 2023, categoryKey: "auto2.components.pages.libs.LibraryNewArrivals.26", color: "from-amber-500 to-amber-700" },
];


const LibraryNewArrivals = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryNewArrivals.27")}</h1>
        <p className="text-sm text-slate-500">{t("auto2.components.pages.libs.LibraryNewArrivals.28")}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <div key={book.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sinii transition-all duration-200 overflow-hidden flex flex-col">
            {}
            <div className={`h-40 bg-gradient-to-br ${book.color}`} />
            <div className="p-4 flex flex-col gap-2 flex-1">
              <span className="text-xs font-medium bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full w-fit">
                {book.category ?? t(book.categoryKey)}
              </span>
              <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                {t(book.titleKey)}
              </p>
              <p className="text-xs text-slate-500">{t(book.authorKey)}</p>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs text-slate-400">{book.year}</span>
                <button className="text-xs font-medium text-sinii border border-sinii rounded-full px-3 py-1 hover:bg-sinii hover:text-white transition-colors">
                  {t("auto2.components.pages.libs.LibraryNewArrivals.29")}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryNewArrivals;
