import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import structure from "@/assets/img/structure.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuickLinks from "@/components/organisms/quickLinks/QuickLinks";
import { useStructureStore } from "@/store/structure.store";

const Structure = () => {
  const { t } = useTranslation();
  const { items, fetchList } = useStructureStore();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  const structureItems = items.length > 0
    ? items.map(item => ({ id: item.id, title: item.title, departments: item.departments, scheme_url: item.scheme_url }))
    : [];

  return (
    <>
      <div className="w-full">
        <Line title={t("sidebar.structure")} />
        <img
          src={structureItems[0]?.scheme_url || structure}
          alt=""
          className="w-full object-cover"
        />

        {structureItems.map((item) => (
          <Accordion key={item.id} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${item.id}`}>
              <AccordionTrigger className="text-lg text-sinii">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {item.departments.length > 0 ? (
                  <ul className="flex flex-col gap-2">
                    {item.departments.map((dept) => (
                      <li key={dept.id} className="text-sm text-slate-700">
                        <span className="font-medium text-sinii">{dept.name}</span>
                        {dept.description && (
                          <p className="text-xs text-slate-500 mt-0.5">{dept.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500">
                    {t("auto.components.pages.about.Structure.1")}
                  </p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        <QuickLinks />
      </div>
    </>
  );
};

export default Structure;
