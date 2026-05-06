import { quickLinksConfig } from "@/utils/QuickLinksData";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-12 mb-4">
      <div className="w-full border-t border-slate-200 pt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
          {t("quick.sectionTitle")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {quickLinksConfig.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-semibold text-slate-700 mb-3 pb-1.5 border-b border-slate-100">
                {t(group.categoryKey)}
              </h3>
              <ul className="flex flex-col gap-1.5">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="flex items-start gap-2 text-sm text-sinii hover:text-hover-sinii hover:underline leading-snug"
                    >
                      <span className="mt-0.5 shrink-0 text-slate-300">›</span>
                      <span className="line-clamp-2">{t(link.titleKey)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
