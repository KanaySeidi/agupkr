import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  House,
  SquareChevronLeft,
  SquareChevronRight,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import LanguageSwitcher from "@/components/molecules/LangSwitcher";
import logo from "@/assets/icon/new_logo.svg";
import lng from "@/assets/icon/Icon.svg";
import {
  headerShortcutConfig,
  getRouteTitleKey,
} from "@/config/siteNavigation";
import { useNavLinks } from "@/utils/navLinks";

const LOGO_H_FULL = 120;
const LOGO_H_COMPACT = 72;
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
  const { t } = useTranslation();
  const navItems = useNavLinks();
  const navigate = useNavigate();
  const location = useLocation();
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
        className="w-full fixed inset-x-0 top-0 z-30 backdrop-blur-md bg-white/90 overflow-hidden transition-[height] duration-500 ease-in-out"
        style={{ height: totalH }}
      >
        {}
        <div
          className="w-11/12 mx-auto flex justify-between items-center transition-[height] duration-500 ease-in-out"
          style={{
            height: isMobile
              ? LOGO_H_COMPACT
              : scrolled
              ? LOGO_H_COMPACT
              : LOGO_H_FULL,
          }}
        >
          {}
          <Link to="/" className="flex items-center min-w-0">
            <img
              className={`shrink-0 transition-[width,height] duration-500 ease-in-out ${
                scrolled || isMobile ? "size-44" : "size-96"
              }`}
              src={logo}
              alt={t("common.logo")}
            />
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
          <div className="w-11/12 mx-auto h-full">
            <ul className="w-full h-full flex items-center justify-between gap-1 xl:gap-3">
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
                        className={`text-[9px] xl:text-xs uppercase cursor-pointer transition-colors whitespace-nowrap bg-gray-200 px-1.5 xl:px-2 py-1.5 rounded-xl ${
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

              <div className="flex justify-between gap-2 shrink-0">
                <a
                  href="https://www.facebook.com/agupkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-1.5 rounded-xl bg-gray-200 hover:bg-sinii text-sinii hover:text-white transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.instagram.com/agupkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-1.5 rounded-xl bg-gray-200 hover:bg-sinii text-sinii hover:text-white transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@agupkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-1.5 rounded-xl bg-gray-200 hover:bg-sinii text-sinii hover:text-white transition-colors"
                >
                  <Youtube size={18} />
                </a>
              </div>
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
