
const publications = [
  { id: 1, title: "Реформирование государственной службы в Кыргызской Республике: вызовы и перспективы", author: "Бейшенов А.К., Асанов Т.Р.", year: 2024, type: "Монография" },
  { id: 2, title: "Местное самоуправление в условиях децентрализации", author: "Джумалиев М.Д.", year: 2024, type: "Статья" },
  { id: 3, title: "Оценка эффективности государственных программ: методологический подход", author: "Бейшенов А.К.", year: 2023, type: "Учебное пособие" },
  { id: 4, title: "Цифровая трансформация государственного управления", author: "Токтосунова А.Б., Асанов Т.Р.", year: 2023, type: "Статья" },
  { id: 5, title: "Государственная кадровая политика КР", author: "Мамытов Б.С.", year: 2023, type: "Монография" },
  { id: 6, title: "Антикоррупционные механизмы в системе госуправления", author: "Сыдыков Э.А.", year: 2022, type: "Учебное пособие" },
];

const staff = [
  { name: "Бейшенов А.К.", role: "Заведующий кафедрой, д.э.н., профессор" },
  { name: "Джумалиев М.Д.", role: "Доцент, к.п.н." },
  { name: "Асанов Т.Р.", role: "Старший преподаватель" },
  { name: "Мамытов Б.С.", role: "Доцент, к.э.н." },
];

const typeColors: Record<string, string> = {
  "Монография": "bg-blue-50 text-blue-700",
  "Статья": "bg-emerald-50 text-emerald-700",
  "Учебное пособие": "bg-amber-50 text-amber-700",
};

const LibrarySAMDepartment = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">
          Кафедра государственного и муниципального управления
        </h1>
        <p className="text-sm text-slate-500">
          Публикации, учебные материалы и научные труды кафедры ГМУ
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* О кафедре */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-sinii mb-3">О кафедре</h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            Кафедра государственного и муниципального управления является одним из ведущих
            структурных подразделений Академии. Кафедра осуществляет подготовку специалистов
            в области государственного управления и местного самоуправления, ведёт активную
            научно-исследовательскую деятельность.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mt-3">
            Основные направления научной деятельности: реформирование государственной службы,
            местное самоуправление, антикоррупционная политика, цифровая трансформация
            государственного управления.
          </p>
        </div>

        {/* Состав */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="font-semibold text-sinii mb-3">Состав кафедры</h2>
          <ul className="flex flex-col gap-3">
            {staff.map((s) => (
              <li key={s.name} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <p className="text-sm font-medium text-slate-800">{s.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Публикации */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-sinii">Публикации кафедры</h2>
        </div>
        <ul className="divide-y divide-slate-100">
          {publications.map((pub) => (
            <li key={pub.id} className="px-6 py-4 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 leading-snug mb-1">{pub.title}</p>
                <p className="text-xs text-slate-500">{pub.author} · {pub.year}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeColors[pub.type]}`}>
                  {pub.type}
                </span>
                <button className="text-sm font-medium text-sinii hover:underline">→</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LibrarySAMDepartment;
