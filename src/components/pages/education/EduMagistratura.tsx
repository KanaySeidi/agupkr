import Line from "@/components/atoms/Line";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const EduMagistratura = () => {
  const { t } = useTranslation();

  const magistracy = [
    {
      id: 1,
      title: t("auto.components.pages.education.EduMagistratura.22"),
      content: null,
    },
    {
      id: 2,
      title: t("auto.components.pages.education.EduMagistratura.23"),
      content: (
      <div className="flex flex-col gap-6 text-sinii text-[15px]">
        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduMagistratura.1")}</h3>
          <ul className="list-disc list-inside space-y-1 text-[#1a1a1a]">
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.2")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.3")}</a>
            </li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">
            {t("auto.components.pages.education.EduMagistratura.4")}</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.5")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.6")}</a>
            </li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduMagistratura.7")}</h3>
          <ul className="list-disc list-inside text-[#1a1a1a]">
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.8")}</a>
            </li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduMagistratura.9")}</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.10")}</a>
            </li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">{t("auto.components.pages.education.EduMagistratura.11")}</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.12")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.13")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.14")}</a>
            </li>
          </ul>
        </section>

        {}
        <section>
          <h3 className="font-semibold mb-2">
            {t("auto.components.pages.education.EduMagistratura.15")}</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.16")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.17")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.18")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.19")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.20")}</a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                {t("auto.components.pages.education.EduMagistratura.21")}</a>
            </li>
          </ul>
        </section>
      </div>
    ),
  },
    {
      id: 3,
      title: t("auto.components.pages.education.EduMagistratura.24"),
      content: null,
    },
    {
      id: 4,
      title: t("auto.components.pages.education.EduMagistratura.25"),
      content: null,
    },
    {
      id: 5,
      title: t("auto.components.pages.education.EduMagistratura.26"),
      content: null,
    },
  ];

  return (
    <div className="w-full space-y-3 mt-6">
      <Line title={t("sidebar.education.magistr")} />

      {magistracy.map((item) => (
        <Accordion
          key={item.id}
          type="single"
          collapsible
          className="w-full rounded-xl bg-[#f4f7ff] p-3"
        >
          <AccordionItem value={`item-${item.id}`}>
            <AccordionTrigger className="text-sm sm:text-base md:text-[18px] text-sinii text-left">
              {item.title}
            </AccordionTrigger>

            {item.content && (
              <AccordionContent className="p-4 rounded-xl bg-[#eef3ff]">
                {item.content}
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default EduMagistratura;
