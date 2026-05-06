import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const sections = [
  { titleKey: "auto2.components.pages.libs.Library.1", descKey: "auto2.components.pages.libs.Library.2", countKey: "auto2.components.pages.libs.Library.3", path: "/library/new-arrive" },
  { titleKey: "auto2.components.pages.libs.Library.4", descKey: "auto2.components.pages.libs.Library.5", countKey: "auto2.components.pages.libs.Library.6", path: "/library/journals" },
  { titleKey: "auto2.components.pages.libs.Library.7", descKey: "auto2.components.pages.libs.Library.8", countKey: "auto2.components.pages.libs.Library.9", path: "/library/e-book" },
  { titleKey: "auto2.components.pages.libs.Library.10", descKey: "auto2.components.pages.libs.Library.11", countKey: "auto2.components.pages.libs.Library.12", path: "/library/research" },
  { titleKey: "auto2.components.pages.libs.Library.13", descKey: "auto2.components.pages.libs.Library.14", countKey: "auto2.components.pages.libs.Library.15", path: "/library/samd" },
  { titleKey: "auto2.components.pages.libs.Library.16", descKey: "auto2.components.pages.libs.Library.17", countKey: "auto2.components.pages.libs.Library.18", path: "/library/nir" },
];


const Library = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sinii mb-2">{t("auto2.components.pages.libs.Library.19")}</h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          {t("auto2.components.pages.libs.Library.20")}</p>
      </div>

      {}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { labelKey: "auto2.components.pages.libs.Library.21", value: "340+" },
          { labelKey: "auto2.components.pages.libs.Library.22", value: "18" },
          { labelKey: "auto2.components.pages.libs.Library.23", value: "120+" },
        ].map((s) => (
          <div key={s.labelKey} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-sinii">{s.value}</p>
            <p className="text-sm text-slate-500 mt-1">{t(s.labelKey)}</p>
          </div>
        ))}
      </div>

      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((sec) => (
          <div
            key={sec.path}
            onClick={() => navigate(sec.path)}
            className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-sinii transition-all duration-200 flex flex-col gap-2"
          >
            <h3 className="font-semibold text-sinii text-base">{t(sec.titleKey)}</h3>
            <p className="text-sm text-slate-500 leading-snug flex-1">{t(sec.descKey)}</p>
            <span className="text-xs font-medium text-slate-400 mt-2">{t(sec.countKey)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
