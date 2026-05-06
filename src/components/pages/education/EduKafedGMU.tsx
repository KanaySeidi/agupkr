import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const EduKafedGMU = () => {
  type StaffMember = { nameKey: string; titleKey?: string };
  const { t } = useTranslation();

  const STAFF: StaffMember[] = [
    { nameKey: "auto2.components.pages.education.EduKafedGMU.1", titleKey: "auto2.components.pages.education.EduKafedGMU.2" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.3", titleKey: "auto2.components.pages.education.EduKafedGMU.4" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.5", titleKey: "auto2.components.pages.education.EduKafedGMU.6" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.7", titleKey: "auto2.components.pages.education.EduKafedGMU.8" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.9", titleKey: "auto2.components.pages.education.EduKafedGMU.10" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.11", titleKey: "auto2.components.pages.education.EduKafedGMU.12" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.13", titleKey: "auto2.components.pages.education.EduKafedGMU.14" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.15", titleKey: "auto2.components.pages.education.EduKafedGMU.16" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.17", titleKey: "auto2.components.pages.education.EduKafedGMU.18" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.19", titleKey: "auto2.components.pages.education.EduKafedGMU.20" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.21", titleKey: "auto2.components.pages.education.EduKafedGMU.22" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.23", titleKey: "auto2.components.pages.education.EduKafedGMU.24" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.25", titleKey: "auto2.components.pages.education.EduKafedGMU.26" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.27", titleKey: "auto2.components.pages.education.EduKafedGMU.28" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.29", titleKey: "auto2.components.pages.education.EduKafedGMU.30" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.31", titleKey: "auto2.components.pages.education.EduKafedGMU.32" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.33", titleKey: "auto2.components.pages.education.EduKafedGMU.34" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.35", titleKey: "auto2.components.pages.education.EduKafedGMU.36" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.37", titleKey: "auto2.components.pages.education.EduKafedGMU.38" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.39", titleKey: "auto2.components.pages.education.EduKafedGMU.40" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.41", titleKey: "auto2.components.pages.education.EduKafedGMU.42" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.43", titleKey: "auto2.components.pages.education.EduKafedGMU.44" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.45", titleKey: "auto2.components.pages.education.EduKafedGMU.46" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.47", titleKey: "auto2.components.pages.education.EduKafedGMU.48" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.49", titleKey: "auto2.components.pages.education.EduKafedGMU.50" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.51", titleKey: "auto2.components.pages.education.EduKafedGMU.52" },
    {
      nameKey: "auto2.components.pages.education.EduKafedGMU.53",
      titleKey: "auto2.components.pages.education.EduKafedGMU.54",
    },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.55", titleKey: "auto2.components.pages.education.EduKafedGMU.56" },
    { nameKey: "auto2.components.pages.education.EduKafedGMU.57", titleKey: "auto2.components.pages.education.EduKafedGMU.58" },
  ];

  return (
    <>
      <main className="w-full">
        <header className="mb-8">
          <div>
            <Line title={t("sidebar.education.kafedgmu")} />

            <p className="text-slate-700 max-w-3xl mt-5">
              {t("auto.components.pages.education.EduKafedGMU.1")}</p>
          </div>
        </header>

        {/* Sections */}
        <div className="space-y-4">
          {/* Mission */}
          <div title={t("auto.components.pages.education.EduKafedGMU.2")}>
            <p>
              {t("auto.components.pages.education.EduKafedGMU.3")}</p>
          </div>

          {/* Priorities */}
          <div title={t("auto.components.pages.education.EduKafedGMU.4")}>
            <p>
              {t("auto.components.pages.education.EduKafedGMU.5")}</p>
          </div>

          {/* Strategy */}
          <div title={t("auto.components.pages.education.EduKafedGMU.6")}>
            <p>
              {t("auto.components.pages.education.EduKafedGMU.7")}</p>
          </div>

          {/* Activities */}
          <div title={t("auto.components.pages.education.EduKafedGMU.8")}>
            <ul>
              <li>{t("auto.components.pages.education.EduKafedGMU.9")}</li>
              <li>{t("auto.components.pages.education.EduKafedGMU.10")}</li>
              <li>{t("auto.components.pages.education.EduKafedGMU.11")}</li>
              <li>{t("auto.components.pages.education.EduKafedGMU.12")}</li>
            </ul>
          </div>

          {}
          <div title={t("auto.components.pages.education.EduKafedGMU.13")}>
            <div className="grid gap-2 sm:grid-cols-2">
              {STAFF.map((s) => (
                <div
                  key={s.nameKey}
                  className="p-3 rounded-lg bg-white border border-slate-200"
                >
                  <div className="font-medium text-slate-900">{t(s.nameKey)}</div>
                  {s.titleKey && (
                    <div className="text-xs text-slate-600 mt-1">{t(s.titleKey)}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div title={t("auto.components.pages.education.EduKafedGMU.14")}>
            <p>
              {t("auto.components.pages.education.EduKafedGMU.15")}{" "}
              <strong>
                {t("auto.components.pages.education.EduKafedGMU.16")}</strong>
              {t("auto.components.pages.education.EduKafedGMU.17")}</p>

            <ul className="mt-2">
              <li>{t("auto.components.pages.education.EduKafedGMU.18")}</li>
              <li>
                {t("auto.components.pages.education.EduKafedGMU.19")}</li>
              <li>{t("auto.components.pages.education.EduKafedGMU.20")}</li>
              <li>{t("auto.components.pages.education.EduKafedGMU.21")}</li>
              <li>{t("auto.components.pages.education.EduKafedGMU.22")}</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default EduKafedGMU;
