import kafedraEM from "@/assets/img/kafedraEM.png";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const EduKafedBP = () => {
  type StaffMember = {
    nameKey: string;
    titleKey?: string;
    resumeUrl?: string;
  };

  const { t } = useTranslation();

  const STAFF: StaffMember[] = [
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.1",
      titleKey: "auto2.components.pages.education.EduKafedBP.2",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.3",
      titleKey: "auto2.components.pages.education.EduKafedBP.4",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.5",
      titleKey: "auto2.components.pages.education.EduKafedBP.6",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.7",
      titleKey: "auto2.components.pages.education.EduKafedBP.8",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.9",
      titleKey: "auto2.components.pages.education.EduKafedBP.10",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.11",
      titleKey: "auto2.components.pages.education.EduKafedBP.12",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.13",
      titleKey: "auto2.components.pages.education.EduKafedBP.14",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.15",
      titleKey: "auto2.components.pages.education.EduKafedBP.16",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.17",
      titleKey: "auto2.components.pages.education.EduKafedBP.18",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.19",
      titleKey: "auto2.components.pages.education.EduKafedBP.20",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.21",
      titleKey: "auto2.components.pages.education.EduKafedBP.22",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.23",
      titleKey: "auto2.components.pages.education.EduKafedBP.24",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.25",
      titleKey: "auto2.components.pages.education.EduKafedBP.26",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.27",
      titleKey: "auto2.components.pages.education.EduKafedBP.28",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.29",
      titleKey: "auto2.components.pages.education.EduKafedBP.30",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.31",
      titleKey: "auto2.components.pages.education.EduKafedBP.32",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.33",
      titleKey: "auto2.components.pages.education.EduKafedBP.34",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.35",
      titleKey: "auto2.components.pages.education.EduKafedBP.36",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.37",
      titleKey: "auto2.components.pages.education.EduKafedBP.38",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.39",
      titleKey: "auto2.components.pages.education.EduKafedBP.40",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.41",
      titleKey: "auto2.components.pages.education.EduKafedBP.42",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      nameKey: "auto2.components.pages.education.EduKafedBP.43",
      titleKey: "auto2.components.pages.education.EduKafedBP.44",
      resumeUrl: "/mnt/data/121212.png",
    },
  ];

  return (
    <>
      <section className="w-11/12 mx-auto p-6 rounded-2xl shadow-md space-y-6">
        <Line title={t("sidebar.education.kafedbp")} />
        <div>
          <h3 className="text-3xl font-bold text-sinii mt-5 mb-2">
            {t("auto.components.pages.education.EduKafedBP.1")}</h3>

          <p className="text-slate-700 leading-relaxed">
            {t("auto.components.pages.education.EduKafedBP.2")}</p>

          <h3 className="text-xl font-semibold text-sinii mt-5 mb-2">
            {t("auto.components.pages.education.EduKafedBP.3")}</h3>
          <p className="text-slate-700 leading-relaxed">
            {t("auto.components.pages.education.EduKafedBP.4")}</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-sinii mb-3">
            {t("auto.components.pages.education.EduKafedBP.5")}</h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>
              {t("auto.components.pages.education.EduKafedBP.6")}</li>
            <li>
              {t("auto.components.pages.education.EduKafedBP.7")}</li>
            <li>
              {t("auto.components.pages.education.EduKafedBP.8")}</li>
            <li>
              {t("auto.components.pages.education.EduKafedBP.9")}</li>
            <li>
              {t("auto.components.pages.education.EduKafedBP.10")}</li>
            <li>
              {t("auto.components.pages.education.EduKafedBP.11")}</li>
            <li>
              {t("auto.components.pages.education.EduKafedBP.12")}</li>
            <li>
              {t("auto.components.pages.education.EduKafedBP.13")}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-sinii mb-3">{t("auto.components.pages.education.EduKafedBP.14")}</h3>
          <p>
            {t("auto.components.pages.education.EduKafedBP.15")}</p>
          <img
            src={kafedraEM}
            alt={t("auto.components.pages.education.EduKafedBP.16")}
            className="w-full h-full object-contain my-5"
          />
        </div>
        <div className="rounded-2xl shadow-md space-y-4 p-10">
          <h3 className="text-xl font-semibold text-sky-800">
            {t("auto.components.pages.education.EduKafedBP.17")}</h3>

          <ul className="grid gap-3">
            {STAFF.map((s) => (
              <li
                key={s.nameKey}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50"
              >
                <div>
                  <div className="font-medium text-slate-900">{t(s.nameKey)}</div>
                  {s.titleKey && (
                    <div className="text-sm text-slate-600">{t(s.titleKey)}</div>
                  )}
                </div>

                <a
                  href={s.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-sinii text-sinii hover:bg-sky-50"
                >
                  {t("auto.components.pages.education.EduKafedBP.18")}<ArrowToTop width={20} height={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md space-y-4 mt-6">
          <h3 className="text-2xl font-bold text-sinii">
            {t("auto.components.pages.education.EduKafedBP.19")}</h3>

          <p className="text-slate-700 leading-relaxed">
            {t("auto.components.pages.education.EduKafedBP.20")}{" "}
            <span className="font-semibold">{t("auto.components.pages.education.EduKafedBP.21")}</span> {t("auto.components.pages.education.EduKafedBP.22")}{" "}
            <span className="font-semibold">{t("auto.components.pages.education.EduKafedBP.23")}</span>{" "}
            {t("auto.components.pages.education.EduKafedBP.24")}</p>

          <div>
            <h4 className="text-xl font-semibold text-sky-700 mb-2">
              {t("auto.components.pages.education.EduKafedBP.25")}</h4>

            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>{t("auto.components.pages.education.EduKafedBP.26")}</li>
              <li>{t("auto.components.pages.education.EduKafedBP.27")}</li>
              <li>{t("auto.components.pages.education.EduKafedBP.28")}</li>
              <li>{t("auto.components.pages.education.EduKafedBP.29")}</li>
              <li>{t("auto.components.pages.education.EduKafedBP.30")}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-sky-700 mb-2">
              {t("auto.components.pages.education.EduKafedBP.31")}</h4>

            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>{t("auto.components.pages.education.EduKafedBP.32")}</li>
              <li>{t("auto.components.pages.education.EduKafedBP.33")}</li>
              <li>{t("auto.components.pages.education.EduKafedBP.34")}</li>
              <li>{t("auto.components.pages.education.EduKafedBP.35")}</li>
              <li>{t("auto.components.pages.education.EduKafedBP.36")}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default EduKafedBP;
