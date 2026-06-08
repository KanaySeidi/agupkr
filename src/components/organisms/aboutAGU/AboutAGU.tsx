import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import CountUp from "@/components/ui/CountUp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AboutAGU = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-screen mt-8 sm:mt-10">
      <div className="w-11/12 mx-auto py-10 sm:py-14 lg:py-20">
        <Line title={t("AGU.title")} />
        <div className="flex flex-col gap-5 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 lg:mt-10">
          <p className="text-xl sm:text-2xl lg:text-4xl w-full lg:w-3/4 leading-snug">
            {t("AGU.subTitle")}
          </p>
          <p className="text-sm sm:text-base lg:text-xl text-[#4C4C4C]">
            {t("AGU.description1")}
          </p>
          <p className="text-sm sm:text-base lg:text-xl text-[#4C4C4C]">
            {t("AGU.description2")}
          </p>

          <button
            onClick={() => navigate("/about")}
            className="w-full h-12 rounded-md border-2 border-sinii text-sinii flex justify-center items-center uppercase font-semibold cursor-pointer hover:bg-sinii hover:text-white transition-colors gap-1"
          >
            {t("AGU.button")}
            <ArrowToTop width={26} height={26} />
          </button>

          {}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-gray-200 rounded-xl overflow-hidden">
            {[
              {
                to: 150,
                suffix: "+",
                label: t("AGU.stats.teachers"),
                duration: 2,
              },
              {
                to: 20,
                suffix: "",
                label: t("AGU.stats.doctors"),
                duration: 2,
              },
              {
                to: 10000,
                suffix: "",
                label: t("AGU.stats.graduates"),
                duration: 1,
              },
              {
                to: 65,
                suffix: "%",
                label: t("AGU.stats.success"),
                duration: 2,
              },
            ].map((s, i) => (
              <div
                key={i}
                className={`flex flex-col text-sinii gap-1.5 p-4 sm:p-6 ${
                  i % 2 === 1 ? "border-l-2 border-gray-200 lg:border-l-0" : ""
                }`}
              >
                <span className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
                  <CountUp
                    from={0}
                    to={s.to}
                    separator=","
                    direction="up"
                    duration={s.duration}
                    className="count-up-text"
                  />
                  {s.suffix && (
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                      {s.suffix}
                    </span>
                  )}
                </span>
                <p className="text-xs sm:text-sm lg:text-base text-slate-600">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAGU;
