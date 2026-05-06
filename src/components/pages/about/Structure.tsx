import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import structure from "@/assets/img/structure.png";
import { useStructure } from "@/utils/structure";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Smile } from "lucide-react";
import QuickLinks from "@/components/organisms/quickLinks/QuickLinks";

const Structure = () => {
  const { t } = useTranslation();
  const structureArr = useStructure();

  return (
    <>
      <div className="w-full">
        <Line title={t("sidebar.structure")} />
        <img src={structure} alt="" className="w-full object-cover" />

        {structureArr.map((item) => (
          <Accordion key={item.id} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${item.id}`}>
              <AccordionTrigger className="text-lg text-sinii">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <div className="flex gap-10 h-full items-center">
                  <Smile size={100} />
                  <p className="text-2xl text-sinii">
                    {t("auto.components.pages.about.Structure.1")}</p>
                </div>
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
