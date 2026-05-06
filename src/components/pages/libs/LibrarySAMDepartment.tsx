import { useTranslation } from "react-i18next";

const publications = [
  { id: 1, titleKey: "auto2.components.pages.libs.LibrarySAMDepartment.1", authorKey: "auto2.components.pages.libs.LibrarySAMDepartment.2", year: 2024, typeKey: "auto2.components.pages.libs.LibrarySAMDepartment.3", color: "bg-blue-50 text-blue-700" },
  { id: 2, titleKey: "auto2.components.pages.libs.LibrarySAMDepartment.4", authorKey: "auto2.components.pages.libs.LibrarySAMDepartment.5", year: 2024, typeKey: "auto2.components.pages.libs.LibrarySAMDepartment.6", color: "bg-emerald-50 text-emerald-700" },
  { id: 3, titleKey: "auto2.components.pages.libs.LibrarySAMDepartment.7", authorKey: "auto2.components.pages.libs.LibrarySAMDepartment.8", year: 2023, typeKey: "auto2.components.pages.libs.LibrarySAMDepartment.9", color: "bg-amber-50 text-amber-700" },
  { id: 4, titleKey: "auto2.components.pages.libs.LibrarySAMDepartment.10", authorKey: "auto2.components.pages.libs.LibrarySAMDepartment.11", year: 2023, typeKey: "auto2.components.pages.libs.LibrarySAMDepartment.12", color: "bg-emerald-50 text-emerald-700" },
  { id: 5, titleKey: "auto2.components.pages.libs.LibrarySAMDepartment.13", authorKey: "auto2.components.pages.libs.LibrarySAMDepartment.14", year: 2023, typeKey: "auto2.components.pages.libs.LibrarySAMDepartment.15", color: "bg-blue-50 text-blue-700" },
  { id: 6, titleKey: "auto2.components.pages.libs.LibrarySAMDepartment.16", authorKey: "auto2.components.pages.libs.LibrarySAMDepartment.17", year: 2022, typeKey: "auto2.components.pages.libs.LibrarySAMDepartment.18", color: "bg-amber-50 text-amber-700" },
];

const staff = [
  { nameKey: "auto2.components.pages.libs.LibrarySAMDepartment.19", roleKey: "auto2.components.pages.libs.LibrarySAMDepartment.20" },
  { nameKey: "auto2.components.pages.libs.LibrarySAMDepartment.21", roleKey: "auto2.components.pages.libs.LibrarySAMDepartment.22" },
  { nameKey: "auto2.components.pages.libs.LibrarySAMDepartment.23", roleKey: "auto2.components.pages.libs.LibrarySAMDepartment.24" },
  { nameKey: "auto2.components.pages.libs.LibrarySAMDepartment.25", roleKey: "auto2.components.pages.libs.LibrarySAMDepartment.26" },
];


const LibrarySAMDepartment = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">
          {t("auto2.components.pages.libs.LibrarySAMDepartment.27")}</h1>
        <p className="text-sm text-slate-500">
          {t("auto2.components.pages.libs.LibrarySAMDepartment.28")}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-sinii mb-3">{t("auto2.components.pages.libs.LibrarySAMDepartment.29")}</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            {t("auto2.components.pages.libs.LibrarySAMDepartment.30")}</p>
          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            {t("auto2.components.pages.libs.LibrarySAMDepartment.31")}</p>
        </div>

        {}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-sinii mb-3">{t("auto2.components.pages.libs.LibrarySAMDepartment.32")}</h2>
          <ul className="flex flex-col gap-3">
            {staff.map((s) => (
              <li key={s.nameKey} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <p className="text-sm font-medium text-slate-800">{t(s.nameKey)}</p>
                <p className="text-xs text-slate-500 mt-0.5">{t(s.roleKey)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-sinii">{t("auto2.components.pages.libs.LibrarySAMDepartment.33")}</h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {publications.map((pub) => (
            <li key={pub.id} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 leading-snug mb-1">{t(pub.titleKey)}</p>
                <p className="text-xs text-slate-500">{t(pub.authorKey)} · {pub.year}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${pub.color}`}>
                  {t(pub.typeKey)}
                </span>
                <button className="text-sm font-medium text-sinii hover:underline">→</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibrarySAMDepartment;
