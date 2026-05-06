import { useTranslation } from "react-i18next";

const journals = [
  { id: 1, titleKey: "auto2.components.pages.libs.LibraryJournals.1", fieldKey: "auto2.components.pages.libs.LibraryJournals.2", issn: "1694-5239", freqKey: "auto2.components.pages.libs.LibraryJournals.3", access: true },
  { id: 2, titleKey: "auto2.components.pages.libs.LibraryJournals.4", fieldKey: "auto2.components.pages.libs.LibraryJournals.5", issn: "2072-8557", freqKey: "auto2.components.pages.libs.LibraryJournals.6", access: true },
  { id: 3, titleKey: "auto2.components.pages.libs.LibraryJournals.7", fieldKey: "auto2.components.pages.libs.LibraryJournals.8", issn: "2220-4873", freqKey: "auto2.components.pages.libs.LibraryJournals.9", access: true },
  { id: 4, titleKey: "auto2.components.pages.libs.LibraryJournals.10", fieldKey: "auto2.components.pages.libs.LibraryJournals.11", issn: "1818-2682", freqKey: "auto2.components.pages.libs.LibraryJournals.12", access: true },
  { id: 5, titleKey: "auto2.components.pages.libs.LibraryJournals.13", fieldKey: "auto2.components.pages.libs.LibraryJournals.14", issn: "1999-5431", freqKey: "auto2.components.pages.libs.LibraryJournals.15", access: false },
  { id: 6, titleKey: "auto2.components.pages.libs.LibraryJournals.16", fieldKey: "auto2.components.pages.libs.LibraryJournals.17", issn: "2070-8378", freqKey: "auto2.components.pages.libs.LibraryJournals.18", access: false },
  { id: 7, titleKey: "auto2.components.pages.libs.LibraryJournals.19", fieldKey: "auto2.components.pages.libs.LibraryJournals.20", issn: "1605-6590", freqKey: "auto2.components.pages.libs.LibraryJournals.21", access: false },
  { id: 8, titleKey: "auto2.components.pages.libs.LibraryJournals.22", fieldKey: "auto2.components.pages.libs.LibraryJournals.23", issn: "2311-8709", freqKey: "auto2.components.pages.libs.LibraryJournals.24", access: false },
  { id: 9, titleKey: "auto2.components.pages.libs.LibraryJournals.25", fieldKey: "auto2.components.pages.libs.LibraryJournals.26", issn: "1814-1196", freqKey: "auto2.components.pages.libs.LibraryJournals.27", access: true },
];


const LibraryJournals = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryJournals.28")}</h1>
        <p className="text-sm text-slate-500">{t("auto2.components.pages.libs.LibraryJournals.29")}</p>
      </div>

      <div className="flex gap-3 mb-5">
        <span className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> {t("auto2.components.pages.libs.LibraryJournals.30")}</span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" /> {t("auto2.components.pages.libs.LibraryJournals.31")}</span>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t("auto2.components.pages.libs.LibraryJournals.32")}</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">{t("auto2.components.pages.libs.LibraryJournals.33")}</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">{t("common.issn")}</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">{t("auto2.components.pages.libs.LibraryJournals.34")}</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t("auto2.components.pages.libs.LibraryJournals.35")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {journals.map((j) => (
              <tr key={j.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3.5">
                  <p className="font-medium text-slate-800 leading-snug">{t(j.titleKey)}</p>
                </td>
                <td className="px-4 py-3.5 hidden md:table-cell">
                  <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full">{t(j.fieldKey)}</span>
                </td>
                <td className="px-4 py-3.5 text-slate-500 text-xs hidden lg:table-cell">{j.issn}</td>
                <td className="px-4 py-3.5 text-slate-500 text-xs hidden lg:table-cell">{t(j.freqKey)}</td>
                <td className="px-4 py-3.5 text-center">
                  {j.access ? (
                    <button className="inline-flex items-center gap-1 text-xs font-medium text-sinii hover:underline">
                      {t("auto2.components.pages.libs.LibraryJournals.36")}</button>
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
