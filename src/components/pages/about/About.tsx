import LogoLp from "@/components/organisms/logoloop/LogoLp";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/img/aboutagupage.svg";
import goldenIcons from "@/assets/img/golden-icons.svg";
import goldenUzor2 from "@/assets/img/golden-uzor-2.svg";
import aguGolden from "@/assets/img/agu-golden.svg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col gap-10 sm:gap-14">
      {/* Hero */}
      <div className="w-full rounded-2xl overflow-hidden">
        <img src={heroImg} alt="" className="w-full object-cover" />
      </div>

      {/* Title + paragraphs */}
      <div className="flex flex-col gap-5 sm:gap-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
          {t("aboutAgu.title")}
        </h2>
        <p className="text-sm sm:text-base lg:text-xl text-[#4C4C4C]">
          {t("aboutAgu.lead")}
        </p>
        <div className="bg-sinii rounded-4xl flex flex-col justify-between items-center gap-5 py-10">
          <img src={goldenIcons} className="w-[700px]" />
          <div className="w-10/12 mx-auto flex flex-col gap-5 text-white">
            <p className="text-2xl text-center">{t("aboutAgu.paragraphs1")}</p>
            <p className="text-base text-center">{t("aboutAgu.paragraphs5")}</p>
          </div>
        </div>
        <p className="text-sm sm:text-base text-justify">
          {t("aboutAgu.paragraphs2")}
        </p>

        <p className="text-sm sm:text-base text-justify text-[#4C4C4C]">
          {t("aboutAgu.paragraphs3")}
        </p>
        <p className="text-sm sm:text-base text-justify text-[#4C4C4C]">
          {t("aboutAgu.paragraphs4")}
        </p>
      </div>

      {/* Mission */}
      <div className="relative rounded-2xl overflow-hidden h-[500px] p-10 sm:p-10 flex flex-col justify-center gap-5 bg-sinii">
        <img
          src={goldenUzor2}
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain pointer-events-none select-none"
          alt=""
          aria-hidden="true"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative z-10">
          {t("aboutAgu.mission.title")}
        </h2>
        <div className="w-[600px] flex flex-col gap-10">
          <p className="text-sm sm:text-base text-white/80 relative z-10">
            {t("aboutAgu.mission.descr1")}
          </p>
          <p className="text-sm sm:text-base text-white/80 relative z-10">
            {t("aboutAgu.mission.descr2")}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <img src={aguGolden} alt="" />
        <p className="text-sinii text-justify">{t("aboutAgu.paragraphs6")}</p>
      </div>
      {/* Partners */}
      <div>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          {t("aboutAgu.partners")}
        </p>
        <LogoLp />
      </div>
    </div>
  );
};

export default About;
