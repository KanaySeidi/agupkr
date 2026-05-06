import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/icon/fLogo.svg";

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const columns = [
  {
    id: "about",
    titleKey: "auto2.components.organisms.footer.Footer.1",
    links: [
      { labelKey: "auto2.components.organisms.footer.Footer.2", path: "/about" },
      { labelKey: "auto2.components.organisms.footer.Footer.3", path: "/about/charter" },
      { labelKey: "auto2.components.organisms.footer.Footer.4", path: "/about/history" },
      { labelKey: "auto2.components.organisms.footer.Footer.5", path: "/about/structure" },
      { labelKey: "auto2.components.organisms.footer.Footer.6", path: "/about/logotip" },
      { labelKey: "auto2.components.organisms.footer.Footer.7", path: "/about/council" },
    ],
  },
  {
    id: "education",
    titleKey: "auto2.components.organisms.footer.Footer.8",
    links: [
      { labelKey: "auto2.components.organisms.footer.Footer.9", path: "/education/bakalavr" },
      { labelKey: "auto2.components.organisms.footer.Footer.10", path: "/education/magistr" },
      { labelKey: "auto2.components.organisms.footer.Footer.11", path: "/education/doctor" },
      { labelKey: "auto2.components.organisms.footer.Footer.12", path: "/education/aspirant" },
      { labelKey: "auto2.components.organisms.footer.Footer.13", path: "/education/spo" },
    ],
  },
  {
    id: "advanced",
    titleKey: "auto2.components.organisms.footer.Footer.14",
    links: [
      { labelKey: "auto2.components.organisms.footer.Footer.15", path: "/advanced" },
      { labelKey: "auto2.components.organisms.footer.Footer.16", path: "/advanced/profdevelop" },
      { labelKey: "auto2.components.organisms.footer.Footer.17", path: "/advanced/employees" },
      { labelKey: "auto2.components.organisms.footer.Footer.18", path: "/schedule" },
      { labelKey: "auto2.components.organisms.footer.Footer.19", path: "/library" },
    ],
  },
  {
    id: "info",
    titleKey: "auto2.components.organisms.footer.Footer.20",
    links: [
      { labelKey: "auto2.components.organisms.footer.Footer.21", path: "/news" },
      { labelKey: "auto2.components.organisms.footer.Footer.22", path: "/aplicant2025" },
      { labelKey: "auto2.components.organisms.footer.Footer.23", path: "/contacts" },
      { labelKey: "auto2.components.organisms.footer.Footer.24", path: "/about/cooperation" },
      { labelKey: "auto2.components.organisms.footer.Footer.25", path: "/about/integrity" },
    ],
  },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isKyrgyz = i18n.resolvedLanguage?.startsWith("ky");
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  return (
    <footer className="bg-sinii text-white">
      <div className="w-11/12 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8 border-b border-white/10">

          {/* Brand */}
          <div className="md:col-span-1 flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <img src={logo} className="size-14 shrink-0 mt-0.5" alt={t("auto2.components.organisms.footer.Footer.26")} />
              <div className="text-white leading-snug">
                {isKyrgyz ? (
                  <>
                    <p className="text-xs text-white/50 uppercase tracking-tight">{t("header.line7")}</p>
                    <p className="text-xs text-white/50 uppercase tracking-tight mb-0.5">{t("header.line8")}</p>
                    <p className="text-sm font-bold uppercase">{t("header.line4")}</p>
                    <p className="text-sm font-bold uppercase">{t("header.line5")}</p>
                    <p className="text-sm font-bold uppercase">{t("header.line6")}</p>
                  </>
                ) : (
                  <>
                    <p className="text-sm font-bold uppercase">{t("header.line4")}</p>
                    <p className="text-sm font-bold uppercase">{t("header.line5")}</p>
                    <p className="text-sm font-bold uppercase mb-0.5">{t("header.line6")}</p>
                    <p className="text-xs text-white/50 uppercase tracking-tight">{t("header.line7")}</p>
                    <p className="text-xs text-white/50 uppercase tracking-tight">{t("header.line8")}</p>
                  </>
                )}
              </div>
            </div>

            <div className="text-sm text-white/60 leading-relaxed">
              <p className="text-white/40 text-xs uppercase tracking-wide mb-1">{t("auto2.components.organisms.footer.Footer.27")}</p>
              <p>{t("auto2.components.organisms.footer.Footer.28")}</p>
              <p>{t("auto2.components.organisms.footer.Footer.29")}</p>
            </div>

            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-9 rounded-full bg-white/10 hover:bg-white/25 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns — desktop */}
          <div className="hidden md:grid md:col-span-4 grid-cols-4 gap-6">
            {columns.map((col) => (
              <div key={col.id}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
                  {t(col.titleKey)}
                </h3>
                <ul className="flex flex-col gap-2">
                  {col.links.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {t(link.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Nav columns — mobile accordion */}
          <div className="md:hidden flex flex-col border-t border-white/10">
            {columns.map((col) => (
              <div key={col.id} className="border-b border-white/10">
                <button
                  onClick={() => toggle(col.id)}
                  className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-white"
                >
                  <span>{t(col.titleKey)}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`size-4 transition-transform duration-200 ${open === col.id ? "rotate-180" : ""}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {open === col.id && (
                  <ul className="pb-4 flex flex-col gap-2.5 pl-1">
                    {col.links.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-sm text-white/70 hover:text-white transition-colors block"
                          onClick={() => setOpen(null)}
                        >
                          {t(link.labelKey)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
          <p>© {new Date().getFullYear()} {t("auto2.components.organisms.footer.Footer.30")}</p>
          <p>{t("auto2.components.organisms.footer.Footer.31")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
