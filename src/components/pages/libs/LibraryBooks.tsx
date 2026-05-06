import { useState } from "react";
import { useTranslation } from "react-i18next";

const allBooks = [
  { id: 1, titleKey: "auto2.components.pages.libs.LibraryBooks.1", authorKey: "auto2.components.pages.libs.LibraryBooks.2", year: 2022, categoryKey: "auto2.components.pages.libs.LibraryBooks.3", pages: 488, color: "from-blue-500 to-blue-700" },
  { id: 2, titleKey: "auto2.components.pages.libs.LibraryBooks.4", authorKey: "auto2.components.pages.libs.LibraryBooks.5", year: 2021, categoryKey: "auto2.components.pages.libs.LibraryBooks.6", pages: 636, color: "from-purple-500 to-purple-700" },
  { id: 3, titleKey: "auto2.components.pages.libs.LibraryBooks.7", authorKey: "auto2.components.pages.libs.LibraryBooks.8", year: 2023, categoryKey: "auto2.components.pages.libs.LibraryBooks.9", pages: 559, color: "from-teal-500 to-teal-700" },
  { id: 4, titleKey: "auto2.components.pages.libs.LibraryBooks.10", authorKey: "auto2.components.pages.libs.LibraryBooks.11", year: 2021, categoryKey: "auto2.components.pages.libs.LibraryBooks.12", pages: 380, color: "from-amber-500 to-amber-700" },
  { id: 5, titleKey: "auto2.components.pages.libs.LibraryBooks.13", authorKey: "auto2.components.pages.libs.LibraryBooks.14", year: 2022, categoryKey: "auto2.components.pages.libs.LibraryBooks.15", pages: 728, color: "from-rose-500 to-rose-700" },
  { id: 6, titleKey: "auto2.components.pages.libs.LibraryBooks.16", authorKey: "auto2.components.pages.libs.LibraryBooks.17", year: 2023, category: "HR", pages: 695, color: "from-indigo-500 to-indigo-700" },
  { id: 7, titleKey: "auto2.components.pages.libs.LibraryBooks.18", authorKey: "auto2.components.pages.libs.LibraryBooks.19", year: 2020, categoryKey: "auto2.components.pages.libs.LibraryBooks.20", pages: 512, color: "from-cyan-500 to-cyan-700" },
  { id: 8, titleKey: "auto2.components.pages.libs.LibraryBooks.21", authorKey: "auto2.components.pages.libs.LibraryBooks.22", year: 2022, categoryKey: "auto2.components.pages.libs.LibraryBooks.23", pages: 460, color: "from-emerald-500 to-emerald-700" },
  { id: 9, titleKey: "auto2.components.pages.libs.LibraryBooks.24", authorKey: "auto2.components.pages.libs.LibraryBooks.25", year: 2023, categoryKey: "auto2.components.pages.libs.LibraryBooks.26", pages: 344, color: "from-orange-500 to-orange-700" },
  { id: 10, titleKey: "auto2.components.pages.libs.LibraryBooks.27", authorKey: "auto2.components.pages.libs.LibraryBooks.28", year: 2021, categoryKey: "auto2.components.pages.libs.LibraryBooks.29", pages: 816, color: "from-sky-500 to-sky-700" },
  { id: 11, titleKey: "auto2.components.pages.libs.LibraryBooks.30", authorKey: "auto2.components.pages.libs.LibraryBooks.31", year: 2022, categoryKey: "auto2.components.pages.libs.LibraryBooks.32", pages: 520, color: "from-violet-500 to-violet-700" },
  { id: 12, titleKey: "auto2.components.pages.libs.LibraryBooks.33", authorKey: "auto2.components.pages.libs.LibraryBooks.34", year: 2023, categoryKey: "auto2.components.pages.libs.LibraryBooks.35", pages: 400, color: "from-pink-500 to-pink-700" },
];

const categoryKeys = [
  "auto2.components.pages.libs.LibraryBooks.36",
  "auto2.components.pages.libs.LibraryBooks.37",
  "auto2.components.pages.libs.LibraryBooks.38",
  "auto2.components.pages.libs.LibraryBooks.39",
  "auto2.components.pages.libs.LibraryBooks.40",
  "auto2.components.pages.libs.LibraryBooks.41",
  "auto2.components.pages.libs.LibraryBooks.42",
  "HR",
] as const;


const LibraryBooks = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<(typeof categoryKeys)[number]>(categoryKeys[0]);

  const filtered = allBooks.filter((b) => {
    const title = t(b.titleKey).toLowerCase();
    const author = t(b.authorKey).toLowerCase();
    const matchCat = activeCategory === categoryKeys[0] || b.categoryKey === activeCategory || b.category === activeCategory;
    const matchSearch = title.includes(search.toLowerCase()) ||
      author.includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryBooks.45")}</h1>
        <p className="text-sm text-slate-500">{t("auto2.components.pages.libs.LibraryBooks.46")}</p>
      </div>

      {}
      <div className="mb-4">
        <input
          type="text"
          placeholder={t("auto2.components.pages.libs.LibraryBooks.47")}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-sinii transition-colors"
        />
      </div>

      {}
      <div className="flex flex-wrap gap-2 mb-6">
        {categoryKeys.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-sinii text-white border-sinii"
                : "border-slate-300 text-slate-600 hover:border-sinii hover:text-sinii"
            }`}
          >
            {cat === "HR" ? cat : t(cat)}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-400 text-center py-12">{t("auto2.components.pages.libs.LibraryBooks.48")}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((book) => (
            <div key={book.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sinii transition-all duration-200 overflow-hidden flex flex-col">
              <div className={`h-32 bg-gradient-to-br ${book.color}`} />
              <div className="p-3 flex flex-col gap-1.5 flex-1">
                <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full w-fit">{book.category ?? t(book.categoryKey)}</span>
                <p className="text-xs font-semibold text-slate-800 leading-snug line-clamp-2">{t(book.titleKey)}</p>
                <p className="text-xs text-slate-500">{t(book.authorKey)}</p>
                <div className="flex items-center justify-between mt-auto pt-1">
                  <span className="text-xs text-slate-400">{book.year} · {book.pages} {t("auto2.components.pages.libs.LibraryBooks.49")}</span>
                  <button className="text-xs font-medium text-sinii hover:underline">{t("auto2.components.pages.libs.LibraryBooks.50")}</button>
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
