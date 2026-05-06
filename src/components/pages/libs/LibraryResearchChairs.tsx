import { useTranslation } from "react-i18next";

const chairs = [
  {
    id: 1,
    titleKey: "auto2.components.pages.libs.LibraryResearchChairs.1",
    headKey: "auto2.components.pages.libs.LibraryResearchChairs.2",
    descKey: "auto2.components.pages.libs.LibraryResearchChairs.3",
    publications: 56,
    topicKeys: ["auto2.components.pages.libs.LibraryResearchChairs.4", "auto2.components.pages.libs.LibraryResearchChairs.5", "auto2.components.pages.libs.LibraryResearchChairs.6"],
  },
  {
    id: 2,
    titleKey: "auto2.components.pages.libs.LibraryResearchChairs.7",
    headKey: "auto2.components.pages.libs.LibraryResearchChairs.8",
    descKey: "auto2.components.pages.libs.LibraryResearchChairs.9",
    publications: 38,
    topicKeys: ["auto2.components.pages.libs.LibraryResearchChairs.10", "auto2.components.pages.libs.LibraryResearchChairs.11", "auto2.components.pages.libs.LibraryResearchChairs.12"],
  },
  {
    id: 3,
    titleKey: "auto2.components.pages.libs.LibraryResearchChairs.13",
    headKey: "auto2.components.pages.libs.LibraryResearchChairs.14",
    descKey: "auto2.components.pages.libs.LibraryResearchChairs.15",
    publications: 44,
    topicKeys: ["auto2.components.pages.libs.LibraryResearchChairs.16", "auto2.components.pages.libs.LibraryResearchChairs.17", "auto2.components.pages.libs.LibraryResearchChairs.18"],
  },
  {
    id: 4,
    titleKey: "auto2.components.pages.libs.LibraryResearchChairs.19",
    headKey: "auto2.components.pages.libs.LibraryResearchChairs.20",
    descKey: "auto2.components.pages.libs.LibraryResearchChairs.21",
    publications: 29,
    topicKeys: ["auto2.components.pages.libs.LibraryResearchChairs.22", "auto2.components.pages.libs.LibraryResearchChairs.23", "auto2.components.pages.libs.LibraryResearchChairs.24"],
  },
];


const LibraryResearchChairs = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">{t("auto2.components.pages.libs.LibraryResearchChairs.25")}</h1>
        <p className="text-sm text-slate-500">
          {t("auto2.components.pages.libs.LibraryResearchChairs.26")}</p>
      </div>

      <div className="flex flex-col gap-5">
        {chairs.map((chair) => (
          <div key={chair.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-sinii transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sinii text-base mb-0.5">{t(chair.titleKey)}</h3>
                <p className="text-xs text-slate-500 mb-3">{t("auto2.components.pages.libs.LibraryResearchChairs.27")}{t(chair.headKey)}</p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{t(chair.descKey)}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {chair.topicKeys.map((topicKey) => (
                    <span key={topicKey} className="text-xs bg-[#E5F0FF] text-sinii px-2.5 py-1 rounded-full">
                      {t(topicKey)}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {t("auto2.components.pages.libs.LibraryResearchChairs.28")}<span className="font-semibold text-sinii">{chair.publications}</span>
                  </span>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-sinii hover:underline">
                    {t("auto2.components.pages.libs.LibraryResearchChairs.29")}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryResearchChairs;
