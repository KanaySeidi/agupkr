import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full">
        <Line title={t("sidebar.education.index")} />
        <main className="max-w-6xl mx-auto p-6 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-700">
              АГУПКР — национальный профильный ВУЗ, учрежденный Президентом
              Кыргызской Республики.
            </h1>
            <p className="mt-5 text-lg text-sinii ">
              СИЛЬНЫЕ КАДРЫ – СИЛЬНАЯ СТРАНА!
            </p>
          </header>

          <section className="mb-8 bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Перспективно
            </h2>
            <ul className="space-y-3 list-inside">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>
                  Подготовка управленцев нового формата, способных стать элитой
                  государственного и муниципального управления, экономики,
                  менеджмента, политологии и юриспруденции;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>Высокие стандарты обучения и разнообразие курсов;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>
                  Престижные профессии, востребованные на рынке труда;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>
                  Высокое качество образования и признание диплома за рубежом;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>
                  Стажировка и практика в государственном секторе, крупнейших
                  компаниях и предприятиях республики и за рубежом;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-sky-600">•</span>
                <span>Высокий уровень трудоустройства.</span>
              </li>
            </ul>
          </section>

          <section className="mb-8 grid gap-6 md:grid-cols-2">
            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Доступно
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>
                    Обучение в учебных корпусах и аудиториях, оснащенных
                    мультимедийным оборудованием, современными конференц-залами,
                    компьютерными классами с новейшим программным обеспечением;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Возможность совмещать работу и учебу;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Использование электронной библиотеки;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Обучение по приемлемой цене;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Участие в международных программах обмена;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Проживание в общежитии;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Отдых в пансионате на озере Ыссык-Куль.</span>
                </li>
              </ul>
            </article>

            <article className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Качественно
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>
                    Обучение по инновационным программам у ведущих отечественных
                    и зарубежных экспертов;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>
                    Возможность вести научные исследования под руководством
                    известных учёных и опытных преподавателей;
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>
                    Участие в интересных молодёжных проектах и внедрение их в
                    реальную жизнь.
                  </span>
                </li>
              </ul>
            </article>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-5">
              АГУПКР — престижные профессии
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  Государственное и муниципальное управление
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Уровень обучения:{" "}
                  <span className="font-medium">бакалавр, магистр</span>
                </p>
                <p className="font-semibold mb-2">Профессии:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>
                    Специалист по государственному и муниципальному управлению
                  </li>
                  <li>Специалист по антикризисному управлению</li>
                  <li>Лоббист государственного служащего</li>
                  <li>Менеджер отдела/департамента</li>
                  <li>CR-директор; CR-менеджер</li>
                  <li>Консультант</li>
                  <li>
                    Представитель компании или консалтинговых агентств на
                    международном уровне
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  Менеджмент
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Уровень обучения:{" "}
                  <span className="font-medium">бакалавр, магистр</span>
                </p>
                <p className="font-semibold mb-2">Профессии:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>Топ-менеджер</li>
                  <li>Бренд-менеджер</li>
                  <li>Тендер-менеджер</li>
                  <li>Менеджер по продажам</li>
                  <li>Менеджер по закупкам</li>
                  <li>Офис-менеджер</li>
                  <li>Менеджер по развитию</li>
                  <li>Антикризисный управляющий</li>
                  <li>Менеджер проекта</li>
                  <li>Управленец малого и среднего бизнеса</li>
                  <li>Коммерческий директор</li>
                  <li>Менеджер по персоналу</li>
                  <li>Менеджер по туризму и гостиничному бизнесу</li>
                  <li>
                    Менеджер в образовании, здравоохранении, транспорте и др.
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  Экономика
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Уровень обучения:{" "}
                  <span className="font-medium">бакалавр, магистр</span>
                </p>
                <p className="font-semibold mb-2">Профессии:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>Экономист</li>
                  <li>Бренд-экономист</li>
                  <li>Руководитель экономических и финансовых служб</li>
                  <li>Аудитор</li>
                  <li>Бухгалтер</li>
                  <li>Ревизор</li>
                  <li>Финансовый аналитик</li>
                  <li>Эксперт по экономическим вопросам</li>
                  <li>
                    Специалист финансовых, налоговых, страховых учреждений, НИИ,
                    отделов продаж и поставок
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  Юриспруденция
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Уровень обучения:{" "}
                  <span className="font-medium">бакалавр, магистр</span>
                </p>
                <p className="font-semibold mb-2">Профессии:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>Юрист в сфере государственной и муниципальной службы</li>
                  <li>Юрист-консультант</li>
                  <li>Государственный исполнитель</li>
                  <li>Нотариус</li>
                  <li>Арбитражный управляющий</li>
                  <li>Корпоративный юрист</li>
                  <li>Медиатор</li>
                  <li>Коллектор</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-5 md:col-span-2">
                <h4 className="text-lg font-semibold text-sky-700 mb-2">
                  Политология
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Уровень обучения: <span className="font-medium">магистр</span>
                </p>
                <p className="font-semibold mb-2">Профессии:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-slate-700">
                  <li>Политолог</li>
                  <li>Эксперт-политолог</li>
                  <li>Политический аналитик</li>
                  <li>Советник-консультант</li>
                  <li>Политтехнолог</li>
                  <li>Менеджер избирательных кампаний</li>
                  <li>Имиджмейкер политического лидера</li>
                  <li>
                    Сотрудник аналитических отделов и центров политических
                    исследований
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-6 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Дистанционные технологии обучения
            </h2>

            <div className="md:flex md:gap-6">
              <div className="md:flex-1">
                <h3 className="text-lg font-medium text-slate-800 mb-2">
                  Преимущества
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>Независимость в выборе образовательного режима;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>Возможность совмещать работу с обучением;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>Сокращение расходов на обучение и материалы;</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-sky-600">•</span>
                    <span>Персональный подход к каждому студенту.</span>
                  </li>
                </ul>
              </div>

              <div className="md:w-72 mt-6 md:mt-0">
                <h3 className="text-lg font-medium text-slate-800 mb-2">
                  Порталы
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <a
                      className="text-sky-600 hover:underline"
                      href="http://avn.apap.kg/"
                      target="_blank"
                      rel="noopener"
                    >
                      avn.apap.kg
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-sky-600 hover:underline"
                      href="http://lms.inai.kg/Account/Login?ReturnUrl=%2F"
                      target="_blank"
                      rel="noopener"
                    >
                      lms.inai.kg
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium text-slate-800 mb-2">
                Функциональные возможности
              </h3>
              <ul className="grid gap-2 md:grid-cols-2 list-inside">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Интернет-лекции и семинары</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Электронная библиотека</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Онлайн-тестирование</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Видео учебные материалы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Вебинары, тренинги и практикумы</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-600">•</span>
                  <span>Блоги, чаты, форумы</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 font-semibold text-slate-900">
              Качество образования и Ваш комфорт — наша забота!
            </p>
          </section>
        </main>
      </div>
    </>
  );
};

export default Education;
