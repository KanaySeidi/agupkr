import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { quickLinksConfig } from "@/utils/QuickLinksData";

const QuickAccessDrawer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Floating tab */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 ${
          open ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <button
          onClick={() => setOpen(true)}
          className="group bg-sinii hover:bg-hover-sinii text-white py-5 px-2.5 rounded-l-xl shadow-lg flex flex-col items-center gap-3 transition-colors"
          aria-label={t("auto.components.organisms.quickAccess.QuickAccessDrawer.1")}
        >
          {/* Arrow icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="size-4 rotate-180"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          {/* Vertical text */}
          <span
            className="text-xs font-semibold tracking-widest select-none"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {t("quick.sectionTitle")}
          </span>
        </button>
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* Drawer panel */}
      <aside
        className={`fixed right-0 top-0 h-full w-72 sm:w-80 bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-sinii text-white shrink-0">
          <h2 className="font-semibold text-base">{t("quick.sectionTitle")}</h2>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center size-8 rounded-full hover:bg-white/20 transition-colors"
            aria-label={t("auto.components.organisms.quickAccess.QuickAccessDrawer.2")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-4">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable links */}
        <div className="flex-1 overflow-y-auto">
          {quickLinksConfig.map((group, gi) => (
            <div key={group.id}>
              {/* Category header */}
              <div className={`px-5 pt-5 pb-2 ${gi > 0 ? "border-t border-slate-100" : ""}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  {t(group.categoryKey)}
                </p>
              </div>
              {/* Links */}
              <ul className="px-3 pb-3">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-sinii hover:bg-[#E5F0FF] transition-colors group"
                    >
                      <span className="text-slate-300 group-hover:text-sinii transition-colors">›</span>
                      <span className="line-clamp-2 leading-snug">{t(link.titleKey)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Extra direct links */}
          <div className="border-t border-slate-100 px-5 pt-5 pb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
              {t("auto.components.organisms.quickAccess.QuickAccessDrawer.3")}</p>
            <ul className="px-0 space-y-0.5">
              {[
                { label: t("header.navs.nav6"), href: "/news" },
                { label: t("header.navs.nav7"), href: "/contacts" },
                { label: t("header.avn"), href: "https://avn.apap.kg/", external: true },
              ].map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-sinii hover:bg-[#E5F0FF] transition-colors group"
                    >
                      <span className="text-slate-300 group-hover:text-sinii">›</span>
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-700 hover:text-sinii hover:bg-[#E5F0FF] transition-colors group"
                    >
                      <span className="text-slate-300 group-hover:text-sinii">›</span>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default QuickAccessDrawer;
