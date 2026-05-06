import aboutAgu from "@/assets/img/aboutAgu.png";
import aboutAgu1 from "@/assets/img/agu2.webp";
import LogoLp from "@/components/organisms/logoloop/LogoLp";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="w-full flex flex-col justify-center gap-6 sm:gap-10">
        <img src={aboutAgu} alt="" className="w-full object-cover rounded-lg" />
        <h1 className="text-xl sm:text-2xl lg:text-4xl w-full lg:w-2/3 leading-snug">
          {t("aboutAgu.title")}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg">{t("aboutAgu.lead")}</p>
        <img
          src={aboutAgu1}
          alt={t("aboutAgu.imageAlt")}
          className="w-full h-48 sm:h-64 md:h-96 rounded-lg object-cover"
          title={t("aboutAgu.imageAlt")}
        />
        <p className="text-sm sm:text-base">{t("aboutAgu.paragraphs1")}</p>

        {}
        <div className="w-full flex flex-col sm:flex-row gap-4 text-white">
          <p className="bg-sinii px-5 sm:px-10 md:px-16 py-6 sm:py-10 rounded-lg flex-1 text-sm sm:text-base">
            {t("aboutAgu.cards.left")}
          </p>
          <p className="bg-sinii px-5 sm:px-10 md:px-16 py-6 sm:py-10 rounded-lg flex-1 text-sm sm:text-base">
            {t("aboutAgu.cards.right")}
          </p>
        </div>

        <p className="text-sm sm:text-base">{t("aboutAgu.paragraphs2")}</p>
        <p className="text-sm sm:text-base">{t("aboutAgu.paragraphs3")}</p>
        <p className="text-sm sm:text-base">{t("aboutAgu.paragraphs4")}</p>

        {}
        <div className="w-full shadow-lg rounded-md">
          <div className="w-11/12 mx-auto py-8 sm:py-10 flex flex-col gap-5 sm:gap-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl">{t("aboutAgu.mission.title")}</h2>
            <div className="flex flex-col gap-4 sm:gap-6">
              <p className="text-sm sm:text-base">{t("aboutAgu.mission.descr1")}</p>
              <p className="text-sm sm:text-base">{t("aboutAgu.mission.descr2")}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4">{t("aboutAgu.partners")}</p>
          <LogoLp />
        </div>
      </div>
    </div>
  );
};

export default About;
