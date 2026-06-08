import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { House, SquareChevronLeft, SquareChevronRight } from "lucide-react";
import LanguageSwitcher from "@/components/molecules/LangSwitcher";
import logo from "@/assets/icon/Logo.svg";
import lng from "@/assets/icon/Icon.svg";
import {
  headerShortcutConfig,
  getRouteTitleKey,
} from "@/config/siteNavigation";
import { useNavLinks } from "@/utils/navLinks";

const LOGO_H_FULL = 112;
const LOGO_H_COMPACT = 60;
const NAV_H = 48;
const CRUMB_H = 56;

function getHeaderH(isHome: boolean, scrolled: boolean, isMobile: boolean) {
  const logoRow = scrolled || isMobile ? LOGO_H_COMPACT : LOGO_H_FULL;
  const navRow = isMobile ? 0 : NAV_H;
  const crumbRow = isHome ? 0 : CRUMB_H;
  return logoRow + navRow + crumbRow;
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
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      icon: <House size={18} color="#104385" />,
    },
    {
      id: "back",
      title: t("navbar.back"),
      onClick: () => navigate(-1),
      icon: <SquareChevronLeft size={18} color="#104385" />,
    },
    {
      id: "forward",
      title: t("navbar.forward"),
      onClick: () => navigate(1),
      icon: <SquareChevronRight size={18} color="#104385" />,
    },
  ];

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 1024;
      const s = mobile ? false : window.scrollY > 60;
      setScrolled(s);
      setIsMobile(mobile);
      document.documentElement.style.setProperty(
        "--header-h",
        `${getHeaderH(isHome, s, mobile)}px`
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const totalH = getHeaderH(isHome, scrolled, isMobile);

  return (
    <>
      <header
        className="w-full fixed inset-x-0 top-0 z-30 backdrop-blur-md bg-white/90 overflow-hidden transition-[height] duration-500"
        style={{ height: totalH }}
      >
        {}
        <div
          className="w-11/12 mx-auto flex justify-between items-center"
          style={{
            height: isMobile
              ? LOGO_H_COMPACT
              : scrolled
              ? LOGO_H_COMPACT
              : LOGO_H_FULL,
          }}
        >
          {}
          <Link to="/" className="flex items-center gap-2 lg:gap-3 min-w-0">
            <img
              className={`shrink-0 transition-[width,height] duration-500 ${
                scrolled || isMobile ? "size-9 lg:size-10" : "size-20"
              }`}
              src={logo}
              alt={t("common.logo")}
            />
            <div className="uppercase text-sinii font-bold leading-tight overflow-hidden">
              {isMobile ? (
                <span className="text-sm font-bold whitespace-nowrap">
                  {t("header.abbr")}
                </span>
              ) : (
                <div className="relative">
                  <div
                    className="transition-opacity duration-500"
                    style={{ opacity: scrolled ? 0 : 1 }}
                  >
                    <p className="text-sm">{t("header.line1")}</p>
                    <p className="text-sm">{t("header.line2")}</p>
                    <p className="text-sm">{t("header.line3")}</p>
                  </div>
                  <div
                    className="absolute inset-0 flex items-center transition-opacity duration-500"
                    style={{ opacity: scrolled ? 1 : 0 }}
                  >
                    {t("header.abbr")}
                  </div>
                </div>
              )}
            </div>
          </Link>

          {}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {headerShortcutConfig.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  item.href
                    ? window.open(item.href, "_blank", "noopener,noreferrer")
                    : navigate(item.path!)
                }
                className={`${
                  item.className
                } h-11 flex justify-center items-center rounded-xl cursor-pointer transition-transform duration-500 text-sm ${
                  scrolled ? "scale-90" : "scale-100"
                } ${
                  item.variant === "outlined"
                    ? "bg-gray-200 text-sinii hover:bg-gray-300 font-semibold"
                    : "bg-sinii text-white hover:bg-hover-sinii"
                }`}
              >
                {t(item.titleKey)}
              </button>
            ))}
            <div className="flex gap-1 items-center ml-1">
              <img src={lng} alt={t("common.language")} />
              <LanguageSwitcher />
            </div>
          </div>

          {}
          <div className="flex lg:hidden items-center gap-3 shrink-0">
            <div className="flex gap-1 items-center">
              <img src={lng} alt={t("common.language")} className="size-4" />
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="flex flex-col gap-1.5 p-1.5"
              aria-label={t("auto2.components.organisms.header.Header.1")}
            >
              <span
                className={`block w-5 h-0.5 bg-sinii transition-transform duration-300 origin-center ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-sinii transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-sinii transition-transform duration-300 origin-center ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {}
        <div
          className="hidden lg:block w-full border-b-2"
          style={{ height: NAV_H }}
        >
          <div className="w-11/12 mx-auto h-full flex items-center">
            <ul className="flex w-full items-center justify-between gap-1">
              {(() => {
                const activeItem = navItems
                  .filter((item) =>
                    item.path === "/"
                      ? location.pathname === "/"
                      : location.pathname === item.path ||
                        location.pathname.startsWith(item.path + "/")
                  )
                  .sort((a, b) => b.path.length - a.path.length)[0];
                return navItems.map((item) => {
                  const isActive = activeItem?.path === item.path;
                  return (
                    <Link to={item.path} key={item.id}>
                      <li
                        className={`${
                          isKyrgyz ? "text-[10px]" : "text-xs xl:text-sm"
                        } uppercase cursor-pointer transition-colors whitespace-nowrap bg-gray-200 px-2 py-1.5 rounded-xl ${
                          isActive
                            ? "text-sinii font-bold"
                            : "font-medium text-gray-700 hover:text-sinii"
                        }`}
                      >
                        {item.title}
                      </li>
                    </Link>
                  );
                });
              })()}
            </ul>
          </div>
        </div>

        {/* Row 3: Breadcrumbs */}
        {!isHome && (
          <div
            className="w-11/12 mx-auto flex gap-2 items-center"
            style={{ height: CRUMB_H }}
          >
            <div className="flex gap-1.5">
              {navControls.map((ctrl) => (
                <button
                  key={ctrl.id}
                  type="button"
                  title={ctrl.title}
                  onClick={ctrl.onClick}
                  className="w-8 h-8 bg-[#E5F0FF] flex justify-center items-center rounded-md"
                >
                  {ctrl.icon}
                </button>
              ))}
            </div>

            {parentCrumbs.length > 0 && (
              <nav
                aria-label={t("common.breadcrumbs")}
                className="hidden h-8 bg-[#E5F0FF] px-3 rounded-md sm:flex items-center gap-1 overflow-hidden"
              >
                {parentCrumbs.map((c) => (
                  <div key={c.to} className="flex items-center gap-1 shrink-0">
                    <span className="text-slate-300">/</span>
                    <Link
                      to={c.to}
                      className="text-xs text-sinii hover:underline whitespace-nowrap"
                    >
                      {c.label}
                    </Link>
                  </div>
                ))}
              </nav>
            )}

            {currentLabel && (
              <div className="h-8 bg-[#E5F0FF] px-3 rounded-md flex items-center text-xs font-semibold text-slate-600 truncate max-w-[180px] sm:max-w-xs lg:max-w-none">
                {currentLabel}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-x-0 bottom-0 z-20 bg-white overflow-y-auto"
          style={{ top: LOGO_H_COMPACT }}
        >
          <nav className="w-11/12 mx-auto py-4 flex flex-col">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname === item.path ||
                    location.pathname.startsWith(item.path + "/");
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`text-base uppercase py-3 border-b border-slate-100 last:border-0 ${
                    isActive
                      ? "text-sinii font-bold"
                      : "font-medium text-slate-800 hover:text-sinii"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2.5 mt-5 pt-5 border-t border-slate-200">
              {headerShortcutConfig.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    item.href
                      ? window.open(item.href, "_blank", "noopener,noreferrer")
                      : navigate(item.path!);
                  }}
                  className={`w-full h-12 flex justify-center items-center rounded-md font-medium ${
                    item.variant === "outlined"
                      ? "border border-gray-300 bg-white text-sinii hover:bg-gray-50"
                      : "bg-sinii text-white hover:bg-hover-sinii"
                  }`}
                >
                  {t(item.titleKey)}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
