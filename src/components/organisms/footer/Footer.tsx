import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSiteStore } from "@/store/site.store";
import logoRu from "@/assets/icon/logo-footer-ru.svg";
import logoKg from "@/assets/icon/logo-footer-kg.svg";
import logoEn from "@/assets/icon/logo-footer-en.svg";
import uzorGolden from "@/assets/img/uzor-golden.svg";
import uzor from "@/assets/img/uzor.svg";

type FallbackSocial = { label: string; href: string; iconKey: string };

const FALLBACK_SOCIALS: FallbackSocial[] = [
  { label: "Facebook", href: "#", iconKey: "facebook" },
  { label: "YouTube", href: "#", iconKey: "youtube" },
  { label: "Instagram", href: "#", iconKey: "instagram" },
];

const ICON_MAP: Record<
  string,
  {
    viewBox: string;
    fill: string;
    stroke?: string;
    strokeWidth?: string;
    content: React.ReactNode;
  }
> = {
  facebook: {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    content: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
  },
  youtube: {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    content: (
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    ),
  },
  instagram: {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    content: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  },
  telegram: {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    content: (
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.17l3.958 1.31 2.04 6.12a.75.75 0 0 0 1.352.162l2.43-3.644 4.55 3.41a2.25 2.25 0 0 0 3.536-1.34l3-14.25a2.25 2.25 0 0 0-2.47-2.653z" />
    ),
  },
  twitter: {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    content: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    ),
  },
  vk: {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    content: (
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.714-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.677-1.254.677-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.408 4 7.932c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.839c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.712-.576.712z" />
    ),
  },
};

const DEFAULT_ICON = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  content: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
};

function SocialIcon({ iconKey }: { iconKey: string }) {
  if (iconKey?.startsWith("http://") || iconKey?.startsWith("https://")) {
    return <img src={iconKey} alt="" className="size-4 object-contain" />;
  }
  const entry = ICON_MAP[iconKey?.toLowerCase()] ?? DEFAULT_ICON;
  return (
    <svg
      viewBox={entry.viewBox}
      fill={entry.fill}
      stroke={entry.stroke}
      strokeWidth={entry.strokeWidth}
      className="size-4"
    >
      {entry.content}
    </svg>
  );
}

const columns = [
  {
    id: "about",
    titleKey: "auto2.components.organisms.footer.Footer.1",
    links: [
      {
        labelKey: "auto2.components.organisms.footer.Footer.2",
        path: "/about",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.3",
        path: "/about/charter",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.4",
        path: "/about/history",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.5",
        path: "/about/structure",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.6",
        path: "/about/logotip",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.7",
        path: "/about/council",
      },
    ],
  },
  {
    id: "education",
    titleKey: "auto2.components.organisms.footer.Footer.8",
    links: [
      {
        labelKey: "auto2.components.organisms.footer.Footer.9",
        path: "/education/bakalavr",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.10",
        path: "/education/magistr",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.11",
        path: "/education/doctor",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.13",
        path: "/education/spo",
      },
    ],
  },
  {
    id: "advanced",
    titleKey: "auto2.components.organisms.footer.Footer.14",
    links: [
      {
        labelKey: "auto2.components.organisms.footer.Footer.15",
        path: "/advanced",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.16",
        path: "/advanced/profdevelop",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.17",
        path: "/advanced/employees",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.18",
        path: "/schedule",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.19",
        path: "/library",
      },
    ],
  },
  {
    id: "info",
    titleKey: "auto2.components.organisms.footer.Footer.20",
    links: [
      {
        labelKey: "auto2.components.organisms.footer.Footer.21",
        path: "/news",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.22",
        path: "/aplicant2025",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.23",
        path: "/contacts",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.24",
        path: "/about/cooperation",
      },
      {
        labelKey: "auto2.components.organisms.footer.Footer.25",
        path: "/about/integrity",
      },
    ],
  },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<string | null>(null);

  const socialLinks = useSiteStore((s) => s.socialLinks);
  const fetchSocialLinks = useSiteStore((s) => s.fetchSocialLinks);

  useEffect(() => {
    fetchSocialLinks();
  }, [fetchSocialLinks]);

  const lang = i18n.resolvedLanguage ?? "ru";
  const footerLogo = lang.startsWith("ky")
    ? logoKg
    : lang.startsWith("en")
    ? logoEn
    : logoRu;

  const socials = socialLinks.length > 0 ? socialLinks : FALLBACK_SOCIALS;

  return (
    <div>
      <div>
        <img
          src={uzor}
          className="w-full block mb-10"
          alt=""
          aria-hidden="true"
        />
      </div>

      <footer
        style={{ backgroundColor: "#262B6C" }}
        className="text-white mt-10"
      >
        <div className="w-11/12 mx-auto pt-10 sm:pt-14">
          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-8">
            {/* Brand */}
            <div className="md:col-span-1 flex flex-col gap-5">
              <img
                src={footerLogo}
                alt="АГУПКР"
                className="w-48 object-contain"
              />

              <div className="flex flex-col gap-1">
                <p className="text-white/40 text-xs uppercase tracking-wide">
                  {t("auto2.components.organisms.footer.Footer.27")}
                </p>
                <p className="text-sm text-white/80">
                  {t("auto2.components.organisms.footer.Footer.28")}
                </p>
                <p className="text-sm text-white/80">
                  {t("auto2.components.organisms.footer.Footer.29")}
                </p>
              </div>
            </div>

            {/* Nav columns — desktop */}
            <div className="hidden md:grid md:col-span-4 grid-cols-4 gap-6">
              {columns.map((col) => (
                <div key={col.id}>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#D0A858] mb-4">
                    {t(col.titleKey)}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
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
            <div className="md:hidden flex flex-col border-t border-white/10 col-span-1">
              {columns.map((col) => (
                <div key={col.id} className="border-b border-white/10">
                  <button
                    onClick={() =>
                      setOpen((p) => (p === col.id ? null : col.id))
                    }
                    className="w-full flex items-center justify-between py-3.5 text-sm font-semibold text-[#D0A858] uppercase tracking-wide"
                  >
                    <span>{t(col.titleKey)}</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`size-4 transition-transform duration-200 ${
                        open === col.id ? "rotate-180" : ""
                      }`}
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

          {/* Social icons row */}
          <div className="flex justify-end gap-2 pb-6">
            {socials.map((s) => {
              const isFallback = "iconKey" in s;
              const label = isFallback ? (s as FallbackSocial).label : s.name;
              const href = isFallback ? (s as FallbackSocial).href : s.url;
              const iconKey = isFallback
                ? (s as FallbackSocial).iconKey
                : s.icon;
              return (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-10 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <SocialIcon iconKey={iconKey} />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="border-t border-white/15" />

          {/* Copyright */}
          <div className="py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
            <p>
              © {new Date().getFullYear()}{" "}
              {t("auto2.components.organisms.footer.Footer.30")}
            </p>
            <a
              href="http://www.apap.kg/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-white/60 hover:text-white hover:bg-white/15 transition-all text-xs font-medium"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-3.5 shrink-0"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {t("common.oldSite")}
            </a>
          </div>
        </div>

        {/* Golden uzor strip */}
        <div className="w-11/12 mx-auto pb-10">
          <img
            src={uzorGolden}
            className="w-full block"
            alt=""
            aria-hidden="true"
          />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
