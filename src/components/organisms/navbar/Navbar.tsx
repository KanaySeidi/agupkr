import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

const TITLE_KEYS: Record<string, string> = {
  "/": "header.navs.nav1",
  "/about": "header.navs.nav2",
  "/about/charter": "sidebar.charter",
  "/about/logotip": "sidebar.logo",
  "/about/history": "sidebar.history",
  "/about/structure": "sidebar.structure",
  "/about/council": "sidebar.council",
  "/about/union": "sidebar.union",
  "/about/quality-system": "sidebar.qualitySystem",
  "/about/journal": "sidebar.journal",
  "/about/budget": "sidebar.budget",
  "/about/professors": "sidebar.professors",
  "/about/cooperation": "sidebar.cooperation",
  "/about/integrity": "sidebar.integrity",
  "/about/laws-general": "sidebar.lawsGeneral",
  "/about/laws-internal": "sidebar.lawsInternal",
  "/education": "sidebar.education.index",
  "/education/spo": "sidebar.education.spo",
  "/education/bakalavr": "sidebar.education.bakalavr",
  "/education/magistr": "sidebar.education.magistr",
  "/education/doctor": "sidebar.education.doctor",
  "/education/aspirant": "sidebar.education.aspirant",
  "/education/kafedgmu": "sidebar.education.kafedgmu",
  "/education/kafedem": "sidebar.education.kafedem",
  "/education/kafedbp": "sidebar.education.kafedbp",
  "/education/anket": "sidebar.education.anket",
  "/contacts": "header.navs.nav7",
  "/advanced": "sidebar.advanced.about",
  "/advanced/profdevelop": "sidebar.advanced.profDevelop",
  "/advanced/employees": "sidebar.advanced.employees",
  "/aplicant2025": "admission.blockTitle",
  "/news": "header.navs.nav6",
};

const prettify = (slug: string) =>
  decodeURIComponent(slug).replace(/[-_]/g, " ");

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => {
    const to = "/" + segments.slice(0, i + 1).join("/");
    const labelKey = TITLE_KEYS[to];
    const label = labelKey ? t(labelKey) : prettify(seg);
    return { to, label };
  });

  const currentLabel =
    location.pathname === "/" ? t(TITLE_KEYS["/"]) : crumbs.at(-1)?.label ?? "";

  return (
    <>
      <div className="w-screen h-12 mt-35 sticky left-0 top-35 bg-white/70 backdrop-blur-md z-50">
        <div className="w-11/12 mx-auto h-full flex gap-2 items-center">
          <div className="flex gap-2 cursor-pointer">
            <div
              className="w-12 h-10 bg-[#E5F0FF] py-1 px-2 flex justify-center items-center rounded-md"
              title={t("navbar.home")}
              onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#104385"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-house-icon lucide-house"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
            <div
              className="w-12 h-10 bg-[#E5F0FF] py-1 px-2 flex justify-center items-center rounded-md"
              title={t("navbar.back")}
              onClick={() => navigate(-1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#104385"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-square-chevron-left-icon lucide-square-chevron-left"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="m14 16-4-4 4-4" />
              </svg>
            </div>
            <div
              className="w-12 h-10 bg-[#E5F0FF] py-1 px-2 flex justify-center items-center rounded-md"
              title={t("navbar.forward")}
              onClick={() => navigate(1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#104385"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-square-chevron-right-icon lucide-square-chevron-right"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="m10 8 4 4-4 4" />
              </svg>
            </div>
          </div>
          <nav
            aria-label="Breadcrumbs"
            className="hidden w-fit h-10 bg-[#E5F0FF] px-2 rounded-md md:flex items-center"
          >
            <Link to="/" className="text-sm text-sinii hover:underline">
              {t(TITLE_KEYS["/"])}
            </Link>

            {crumbs.slice(0, -1).map((c) => (
              <div
                key={c.to}
                className="flex items-center w-fit h-10 bg-[#E5F0FF] px-2 rounded-md"
              >
                <span className="text-slate-300 mr-2">/</span>
                <Link to={c.to} className="text-sm text-sinii hover:underline">
                  {c.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="w-fit h-10 bg-[#E5F0FF] px-2 rounded-md flex justify-center items-center text-sm font-semibold text-slate-600">
            {currentLabel}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
