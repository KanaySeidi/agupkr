import logo from "@/assets/icon/fLogo.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const lng = localStorage.getItem("language");

  return (
    <>
      <div className="w-screen h-96 bg-sinii py-10">
        <div className="w-11/12 mx-auto h-full">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img src={logo} className="size-40" alt="" />
              {lng === "ky" ? (
                <div className="text-white ">
                  <p className="text-sm uppercase tracking-tighter text-white/70">
                    {t("header.line7")}
                  </p>
                  <p className="text-sm uppercase tracking-tighter text-white/70">
                    {t("header.line8")}
                  </p>
                  <h3 className="text-2xl uppercase">{t("header.line4")}</h3>
                  <h3 className="text-2xl uppercase">{t("header.line5")}</h3>
                  <h3 className="text-2xl uppercase">{t("header.line6")}</h3>
                </div>
              ) : (
                <div className="text-white ">
                  <h3 className="text-2xl uppercase">{t("header.line4")}</h3>
                  <h3 className="text-2xl uppercase">{t("header.line5")}</h3>
                  <h3 className="text-2xl uppercase">{t("header.line6")}</h3>
                  <p className="text-sm uppercase tracking-tighter text-white/70">
                    {t("header.line7")}
                  </p>
                  <p className="text-sm uppercase tracking-tighter text-white/70">
                    {t("header.line8")}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col text-white gap-2">
              <p className="text-white/40">Адрес Академии</p>
              <p>Кыргызская республика, 720040</p>
              <p>г.Бишкек, ул. Панфилова, 237</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
