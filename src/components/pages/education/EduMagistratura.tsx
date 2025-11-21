import Line from "@/components/atoms/Line";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const magistracy = [
  {
    id: 1,
    title: 'Направление 580900 "Государственное и муниципальное управление"',
    content: null,
  },
  {
    id: 2,
    title: 'Направление 580100 "Экономика"',
    content: (
      <div className="flex flex-col gap-6 text-sinii text-[15px]">
        {/* ГОС */}
        <section>
          <h3 className="font-semibold mb-2">ГОС ВПО КР</h3>
          <ul className="list-disc list-inside space-y-1 text-[#1a1a1a]">
            <li>
              <a className="text-sinii underline" href="#">
                Государственный образовательный стандарт ВПО_Государственное и
                муниципальное управление_магистр
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Государственный образовательный стандарт ВПО_Государственное и
                муниципальное управление_магистр_2021
              </a>
            </li>
          </ul>
        </section>

        {/* Основная образовательная программа */}
        <section>
          <h3 className="font-semibold mb-2">
            Основная образовательная программа
          </h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                ООП Государственное и муниципальное управление
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Положение об ООП_ГМУ
              </a>
            </li>
          </ul>
        </section>

        {/* Стратегия развития */}
        <section>
          <h3 className="font-semibold mb-2">Стратегия развития ООП</h3>
          <ul className="list-disc list-inside text-[#1a1a1a]">
            <li>
              <a className="text-sinii underline" href="#">
                Стратегия развития ООП ГМУ
              </a>
            </li>
          </ul>
        </section>

        {/* Примерный учебный план */}
        <section>
          <h3 className="font-semibold mb-2">Примерный учебный план</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                ПУП_Государственное и муниципальное управление
              </a>
            </li>
          </ul>
        </section>

        {/* Рабочий учебный план */}
        <section>
          <h3 className="font-semibold mb-2">Рабочий учебный план</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                РУП_Государственное управление и экономика устойчивого развития
                24
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                РУП_Цифровое государственное управление 24
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                РУП_Государственное управление и экономика социальной сферы 24
              </a>
            </li>
          </ul>
        </section>

        {/* ИГА */}
        <section>
          <h3 className="font-semibold mb-2">
            Итоговая государственная аттестация
          </h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                Программа ГАК МСУ-2022 г.
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Программа ГАК ГМУ_2022
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Программа ГАК ГПУ_2022
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Программа ГАК ГУЭС_2022
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Программа ГАК ГУЭСР_2022
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Программа ГАК ЦГУ_2022
              </a>
            </li>
          </ul>
        </section>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Направление 580200 "Менеджмент"',
    content: null,
  },
  {
    id: 4,
    title: 'Направление 530500 "Юриспруденция"',
    content: null,
  },
  {
    id: 5,
    title: "Совместные магистерские программы с Фондом Ханнса Зайделя",
    content: null,
  },
];

const EduMagistratura = () => {
  const { t } = useTranslation();

  return (
    <div className="w-11/12 mx-auto space-y-3 mt-6">
      <Line title={t("sidebar.education.magistr")} />

      {magistracy.map((item) => (
        <Accordion
          key={item.id}
          type="single"
          collapsible
          className="w-full rounded-xl bg-[#f4f7ff] p-3"
        >
          <AccordionItem value={`item-${item.id}`}>
            <AccordionTrigger className="text-[18px] text-sinii">
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
