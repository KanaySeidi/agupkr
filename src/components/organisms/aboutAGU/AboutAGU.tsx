import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import CountUp from "@/components/CountUp";
import { useTranslation } from "react-i18next";

const AboutAGU = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-screen mt-10">
        <div className="w-11/12 mx-auto shadow-2xl rounded-md">
          <div className="w-11/12 mx-auto py-20">
            <div className="flex items-center gap-2">
              <Line />
              <p className="text-2xl">{t("AGU.title")}</p>
            </div>
            <div className="flex flex-col gap-10 mt-10">
              <p className="text-4xl w-3/4">{t("AGU.subTitle")}</p>
              <p className="text-xl text-[#4C4C4C]">{t("AGU.description1")}</p>
              <p className="text-xl text-[#4C4C4C]">{t("AGU.description2")}</p>
              <button className="w-full h-13 rounded-md border-2 border-sinii text-sinii flex justify-center items-center uppercase font-semibold cursor-pointer">
                {t("AGU.button")}
                <ArrowToTop width={30} height={30} />
              </button>
              <div className="w-full flex justify-between divide-x divide-gray-300">
                <div className="flex flex-col text-sinii gap-2 px-6">
                  <CountUp
                    from={0}
                    to={150}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text font-semibold text-5xl"
                  />
                  <p>{t("AGU.stats.teachers")}</p>
                </div>
                <div className="flex flex-col text-sinii gap-2 px-6">
                  <CountUp
                    from={0}
                    to={20}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text font-semibold text-5xl"
                  />
                  <p>{t("AGU.stats.doctors")}</p>
                </div>
                <div className="flex flex-col text-sinii gap-2 px-6">
                  <CountUp
                    from={0}
                    to={10000}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text font-semibold text-5xl"
                  />
                  <p>{t("AGU.stats.graduates")}</p>
                </div>
                <div className="flex flex-col text-sinii gap-2 px-6">
                  <CountUp
                    from={0}
                    to={65}
                    separator=","
                    direction="up"
                    duration={2}
                    className="count-up-text font-semibold text-5xl"
                  />
                  <p>{t("AGU.stats.success")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAGU;
