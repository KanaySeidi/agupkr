import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  House,
  SquareChevronLeft,
  SquareChevronRight,
  Globe,
  Search,
} from "lucide-react";
import LanguageSwitcher from "@/components/molecules/LangSwitcher";
import logoRu from "@/assets/icon/logo-header-ru.svg";
import logoKg from "@/assets/icon/logo-header-kg.svg";
import logoEn from "@/assets/icon/logo-header-eng.svg";
import logoMobile from "@/assets/icon/new_logo.svg";
import uzorBg from "@/assets/img/uzor.svg";
import {
  headerShortcutConfig,
  getRouteTitleKey,
} from "@/config/siteNavigation";
import { useNavLinks } from "@/utils/navLinks";

const LOGO_H_FULL = 120;
const LOGO_H_COMPACT = 72;
const NAV_H = 96;
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
  const isHome = location.pathname === "/";

  const lang = i18n.resolvedLanguage ?? "ru";
  const headerLogo = lang === "ky" ? logoKg : lang === "en" ? logoEn : logoRu;

  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
        className="w-full fixed inset-x-0 top-0 z-30 overflow-hidden transition-[height] duration-500 ease-in-out"
        style={{ height: totalH }}
      >
        {/* Row 1: Logo + buttons — dark navy on desktop, white on mobile */}
        <div
          className={`w-full transition-[height] duration-500 ease-in-out relative overflow-hidden ${
            isMobile ? "bg-white/90 backdrop-blur-md" : "bg-sinii"
          }`}
          style={{
            height: isMobile
              ? LOGO_H_COMPACT
              : scrolled
              ? LOGO_H_COMPACT
              : LOGO_H_FULL,
          }}
        >
          {/* Subtle ornament pattern for desktop */}
          {!isMobile && (
            <img
              src={uzorBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none select-none"
            />
          )}

          <div className="w-11/12 mx-auto h-full flex justify-between items-center relative">
            {/* Logo */}
            <Link to="/" className="flex items-center h-full py-2 min-w-0">
              <img
                className="h-full w-auto object-contain shrink-0 transition-all duration-500 ease-in-out"
                src={isMobile ? logoMobile : headerLogo}
                alt={t("common.logo")}
              />
            </Link>

            {/* Desktop: shortcut buttons + language switcher */}
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
                  } h-10 flex justify-center items-center rounded-xl cursor-pointer transition-all duration-300 text-sm font-medium  text-sinii bg-white hover:bg-white/80 ${
                    scrolled ? "scale-90" : "scale-100"
                  }`}
                >
                  {t(item.titleKey)}
                </button>
              ))}
              <div className="flex gap-1.5 items-center ml-2">
                <Globe size={16} color="white" />
                <LanguageSwitcher variant="light" />
              </div>
            </div>

            {/* Mobile: language switcher + hamburger */}
            <div className="flex lg:hidden items-center gap-3 shrink-0">
              <div className="flex gap-1 items-center">
                <Globe size={14} color="#262B6C" />
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
        </div>

        {/* Row 2: Nav items + search */}
        <div className="hidden lg:block w-full bg-sinii h-24">
          <div className="w-11/12 mx-auto h-full">
            <ul className="w-full h-full flex items-center justify-between gap-1 xl:gap-2">
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
                        className={`text-[16px] text-center cursor-pointer transition-colors whitespace-pre-wrap bg-white px-2 xl:px-3 py-1.5 rounded-xl leading-tight w-auto h-16 flex justify-center items-center ${
                          isActive
                            ? "text-sinii font-bold"
                            : "font-medium text-sinii hover:bg-white/90"
                        }`}
                      >
                        {item.title}
                      </li>
                    </Link>
                  );
                });
              })()}

              {/* Search */}
              <div className="shrink-0 flex items-center gap-1.5 bg-white rounded-xl px-2 py-1.5 h-16">
                <Search size={25} className="text-sinii shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Поиск"
                  className="bg-transparent text-xs outline-none w-24 xl:w-32 text-gray-700 placeholder:text-gray-400"
                />
              </div>
            </ul>
          </div>
        </div>

        {/* Row 3: Breadcrumbs */}
        {!isHome && (
          <div className="w-full bg-white border-b">
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
                    <div
                      key={c.to}
                      className="flex items-center gap-1 shrink-0"
                    >
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
                  className="w-full h-12 flex justify-center items-center rounded-md font-medium border border-sinii text-sinii hover:bg-sinii hover:text-white transition-colors"
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
