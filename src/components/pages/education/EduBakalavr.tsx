import Line from "@/components/atoms/Line";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const EduBakalavr = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();

  const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  const directions = [
    {
      id: "gm",
      title: "Государственное и муниципальное управление (580900)",
      profiles: ["Государственное и муниципальное управление"],
    },
    {
      id: "econ",
      title: "Экономика (580100)",
      profiles: [
        "Финансы и кредит",
        "Бухгалтерский учет, анализ и аудит",
        "Экономика и управление бизнесом",
      ],
    },
    {
      id: "mgmt",
      title: "Менеджмент (580200)",
      profiles: [
        "Менеджмент организации (по отраслям и сферам деятельности)",
        "Финансовый менеджмент",
      ],
    },
    {
      id: "law",
      title: "Юриспруденция (530500)",
      profiles: ["Юрист в сфере государственной службы"],
    },
  ];

  return (
    <article className="w-11/12 mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-lg">
      <header className="mb-6">
        <Line title={t("sidebar.education.bakalavr")} />
        <h2 className="text-lg font-semibold text-slate-900 mt-5">
          Миссия Программы бакалавриата
        </h2>
        <p className="mt-3 text-sm md:text-base text-slate-700">
          Содействие целенаправленной подготовке высокопрофессиональных
          государственных и муниципальных служащих на уровне бакалаврских
          программ, обладающих теоретическими и профессиональными знаниями,
          организационно-управленческими навыками, коммуникативными качествами и
          социальной компетентностью, нацеленных на достижение успеха и умением
          быстро и эффективно принимать управленческие решения в сфере
          государственного и муниципального управления, экономики, менеджмента,
          а также юриспруденции.
        </p>
      </header>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">Цель программы</h2>
        <p className="mt-2 text-sm text-slate-700">
          Основной целью Программы является реализация образовательных программ
          Академии по подготовке высококвалифицированных кадров государственных
          и муниципальных служащих в сфере государственного и муниципального
          управления, экономики, менеджмента и юриспруденции Кыргызской
          Республики в соответствии с миссией Академии.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Образовательные программы
        </h2>

        <p className="mt-3 text-sm text-slate-700">
          Деятельность программы проводится на основе Государственных
          образовательных стандартов высшего профессионального образования КР.
          Программа бакалавриата организует и координирует учебный процесс по
          следующим направлениям подготовки:
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {directions.map((d) => (
            <div key={d.id} className="border rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {d.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Уровень обучения: бакалавр, магистр
                  </p>
                </div>

                <button
                  aria-expanded={!!open[d.id]}
                  onClick={() => toggle(d.id)}
                  className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm bg-sinii text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  {open[d.id] ? "Свернуть" : "Профили"}
                </button>
              </div>

              <div
                className={`mt-3 transition-all ${
                  open[d.id] ? "max-h-96" : "max-h-0 overflow-hidden"
                }`}
              >
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  {d.profiles.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Преимущества программ бакалавриата
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>
            Диплом о высшем образовании от одного из самых престижных
            отечественных вузов;
          </li>
          <li>
            Качественные профессиональные знания программы бакалавриата Академии
            высоко ценятся в КР и за рубежом;
          </li>
          <li>Обучение в Академии с президентским статусом;</li>
          <li>
            Участие зарубежных специалистов мирового уровня: семинары,
            мастер-классы и программы от партнерских вузов.
          </li>
        </ul>
      </section>
    </article>
  );
};

export default EduBakalavr;
