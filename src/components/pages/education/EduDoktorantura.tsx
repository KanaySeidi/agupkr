import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

export default function EduDoktorantura() {
  const { t } = useTranslation();

  return (
    <article className="w-full p-6 md:p-10 rounded-2xl shadow-lg space-y-8">
      <header>
        <Line title={t("sidebar.education.doctor")} />

        <p className="text-[15px] text-[#1a1a1a] leading-relaxed mt-5">
          Докторантура — это высшая форма послевузовского образования,
          направленная на подготовку высококвалифицированных научных кадров.
        </p>

        <p className="text-[15px] text-[#1a1a1a] mt-3">
          Обучение ведется в соответствии с:
        </p>
        <ul className="list-disc list-inside text-[#1a1a1a] mt-2 space-y-1">
          <li>
            Лицензией и приказами Министерства образования Кыргызской Республики
          </li>
          <li>
            Положением о подготовке научных и научно-педагогических кадров в
            Кыргызской Республике
          </li>
        </ul>
      </header>

      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          Докторантам предоставляются
        </h3>

        <ul className="list-disc list-inside text-[#1a1a1a] space-y-1 text-[15px]">
          <li>Научно-методическая поддержка</li>
          <li>Участие в конференциях, семинарах, круглых столах</li>
          <li>Публикация результатов исследований в журнале «Вестник»</li>
        </ul>
      </section>

      {/* Специальности */}
      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          Прием в докторантуру осуществляется по специальностям
        </h3>

        <ul className="list-disc list-inside text-[#1a1a1a] space-y-1 text-[15px]">
          <li>23.00.02 — Политические институты, процессы и технологии</li>
          <li>
            08.00.05 — Отраслевая экономика (экономика, организация и управление
            отраслями, предприятиями, комплексами)
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          Документы для поступления
        </h3>

        <ul className="list-disc list-inside text-[#1a1a1a] text-[15px] space-y-1">
          <li>
            Заявление абитуриента на имя Ректора АГУПКР с указанием научной
            специальности и формы обучения
          </li>
          <li>Личный листок по учету кадров, заверенный кадровой службой</li>
          <li>Копия трудовой книжки (заверенная)</li>
          <li>Резюме</li>
          <li>Копия паспорта</li>
          <li>Нотариально заверенная копия диплома (специалист или магистр)</li>
          <li>2 фотографии 3×4</li>
          <li>Вступительный реферат по специальности (20–25 страниц)</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          Сроки обучения
        </h3>

        <ul className="list-disc list-inside text-[#1a1a1a] text-[15px] space-y-1">
          <li>Обучение в докторантуре — 5 лет</li>
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-sinii mb-2">
          Нормативные документы
        </h3>

        <ul className="list-disc list-inside text-[15px] text-[#1a1a1a] space-y-1">
          <li>
            <a href="#" className="text-sinii underline">
              Приказ об открытии аспирантуры АГУПКР (pdf)
            </a>
          </li>
          <li>
            <a href="#" className="text-sinii underline">
              Приказ об открытии докторантуры АГУПКР (pdf)
            </a>
          </li>
          <li>Приказ об открытии докторантуры АГУПКР</li>
          <li>
            <a href="#" className="text-sinii underline">
              Новые требования ВАК КР об ученых степенях и званиях (pdf)
            </a>
          </li>
          <li>
            Положение о рейтинговой оценке деятельности научных организаций и
            ученых-специалистов
          </li>
          <li>
            Положение о педагогической практике аспирантов Академии
            государственного управления при Президенте КР
          </li>
          <li>
            Положение о подготовке научно-педагогических и научных кадров в
            Кыргызской Республике
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-sinii">Аспиранты АГУПКР</h3>
        <h3 className="font-semibold text-sinii">Докторанты АГУПКР</h3>
      </section>
    </article>
  );
}
