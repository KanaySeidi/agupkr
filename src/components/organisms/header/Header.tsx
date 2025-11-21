import LanguageSwitcher from "@/components/molecules/LangSwitcher";
import logo from "@/assets/icon/Vector.svg";
import lng from "@/assets/icon/Icon.svg";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useNavLinks } from "@/utils/navLinks";

const Header = () => {
  const { t } = useTranslation();
  const navItem = useNavLinks();
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-40 fixed inset-x-0 top-0 z-20 backdrop-blur-md bg-white/70">
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
            <button
              onClick={() => navigate("/schedule")}
              className="bg-sinii w-32 h-12 flex justify-center items-center rounded-md hover:bg-hover-sinii cursor-pointer"
            >
              {t("header.schedule")}
            </button>
            <button className="bg-sinii w-52 h-12 flex justify-center items-center rounded-md hover:bg-hover-sinii cursor-pointer">
              {t("header.library")}
            </button>

            <div className="flex gap-1 items-center">
              <img src={lng} alt="lng icon" />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="w-full h-12  border-b-2">
          <div className="w-10/12 mx-auto h-full flex items-center">
            <ul className="flex w-full justify-between items-center">
              {navItem.map((item) => (
                <Link to={item.path} key={item.id}>
                  <li
                    className={`${
                      localStorage.getItem("language") === "ky"
                        ? "text-sm"
                        : "text-base"
                    } font-medium text-black uppercase hover:text-blue-400 cursor-pointer`}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
