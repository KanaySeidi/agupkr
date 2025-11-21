import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

export default function EduAspirantura() {
  const { t } = useTranslation();

  return (
    <div className="space-y-3 mt-6">
      <Line title={t("sidebar.education.aspirant")} />

      <p className="text-[18px] text-sinii mt-5">
        Аспирантура — общая информация
      </p>

      <div className="flex flex-col gap-6 text-sinii text-[15px]">
        <section className="space-y-3 text-[#1a1a1a]">
          <p>
            Аспирантура — это одна из основных форм подготовки научных и
            научно-педагогических кадров в системе послевузовского
            профессионального образования Кыргызской Республики.
          </p>
          <p>
            В Академии государственного управления при Президенте КР подготовка
            аспирантов осуществляется по научным специальностям в соответствии
            с:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>
              Лицензией и приказами Министерства образования Кыргызской
              Республики
            </li>
            <li>
              Положением о подготовке научных и научно-педагогических кадров в
              Кыргызской Республике
            </li>
          </ul>
        </section>

        {/* Курсы */}
        <section>
          <h3 className="font-semibold mb-2">
            Курсы для кандидатского минимума
          </h3>
          <ul className="list-disc list-inside space-y-1 text-[#1a1a1a]">
            <li>История и философия науки</li>
            <li>Государственный язык</li>
            <li>Иностранный язык</li>
          </ul>
        </section>

        {/* Возможности */}
        <section>
          <h3 className="font-semibold mb-2">
            Также предоставляется возможность:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-[#1a1a1a]">
            <li>
              Апробации результатов исследований на конференциях, семинарах и
              круглых столах
            </li>
            <li>Публикации научных статей в журнале «Вестник»</li>
          </ul>
        </section>

        {/* Специальности */}
        <section>
          <h3 className="font-semibold mb-2">Научные специальности</h3>
          <p className="text-[#1a1a1a] mb-2">
            Подготовка аспирантов ведется по 4 специальностям:
          </p>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              08.00.05 — Отраслевая экономика (экономика, организация и
              управление отраслями, предприятиями, комплексами)
            </li>
            <li>08.00.10 — Финансы, денежное обращение и кредит</li>
            <li>23.00.02 — Политические институты, процессы и технологии</li>
            <li>12.00.02 — Конституционное право, муниципальное право</li>
          </ul>
        </section>

        {/* Документы */}
        <section>
          <h3 className="font-semibold mb-2">Документы для поступления</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              Заявление абитуриента на имя Ректора АГУПКР с указанием
              специальности и формы обучения
            </li>
            <li>
              Личный листок по учету кадров (анкета), заверенный кадровой
              службой
            </li>
            <li>Копия трудовой книжки (заверенная)</li>
            <li>Резюме</li>
            <li>Копия паспорта</li>
            <li>
              Нотариально заверенная копия диплома (специалист или магистр)
            </li>
            <li>2 фотографии 3×4</li>
            <li>Вступительный реферат (20–25 страниц)</li>
          </ul>
        </section>

        {/* Сроки обучения */}
        <section>
          <h3 className="font-semibold mb-2">Сроки обучения</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>Очная форма — 3 года</li>
            <li>Заочная форма — 4 года</li>
          </ul>
        </section>

        {/* Нормативные документы */}
        <section>
          <h3 className="font-semibold mb-2">Нормативные документы</h3>
          <ul className="list-disc list-inside text-[#1a1a1a] space-y-1">
            <li>
              <a className="text-sinii underline" href="#">
                Приказ об открытии аспирантуры АГУПКР (pdf)
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Приказ об открытии докторантуры АГУПКР (pdf)
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Новые требования ВАК КР об ученых степенях
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Положение о рейтинговой оценке деятельности научных организаций
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Положение о педагогической практике аспирантов
              </a>
            </li>
            <li>
              <a className="text-sinii underline" href="#">
                Положение о подготовке научно-педагогических кадров
              </a>
            </li>
          </ul>
        </section>

        {/* Аспиранты и докторанты */}
        <section>
          <h3 className="font-semibold mb-2">Аспиранты АГУПКР</h3>
          <h3 className="font-semibold">Докторанты АГУПКР</h3>
        </section>
      </div>
    </div>
  );
}
