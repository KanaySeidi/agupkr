import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Advanced = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-11/12 mx-auto flex flex-col gap-10">
        <Line title={t("sidebar.advanced.about")} />
        <p className="text-justify leading-7">{t("advanced.about")}</p>
        <div>
          <p className="text-3xl mb-5">{t("advanced.title")}</p>
          <div className="w-full flex justify-between text-sinii">
            <div className="flex gap-2 items-center cursor-pointer font-semibold">
              <ArrowToTop width={20} height={20} />
              <p>{t("advanced.link1")}</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer font-semibold">
              <ArrowToTop width={20} height={20} />
              <p>{t("advanced.link2")}</p>
            </div>
            <div className="flex gap-2 items-center cursor-pointer font-semibold">
              <ArrowToTop width={20} height={20} />
              <p>{t("advanced.link3")}</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-3xl mb-5">{t("advanced.title")}</p>
          <ul className="list-disc text-sinii cursor-pointer flex flex-col gap-3 ml-5">
            <li>{t("advanced.item1")}</li>
            <li>{t("advanced.item2")}</li>
            <li>{t("advanced.item3")}</li>
            <li>{t("advanced.item4")}</li>
            <li>{t("advanced.item5")}</li>
            <li>{t("advanced.item6")}</li>
            <li>{t("advanced.item7")}</li>
            <li>{t("advanced.item8")}</li>
            <li>{t("advanced.item9")}</li>
            <li>{t("advanced.item10")}</li>
            <li>{t("advanced.item11")}</li>
            <li>{t("advanced.item12")}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Advanced;
