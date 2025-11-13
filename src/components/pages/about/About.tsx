import aboutAgu from "@/assets/img/aboutAgu.png";
import aboutAgu1 from "@/assets/img/agu2.webp";
import LogoLp from "@/components/organisms/logoloop/LogoLp";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full">
        <div className="w-full flex flex-col justify-center gap-10">
          <img src={aboutAgu} alt="" />
          <h1 className="text-4xl w-2/3">{t("aboutAgu.title")}</h1>
          <p className="text-lg">{t("aboutAgu.lead")}</p>
          <img
            src={aboutAgu1}
            alt={t("aboutAgu.imageAlt")}
            className="h-96 rounded-lg object-cover"
            title={t("aboutAgu.imageAlt")}
          />
          <p>{t("aboutAgu.paragraphs1")}</p>
          <div className="w-full flex justify-between gap-4 text-white">
            <p className=" bg-sinii px-20 py-10 rounded-lg">
              {t("aboutAgu.cards.left")}
            </p>
            <p className=" bg-sinii px-20 py-10 rounded-lg">
              {t("aboutAgu.cards.right")}
            </p>
          </div>
          <p>{t("aboutAgu.paragraphs2")}</p>
          <p>{t("aboutAgu.paragraphs3")}</p>
          <p>{t("aboutAgu.paragraphs4")}</p>
          <div className="w-full shadow-lg rounded-md mt-5">
            <div className="w-11/12 mx-auto py-10 flex flex-col gap-10">
              <h2 className="text-3xl">{t("aboutAgu.mission.title")}</h2>
              <div className="w-full flex flex-col justify-between gap-10">
                <p>{t("aboutAgu.mission.descr1")}</p>
                <p>{t("aboutAgu.mission.descr2")}</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-3xl">{t("aboutAgu.partners")}</p>
            <LogoLp />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
