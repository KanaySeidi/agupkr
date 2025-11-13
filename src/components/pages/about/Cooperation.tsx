import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import coop from "@/assets/img/cooperation.png";
import coop1 from "@/assets/img/coop2.png";

const Cooperation = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full">
        <Line title={t("sidebar.cooperation")} />
        <div className="mt-10 flex flex-col gap-5">
          <h1 className="text-xl font-medium">{t("coop.intro")}</h1>
          <img src={coop} alt="" className="py-10" />

          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">{t("coop.directionsTitle")}:</p>
            <ul>
              <li>{t("coop.item1")}</li>
              <li>{t("coop.item2")}</li>
              <li>{t("coop.item3")}</li>
              <li>{t("coop.item4")}</li>
              <li>{t("coop.item5")}</li>
              <li>{t("coop.item6")}</li>
              <li>{t("coop.item7")}</li>
              <li>{t("coop.item8")}</li>
              <li>{t("coop.item9")}</li>
              <li>{t("coop.item10")}</li>
            </ul>
          </div>
          <img src={coop1} alt="" />
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">{t("coop.partnersTitle")}:</p>
            <ul>
              <li>{t("coop.item11")}</li>
              <li>{t("coop.item12")}</li>
              <li>{t("coop.item13")}</li>
              <li>{t("coop.item14")}</li>
              <li>{t("coop.item15")}</li>
              <li>{t("coop.item16")}</li>
              <li>{t("coop.item17")}</li>
              <li>{t("coop.item18")}</li>
              <li>{t("coop.item19")}</li>
              <li>{t("coop.item20")}</li>
              <li>{t("coop.item21")}</li>
              <li>{t("coop.item22")}</li>
              <li>{t("coop.item23")}</li>
              <li>{t("coop.item24")}</li>
              <li>{t("coop.item25")}</li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold">{t("coop.projectsTitle")}:</p>
            <ul>
              <li>{t("coop.item26")}</li>
              <li>{t("coop.item27")}</li>
              <li>{t("coop.item28")}</li>
              <li>{t("coop.item29")}</li>
              <li>{t("coop.item30")}</li>
            </ul>
          </div>
          <p className="text-2xl text-justify uppercase">
            {t("coop.conclusion")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Cooperation;
