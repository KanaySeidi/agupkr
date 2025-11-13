import ArrowToLeft from "@/components/atoms/ArrowToLeft";
import Line from "@/components/atoms/Line";
import { quickLinksConfig } from "@/utils/QuickLinksData";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-full mt-10">
        <div className="w-11/12 mx-auto h-full">
          <Line title={t("quick.sectionTitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {quickLinksConfig.map((group) => (
              <div key={group.categoryKey}>
                <div className="space-y-4">
                  <h1 className="text-lg">{t(group.categoryKey)}</h1>
                  <ul className="space-y-2">
                    {group.links.map((link) => (
                      <li
                        key={link.titleKey}
                        className="flex items-center gap-2 text-sinii font-semibold hover:text-hover-sinii"
                      >
                        <ArrowToLeft width={24} height={24} color="#1877F2" />
                        <Link to={link.href}>{t(link.titleKey)}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
