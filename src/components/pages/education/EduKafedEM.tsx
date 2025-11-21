import kafedraEM from "@/assets/img/kafedraEM.png";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";

const EduKafedEM = () => {
  type StaffMember = {
    name: string;
    title?: string;
    resumeUrl?: string; // ссылка на pdf (или пока placeholder)
  };

  const { t } = useTranslation();

  const STAFF: StaffMember[] = [
    {
      name: "Жума кызы Раиза",
      title: "д.э.н., профессор",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Тентимишова Г.К.",
      title: "ст. преподаватель, менеджер кафедры.",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Абдразакова А.М.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Абдынасыров У.Т.",
      title: "д.э.н., профессор АГУП КР",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Алимбаева Ш.Б.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Байсубанова С.Т.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Биримкулова А.Д.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Досалиев Б.А.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Жолонбаева А.Ж.",
      title: "к.э.н., и.о.доцента",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Кадырбердиева А.С.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Китаева М.М.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Макембаева К.И.",
      title: "к.э.н., и.о.доцента",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Мажитов А.С.",
      title: "старший преподаватель",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Нукеева М.А.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Окенаева М.Ж.",
      title: "к.с.н., и.о.доцента",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Суйуналиева Б.Ш.",
      title: "к.э.н., и.о. доцента",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Супатаева Н.Т.",
      title: "к.э.н., профессор АГУП КР",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Токтобекова М.А.",
      title: "д.э.н., профессор АГУП КР",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Турсунова Н.М.",
      title: "ст. преподаватель",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Фреюк Г.В.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Тагайбекова Ж.Т.",
      title: "преподаватель",
      resumeUrl: "/mnt/data/121212.png",
    },
    {
      name: "Эралиева А.А.",
      title: "к.э.н., доцент",
      resumeUrl: "/mnt/data/121212.png",
    },
  ];

  return (
    <>
      <section className="w-11/12 mx-auto p-6 rounded-2xl shadow-md space-y-6">
        <Line title={t("sidebar.education.kafedem")} />
        <div>
          <h3 className="text-xl font-bold text-sinii mt-5 mb-2">
            Миссия кафедры
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Миссия кафедры — подготовка высококвалифицированных экономистов и
            менеджеров, конкурентоспособных на рынке труда, эффективно
            осуществляющих взаимодействие в профессиональной и общественной
            среде и пользующихся устойчивым спросом у работодателей.
          </p>

          <h3 className="text-xl font-semibold text-sinii mt-5 mb-2">
            Учебно-методическая тема кафедры
          </h3>
          <p className="text-slate-700 leading-relaxed">
            «Модернизация образовательного процесса в АГУП КР в соответствии с
            требованиями ГОС ВПО и интересами работодателей как условие
            подготовки конкурентоспособного специалиста».
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-sinii mb-3">
            Основополагающие направления реализации темы
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
            <li>
              Определение места и роли кафедры и преподавателей в реализации
              научно-методической темы.
            </li>
            <li>
              Совершенствование качества преподавания и формирование
              профессиональной компетентности обучающихся.
            </li>
            <li>
              Формирование трудовых функций будущих специалистов с учётом
              потребностей рынка труда.
            </li>
            <li>
              Реализация требований государственных профессиональных стандартов
              по специальностям.
            </li>
            <li>
              Совершенствование технологий оценивания учебных достижений на
              основе компетентностного подхода.
            </li>
            <li>
              Создание условий для внедрения инновационных технологий обучения.
            </li>
            <li>
              Внедрение практико-ориентированных технологий и методов через
              инновационную деятельность.
            </li>
            <li>
              Развитие научно-исследовательской работы со студентами,
              магистрантами и аспирантами.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-sinii mb-3">История</h3>
          <p>
            Кафедра «Экономика и менеджмент» до 2019 года была в составе кафедры
            «Государственное управление, политические технологии, менеджмент и
            экономика». В 2019 году на основании приказа №17-П от 02.12.2019г.
            «Об образовании кафедр» кафедра была выделена из состава «ГМУПТМиЭ»,
            где в настоящее время сконцентрированы ведущие дисциплины
            общепрофессиональной подготовки студентов и магистрантов
            экономического направления и направления менеджмент.
          </p>
          <img
            src={kafedraEM}
            alt="Кафедра ЭМ"
            className="w-full h-full object-contain my-5"
          />
        </div>
        <div className="rounded-2xl shadow-md space-y-4 p-10">
          <h3 className="text-xl font-semibold text-sky-800">
            Профессорско-преподавательский состав
          </h3>

          <ul className="grid gap-3">
            {STAFF.map((s) => (
              <li
                key={s.name}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-100 bg-slate-50"
              >
                <div>
                  <div className="font-medium text-slate-900">{s.name}</div>
                  {s.title && (
                    <div className="text-sm text-slate-600">{s.title}</div>
                  )}
                </div>

                <a
                  href={s.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-sinii text-sinii hover:bg-sky-50"
                >
                  Открыть резюме
                  <ArrowToTop width={20} height={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md space-y-4 mt-6">
          <h3 className="text-2xl font-bold text-sinii">
            Образовательные программы
          </h3>

          <p className="text-slate-700 leading-relaxed">
            Образовательная деятельность кафедры по направлениям подготовки{" "}
            <span className="font-semibold">580100 «Экономика»</span> и{" "}
            <span className="font-semibold">580200 «Менеджмент»</span>{" "}
            проводится на основе Государственных образовательных стандартов
            Кыргызской Республики, утвержденного МОиН КР приказом №1578/1 от
            «21» сентября 2021 г.
          </p>

          <div>
            <h4 className="text-xl font-semibold text-sky-700 mb-2">
              Направление 580100 «Экономика», профили:
            </h4>

            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>«Учет, анализ и аудит»</li>
              <li>«Бухгалтерский учет, анализ и аудит»</li>
              <li>«Финансы и кредит»</li>
              <li>«Зеленая экономика»</li>
              <li>«Экономика и управление бизнесом»</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-sky-700 mb-2">
              Направление 580200 «Менеджмент», профили:
            </h4>

            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>«Деловое администрирование»</li>
              <li>«Менеджмент»</li>
              <li>«Проектный менеджмент»</li>
              <li>«Мастер территориального развития»</li>
              <li>«Менеджмент организаций»</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default EduKafedEM;
