import { useNavigate } from "react-router-dom";

const sections = [
  { title: "Новые поступления", desc: "Последние книги и издания, поступившие в фонд библиотеки", count: "24 новых книги", path: "/library/new-arrive" },
  { title: "Электронные журналы", desc: "Научные и научно-практические периодические издания", count: "18 журналов", path: "/library/journals" },
  { title: "Электронные книги", desc: "Учебники, монографии и справочные издания в цифровом формате", count: "340 изданий", path: "/library/e-book" },
  { title: "Научно-исследовательские кафедры", desc: "Публикации и материалы научно-исследовательских кафедр Академии", count: "4 кафедры", path: "/library/research" },
  { title: "Кафедра ГМУ", desc: "Материалы кафедры государственного и муниципального управления", count: "56 публикаций", path: "/library/samd" },
  { title: "НИР / НИРС", desc: "Научно-исследовательские работы преподавателей и студентов", count: "120 работ", path: "/library/nir" },
];

const Library = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sinii mb-2">Электронная библиотека</h1>
        <p className="text-slate-500 text-sm max-w-2xl">
          Добро пожаловать в электронную библиотеку Академии государственного управления.
          Здесь вы найдёте учебники, научные журналы, монографии и исследовательские работы
          в открытом доступе.
        </p>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: "Книг и изданий", value: "340+" },
          { label: "Журналов", value: "18" },
          { label: "Научных работ", value: "120+" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <p className="text-3xl font-bold text-sinii">{s.value}</p>
            <p className="text-sm text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Разделы */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sections.map((sec) => (
          <div
            key={sec.path}
            onClick={() => navigate(sec.path)}
            className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-sinii transition-all duration-200 flex flex-col gap-2"
          >
            <h3 className="font-semibold text-sinii text-base">{sec.title}</h3>
            <p className="text-sm text-slate-500 leading-snug flex-1">{sec.desc}</p>
            <span className="text-xs font-medium text-slate-400 mt-2">{sec.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
