import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const programs = [
  {
    titleKey: "auto2.components.organisms.education.Education.1",
    descKey: "auto2.components.organisms.education.Education.2",
    path: "/education/doctor",
  },
  {
    titleKey: "auto2.components.organisms.education.Education.5",
    descKey: "auto2.components.organisms.education.Education.6",
    path: "/education/magistr",
  },
  {
    titleKey: "auto2.components.organisms.education.Education.7",
    descKey: "auto2.components.organisms.education.Education.8",
    path: "/education/bakalavr",
  },
  {
    titleKey: "auto2.components.organisms.education.Education.3",
    descKey: "auto2.components.organisms.education.Education.4",
    path: "/education/spo",
  },
];


const Education = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto my-8 sm:my-12 lg:my-20 flex flex-col gap-6 lg:gap-10">
        <Line title={t("auto2.components.organisms.education.Education.9")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {programs.map((p) => (
            <div
              key={p.path}
              className="flex flex-col justify-between gap-4 p-4 rounded-xl border border-slate-100 shadow-sm hover:border-sinii hover:shadow-md transition-all duration-200"
            >
              <div className="flex flex-col gap-2">
                <p className="text-base sm:text-lg font-semibold text-sinii">{t(p.titleKey)}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t(p.descKey)}</p>
              </div>
              <button
                onClick={() => navigate(p.path)}
                className="border border-gray-300 w-full flex justify-center items-center rounded-md py-2 hover:border-sinii hover:text-sinii transition-colors text-sm gap-1"
              >
                {t("auto2.components.organisms.education.Education.10")}<ArrowToTop width={20} height={20} color="currentColor" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
