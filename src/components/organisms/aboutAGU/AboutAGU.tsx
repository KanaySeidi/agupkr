import ArrowToTop from "@/components/atoms/ArrowToTop";
import CountUp from "@/components/ui/CountUp";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import uzor from "@/assets/img/uzor.svg";
import uzor2 from "@/assets/img/uzor-2.svg";

const GOLD = "#D0A858";
const BG = "#262B6C";

const AboutAGU = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="w-screen mt-8 sm:mt-10 my-10">
      <img
        src={uzor}
        className="w-full block mb-10"
        alt=""
        aria-hidden="true"
      />

      <div className="w-11/12 mx-auto rounded-2xl overflow-hidden">
        <div
          className="w-full relative overflow-hidden"
          style={{ backgroundColor: BG }}
        >
          <img
            src={uzor2}
            className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain pointer-events-none select-none opacity-90"
            alt=""
            aria-hidden="true"
          />

          <div className="w-11/12 mx-auto py-10 sm:py-14 lg:py-20 relative z-10">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-1 rounded-full"
                style={{ backgroundColor: GOLD }}
              />
              <p className="text-lg font-bold" style={{ color: GOLD }}>
                {t("AGU.title")}
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:gap-8 lg:gap-10 mt-6 sm:mt-8 lg:mt-10">
              <p className="text-xl sm:text-2xl lg:text-4xl w-full lg:w-3/4 leading-snug text-white font-bold">
                {t("AGU.subTitle")}
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/70 lg:w-3/4">
                {t("AGU.description1")}
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/70 lg:w-3/4">
                {t("AGU.description2")}
              </p>

              <button
                onClick={() => navigate("/about")}
                className="w-full sm:w-48 h-12 rounded-md bg-white text-sinii flex justify-center items-center uppercase font-semibold cursor-pointer  transition-colors gap-1"
              >
                {t("AGU.button")}
                <ArrowToTop width={26} height={26} color="#262B6C" />
              </button>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-white/15 rounded-xl overflow-hidden pt-4">
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
                    className={`flex flex-col gap-1.5 p-4 sm:p-6 ${
                      i % 2 === 1
                        ? "border-l-2 border-white/15 lg:border-l-0"
                        : ""
                    }`}
                  >
                    <span
                      className="font-semibold text-3xl sm:text-4xl lg:text-5xl"
                      style={{ color: GOLD }}
                    >
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
                    <p className="text-xs sm:text-sm lg:text-base text-white/60">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAGU;
