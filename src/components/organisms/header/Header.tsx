import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { House, SquareChevronLeft, SquareChevronRight } from "lucide-react";
import LanguageSwitcher from "@/components/molecules/LangSwitcher";
import logo from "@/assets/icon/Vector.svg";
import lng from "@/assets/icon/Icon.svg";
import {
  headerShortcutConfig,
  getRouteTitleKey,
} from "@/config/siteNavigation";
import { useNavLinks } from "@/utils/navLinks";

const LOGO_H_FULL = 112;
const LOGO_H_COMPACT = 60;
const NAV_H = 48;
const CRUMB_H = 64;

function getHeaderH(isHome: boolean, scrolled: boolean) {
  const logoRow = scrolled ? LOGO_H_COMPACT : LOGO_H_FULL;
  const crumbRow = isHome ? 0 : CRUMB_H;
  return logoRow + NAV_H + crumbRow;
}

const prettify = (slug: string) =>
  decodeURIComponent(slug).replace(/[-_]/g, " ");

const Header = () => {
  const { t, i18n } = useTranslation();
  const navItems = useNavLinks();
  const navigate = useNavigate();
  const location = useLocation();
  const isKyrgyz = i18n.resolvedLanguage?.startsWith("ky");
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => {
    const to = "/" + segments.slice(0, i + 1).join("/");
    const labelKey = getRouteTitleKey(to);
    const label = labelKey ? t(labelKey) : prettify(seg);
    return { to, label };
  });
  const currentLabel = crumbs.at(-1)?.label ?? "";
  const parentCrumbs = crumbs.slice(0, -1);

  const navControls = [
    {
      id: "home",
      title: t("navbar.home"),
      onClick: () => navigate("/"),
      icon: <House size={20} color="#104385" />,
    },
    {
      id: "back",
      title: t("navbar.back"),
      onClick: () => navigate(-1),
      icon: <SquareChevronLeft size={20} color="#104385" />,
    },
    {
      id: "forward",
      title: t("navbar.forward"),
      onClick: () => navigate(1),
      icon: <SquareChevronRight size={20} color="#104385" />,
    },
  ];

  useEffect(() => {
    const update = () => {
      const s = window.scrollY > 60;
      setScrolled(s);
      document.documentElement.style.setProperty(
        "--header-h",
        `${getHeaderH(isHome, s)}px`
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [isHome]);

  const totalH = getHeaderH(isHome, scrolled);

  return (
    <header
      className="w-full fixed inset-x-0 top-0 z-30 backdrop-blur-md bg-white/70 overflow-hidden transition-[height] duration-500"
      style={{ height: totalH }}
    >
      {/* Row 1: Лого + текст/аббревиатура + кнопки + язык */}
      <div
        className="w-11/12 mx-auto flex justify-between items-center transition-[height] duration-500"
        style={{ height: scrolled ? LOGO_H_COMPACT : LOGO_H_FULL }}
      >
        {/* Лого + переключаемый текст */}
        <div className="flex items-center gap-3">
          <img
            className={`shrink-0 transition-[width,height] duration-500 ${
              scrolled ? "size-10" : "size-20"
            }`}
            src={logo}
            alt="logo"
          />

          <div className="relative uppercase text-sinii font-bold overflow-hidden">
            {/* Полный текст — виден когда не прокручено */}
            <div
              className="transition-opacity duration-500"
              style={{ opacity: scrolled ? 0 : 1 }}
            >
              <p>{t("header.line1")}</p>
              <p>{t("header.line2")}</p>
              <p>{t("header.line3")}</p>
            </div>

            {/* Аббревиатура — накладывается поверх при скролле */}
            <div
              className="absolute inset-0 flex items-center transition-opacity duration-500"
              style={{ opacity: scrolled ? 1 : 0 }}
            >
              {t("header.abbr")}
            </div>
          </div>
        </div>

        {/* Кнопки + язык */}
        <div className="flex items-center gap-2">
          {headerShortcutConfig.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                item.href
                  ? window.open(item.href, "_blank", "noopener,noreferrer")
                  : navigate(item.path!)
              }
              className={`bg-sinii text-white ${
                item.className
              } h-12 flex justify-center items-center rounded-md hover:bg-hover-sinii cursor-pointer transition-transform duration-500 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
            >
              {t(item.titleKey)}
            </button>
          ))}
          <div className="flex gap-1 items-center">
            <img src={lng} alt="lng icon" />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Row 2: Навигация — всегда видима */}
      <div className="w-full h-12 border-b-2">
        <div className="w-10/12 mx-auto h-full flex items-center">
          <ul className="flex w-full justify-between items-center">
            {navItems.map((item) => (
              <Link to={item.path} key={item.id}>
                <li
                  className={`${
                    isKyrgyz ? "text-sm" : "text-base"
                  } font-medium text-black uppercase hover:text-sinii cursor-pointer`}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {!isHome && (
        <div
          className="w-11/12 mx-auto flex gap-2 items-center"
          style={{ height: CRUMB_H }}
        >
          <div className="flex gap-2">
            {navControls.map((ctrl) => (
              <button
                key={ctrl.id}
                type="button"
                title={ctrl.title}
                onClick={ctrl.onClick}
                className="w-10 h-10 bg-[#E5F0FF] flex justify-center items-center rounded-md"
              >
                {ctrl.icon}
              </button>
            ))}
          </div>

          {parentCrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumbs"
              className="hidden h-10 bg-[#E5F0FF] px-3 rounded-md md:flex items-center gap-1"
            >
              {parentCrumbs.map((c) => (
                <div key={c.to} className="flex items-center gap-1">
                  <span className="text-slate-300">/</span>
                  <Link
                    to={c.to}
                    className="text-sm text-sinii hover:underline"
                  >
                    {c.label}
                  </Link>
                </div>
              ))}
            </nav>
          )}

          {currentLabel && (
            <div className="h-10 bg-[#E5F0FF] px-3 rounded-md flex items-center text-sm font-semibold text-slate-600">
              {currentLabel}
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
