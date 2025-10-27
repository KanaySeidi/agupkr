import LanguageSwitcher from "@/components/molecules/LangSwitcher";
import logo from "@/assets/icon/Vector.svg";
import lng from "@/assets/icon/Icon.svg";
import { useTranslation } from "react-i18next";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-screen">
        <div className="w-11/12 mx-auto py-2 flex justify-between items-center">
          <div className="flex items-center">
            <img className="size-20" src={logo} alt="logo" />
            <div className=" uppercase text-sinii font-bold">
              <p className="">{t("header.line1")}</p>
              <p>{t("header.line2")}</p>
              <p>{t("header.line3")}</p>
            </div>
          </div>
          <div className="text-white flex items-center gap-2 cursor-pointer">
            <button
              onClick={() => window.open("https://avn.apap.kg/")}
              className="bg-sinii w-32 h-12 flex justify-center items-center rounded-md hover:bg-hover-sinii cursor-pointer"
            >
              {t("header.avn")}
            </button>
            <button className="bg-sinii w-32 h-12 flex justify-center items-center rounded-md hover:bg-hover-sinii cursor-pointer">
              {t("header.schedule")}
            </button>
            <button className="bg-sinii w-52 h-12 flex justify-center items-center rounded-md hover:bg-hover-sinii cursor-pointer">
              {t("header.library")}
            </button>

            <div className="flex gap-1 itemce-center">
              <img src={lng} alt="lng icon" />
              <LanguageSwitcher />
            </div>
          </div>
        </div>
        <div className="w-full h-12 shadow-2xl">
          <div
            className={` ${
              localStorage.getItem("language") === "ky"
                ? "text-sm"
                : "text-base"
            } w-10/12 mx-auto h-full flex justify-between items-center border-t border-gray-200`}
          >
            <p className="block font-medium text-black uppercase hover:text-blue-400 cursor-pointer">
              {t("header.navs.nav1")}
            </p>
            <Popover>
              <PopoverButton className="block  text-black uppercase font-medium focus:outline-none data-active:text-primary data-focus:outline data-focus:outline-primary data-hover:text-primary cursor-pointer">
                {t("header.navs.nav2")}
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="divide-y divide-blue-400 rounded-xl bg-primary text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
              >
                <div className="p-3">
                  <p className="font-semibold text-white block rounded-lg px-3 py-2 transition hover:hover-primary cursor-pointer">
                    Insights
                  </p>
                </div>
              </PopoverPanel>
            </Popover>
            <p className="block font-medium text-black uppercase hover:text-sinii cursor-pointer">
              {t("header.navs.nav3")}
            </p>
            <p className="block font-medium text-black uppercase hover:text-sinii cursor-pointer">
              {t("header.navs.nav4")}
            </p>
            <p className="block font-medium text-black uppercase hover:text-sinii cursor-pointer">
              {t("header.navs.nav5")}
            </p>
            <p className="block font-medium text-black uppercase hover:text-sinii cursor-pointer">
              {t("header.navs.nav6")}
            </p>
            <p className="block font-medium text-black uppercase hover:text-sinii cursor-pointer">
              {t("header.navs.nav7")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
