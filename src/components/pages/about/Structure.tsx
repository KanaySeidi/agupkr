import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useStructureStore } from "@/store/structure.store";

const Structure = () => {
  const { t } = useTranslation();
  const { items, status, fetchList } = useStructureStore();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  if ((status === 'idle' || status === 'loading') && items.length === 0) return null;

  return (
    <div className="w-full">
      <Line title={t("sidebar.structure")} />
      <div className="flex flex-col gap-8 mt-6">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            {item.scheme_url && (
              <img src={item.scheme_url} alt={item.title} className="w-full object-cover rounded-md" />
            )}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger className="text-xl font-semibold text-sinii">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-3">
                  {item.departments.length > 0 && (
                    <ul className="flex flex-col gap-3">
                      {item.departments.map((dept) => (
                        <li key={dept.id} className="text-base text-slate-700">
                          <span className="font-medium text-sinii">{dept.name}</span>
                          {dept.description && (
                            <p className="text-sm text-slate-500 mt-0.5">{dept.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Structure;
