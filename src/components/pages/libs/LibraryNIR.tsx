import { useState } from "react";
import { useTranslation } from "react-i18next";

const works = [
  { id: 1, titleKey: "auto2.components.pages.libs.LibraryNIR.1", authorKey: "auto2.components.pages.libs.LibraryNIR.2", typeKey: "auto2.components.pages.libs.LibraryNIR.3", year: 2024, deptKey: "auto2.components.pages.libs.LibraryNIR.4" },
  { id: 2, titleKey: "auto2.components.pages.libs.LibraryNIR.5", authorKey: "auto2.components.pages.libs.LibraryNIR.6", typeKey: "auto2.components.pages.libs.LibraryNIR.7", year: 2024, deptKey: "auto2.components.pages.libs.LibraryNIR.8" },
  { id: 3, titleKey: "auto2.components.pages.libs.LibraryNIR.9", authorKey: "auto2.components.pages.libs.LibraryNIR.10", typeKey: "auto2.components.pages.libs.LibraryNIR.11", year: 2023, deptKey: "auto2.components.pages.libs.LibraryNIR.12" },
  { id: 4, titleKey: "auto2.components.pages.libs.LibraryNIR.13", authorKey: "auto2.components.pages.libs.LibraryNIR.14", typeKey: "auto2.components.pages.libs.LibraryNIR.15", year: 2023, deptKey: "auto2.components.pages.libs.LibraryNIR.16" },
  { id: 5, titleKey: "auto2.components.pages.libs.LibraryNIR.17", authorKey: "auto2.components.pages.libs.LibraryNIR.18", typeKey: "auto2.components.pages.libs.LibraryNIR.19", year: 2023, deptKey: "auto2.components.pages.libs.LibraryNIR.20" },
  { id: 6, titleKey: "auto2.components.pages.libs.LibraryNIR.21", authorKey: "auto2.components.pages.libs.LibraryNIR.22", typeKey: "auto2.components.pages.libs.LibraryNIR.23", year: 2024, deptKey: "auto2.components.pages.libs.LibraryNIR.24" },
  { id: 7, titleKey: "auto2.components.pages.libs.LibraryNIR.25", authorKey: "auto2.components.pages.libs.LibraryNIR.26", typeKey: "auto2.components.pages.libs.LibraryNIR.27", year: 2024, deptKey: "auto2.components.pages.libs.LibraryNIR.28" },
  { id: 8, titleKey: "auto2.components.pages.libs.LibraryNIR.29", authorKey: "auto2.components.pages.libs.LibraryNIR.30", typeKey: "auto2.components.pages.libs.LibraryNIR.31", year: 2023, deptKey: "auto2.components.pages.libs.LibraryNIR.32" },
  { id: 9, titleKey: "auto2.components.pages.libs.LibraryNIR.33", authorKey: "auto2.components.pages.libs.LibraryNIR.34", typeKey: "auto2.components.pages.libs.LibraryNIR.35", year: 2023, deptKey: "auto2.components.pages.libs.LibraryNIR.36" },
  { id: 10, titleKey: "auto2.components.pages.libs.LibraryNIR.37", authorKey: "auto2.components.pages.libs.LibraryNIR.38", typeKey: "auto2.components.pages.libs.LibraryNIR.39", year: 2022, deptKey: "auto2.components.pages.libs.LibraryNIR.40" },
];

const typeKeys = [
  "auto2.components.pages.libs.LibraryNIR.46",
  "auto2.components.pages.libs.LibraryNIR.47",
  "auto2.components.pages.libs.LibraryNIR.48",
] as const;

const LibraryNIR = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<(typeof typeKeys)[number]>(typeKeys[0]);

  const filtered = works.filter((w) => {
    const matchType = activeType === typeKeys[0] || w.typeKey === activeType;
    const matchSearch =
      t(w.titleKey).toLowerCase().includes(search.toLowerCase()) ||
      t(w.authorKey).toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryNIR.43")}</h1>
        <p className="text-sm text-slate-500">
          {t("auto2.components.pages.libs.LibraryNIR.44")}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {}
        <div className="flex-1">
          <input
            type="text"
            placeholder={t("auto2.components.pages.libs.LibraryNIR.45")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-sinii transition-colors"
          />
        </div>
        {}
        <div className="flex gap-2">
          {typeKeys.map((typeKey) => (
            <button
              key={typeKey}
              onClick={() => setActiveType(typeKey)}
              className={`px-5 py-2 rounded-xl text-sm font-medium border transition-colors ${
                activeType === typeKey
                  ? "bg-sinii text-white border-sinii"
                  : "border-slate-300 text-slate-600 hover:border-sinii hover:text-sinii"
              }`}
            >
              {t(typeKey)}
            </button>
          ))}
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
            filtered.map((w) => (
              <li key={w.id} className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 leading-snug mb-1">{t(w.titleKey)}</p>
                  <p className="text-xs text-slate-500">{t(w.authorKey)} · {w.year}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 pt-0.5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    w.typeKey === "auto2.components.pages.libs.LibraryNIR.51"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-emerald-50 text-emerald-700"
                  }`}>
                    {t(w.typeKey)}
                  </span>
                  <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-1 rounded-full">{t(w.deptKey)}</span>
                  <button className="text-sm font-medium text-sinii hover:underline">→</button>
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
