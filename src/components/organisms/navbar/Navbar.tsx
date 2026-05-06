import { useTranslation } from "react-i18next";
import { House, SquareChevronLeft, SquareChevronRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getRouteTitleKey } from "@/config/siteNavigation";

const prettify = (slug: string) =>
  decodeURIComponent(slug).replace(/[-_]/g, " ");

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const segments = location.pathname.split("/").filter(Boolean);
  const crumbs = segments.map((seg, i) => {
    const to = "/" + segments.slice(0, i + 1).join("/");
    const labelKey = getRouteTitleKey(to);
    const label = labelKey ? t(labelKey) : prettify(seg);
    return { to, label };
  });

  const currentLabel =
    location.pathname === "/"
      ? t(getRouteTitleKey("/") ?? "navbar.home")
      : crumbs.at(-1)?.label ?? "";

  const navigationControls = [
    {
      id: "home",
      title: t("navbar.home"),
      onClick: () => navigate("/"),
      icon: <House size={24} color="#104385" />,
    },
    {
      id: "back",
      title: t("navbar.back"),
      onClick: () => navigate(-1),
      icon: <SquareChevronLeft size={24} color="#104385" />,
    },
    {
      id: "forward",
      title: t("navbar.forward"),
      onClick: () => navigate(1),
      icon: <SquareChevronRight size={24} color="#104385" />,
    },
  ];

  return (
    <>
      <div className="w-screen mt-35 sticky left-0 top-35 bg-white/70 backdrop-blur-md z-50 py-3">
        <div className="w-11/12 mx-auto h-full flex gap-2 items-center">
          <div className="flex gap-2 cursor-pointer">
            {navigationControls.map((control) => (
              <button
                key={control.id}
                type="button"
                className="w-12 h-10 bg-[#E5F0FF] py-1 px-2 flex justify-center items-center rounded-md"
                title={control.title}
                onClick={control.onClick}
              >
                {control.icon}
              </button>
            ))}
          </div>
          {crumbs.slice(0, -1).length > 0 && (
            <nav
              aria-label={t("common.breadcrumbs")}
              className="hidden w-fit h-10 bg-[#E5F0FF] px-2 rounded-md md:flex items-center"
            >
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
          )}

          <div className="w-fit h-10 bg-[#E5F0FF] px-2 rounded-md flex justify-center items-center text-sm font-semibold text-slate-600">
            {currentLabel}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
