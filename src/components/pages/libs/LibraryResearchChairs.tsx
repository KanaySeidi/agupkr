
const chairs = [
  {
    id: 1,
    title: "Кафедра государственного и муниципального управления",
    head: "д.э.н., профессор Бейшенов А.К.",
    desc: "Исследования в области реформирования государственного управления, местного самоуправления и государственной службы Кыргызской Республики.",
    publications: 56,
    topics: ["Государственная служба", "МСУ", "Административная реформа"],
  },
  {
    id: 2,
    title: "Кафедра экономики и менеджмента",
    head: "к.э.н., доцент Мамытов Б.С.",
    desc: "Исследования в области экономики общественного сектора, государственного бюджета, антикоррупционной политики и управления государственными финансами.",
    publications: 38,
    topics: ["Государственные финансы", "Бюджетирование", "Антикоррупция"],
  },
  {
    id: 3,
    title: "Кафедра права и правоохранительной деятельности",
    head: "к.ю.н., доцент Токтосунова А.Б.",
    desc: "Правовые аспекты государственного управления, конституционное право, административное законодательство КР и международное публичное право.",
    publications: 44,
    topics: ["Административное право", "Конституционное право", "Законодательство КР"],
  },
  {
    id: 4,
    title: "Кафедра политологии и международных отношений",
    head: "д.п.н., профессор Сыдыков Э.А.",
    desc: "Изучение политических процессов, государственной политики, международных отношений и публичной дипломатии в контексте Центральноазиатского региона.",
    publications: 29,
    topics: ["Политология", "Международные отношения", "Публичная политика"],
  },
];

const LibraryResearchChairs = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">Научно-исследовательские кафедры</h1>
        <p className="text-sm text-slate-500">
          Публикации и исследовательские материалы кафедр Академии
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {chairs.map((chair) => (
          <div key={chair.id} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-sinii transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sinii text-base mb-0.5">{chair.title}</h3>
                <p className="text-xs text-slate-500 mb-3">Зав. кафедрой: {chair.head}</p>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{chair.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {chair.topics.map((topic) => (
                    <span key={topic} className="text-xs bg-[#E5F0FF] text-sinii px-2.5 py-1 rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Публикаций: <span className="font-semibold text-sinii">{chair.publications}</span>
                  </span>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-sinii hover:underline">
                    Все публикации →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryResearchChairs;
