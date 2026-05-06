import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Advanced = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col gap-8 sm:gap-10">
      <Line title={t("sidebar.advanced.about")} />
      <p className="text-justify leading-7 text-sm sm:text-base">{t("advanced.about")}</p>

      <div>
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-5">{t("advanced.title")}</p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 text-sinii">
          {[t("advanced.link1"), t("advanced.link2"), t("advanced.link3")].map((link) => (
            <div key={link} className="flex gap-2 items-center cursor-pointer font-semibold">
              <ArrowToTop width={18} height={18} />
              <p className="text-sm sm:text-base">{link}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-5">{t("advanced.title")}</p>
        <ul className="list-disc text-sinii cursor-pointer flex flex-col gap-2 sm:gap-3 ml-5 text-sm sm:text-base">
          {Array.from({ length: 12 }, (_, i) => (
            <li key={i}>{t(`advanced.item${i + 1}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advanced;
