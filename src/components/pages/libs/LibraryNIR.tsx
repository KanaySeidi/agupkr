import { useState } from "react";

const works = [
  { id: 1, title: "Совершенствование системы государственного управления в условиях цифровизации", author: "Бейшенов А.К.", type: "НИР", year: 2024, dept: "ГМУ" },
  { id: 2, title: "Оценка эффективности программ повышения квалификации государственных служащих КР", author: "Джумалиев М.Д., Асанов Т.Р.", type: "НИР", year: 2024, dept: "ГМУ" },
  { id: 3, title: "Антикоррупционные механизмы в органах исполнительной власти", author: "Сыдыков Э.А.", type: "НИР", year: 2023, dept: "Право" },
  { id: 4, title: "Финансовое обеспечение муниципальных образований", author: "Мамытов Б.С.", type: "НИР", year: 2023, dept: "ЭМ" },
  { id: 5, title: "Реализация принципа открытости в деятельности органов государственной власти", author: "Токтосунова А.Б.", type: "НИР", year: 2023, dept: "Право" },
  { id: 6, title: "Цифровизация государственных услуг: опыт стран СНГ", author: "Иванова Н.В.", type: "НИРС", year: 2024, dept: "ГМУ" },
  { id: 7, title: "Модели местного самоуправления: сравнительный анализ", author: "Калматова А.Э.", type: "НИРС", year: 2024, dept: "ГМУ" },
  { id: 8, title: "Государственный контроль и надзор в Кыргызской Республике", author: "Байтемиров Д.А.", type: "НИРС", year: 2023, dept: "Право" },
  { id: 9, title: "Бюджетная политика и межбюджетные отношения в КР", author: "Рысбаева Г.Т.", type: "НИРС", year: 2023, dept: "ЭМ" },
  { id: 10, title: "Международный опыт противодействия коррупции", author: "Абдыров К.М.", type: "НИРС", year: 2022, dept: "Право" },
];

const LibraryNIR = () => {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<"Все" | "НИР" | "НИРС">("Все");

  const filtered = works.filter((w) => {
    const matchType = activeType === "Все" || w.type === activeType;
    const matchSearch =
      w.title.toLowerCase().includes(search.toLowerCase()) ||
      w.author.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">НИР / НИРС</h1>
        <p className="text-sm text-slate-500">
          Научно-исследовательские работы преподавателей и студентов Академии
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Поиск */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Поиск по названию или автору..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-sinii transition-colors"
          />
        </div>
        {/* Тип */}
        <div className="flex gap-2">
          {(["Все", "НИР", "НИРС"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className={`px-5 py-2 rounded-xl text-sm font-medium border transition-colors ${
                activeType === t
                  ? "bg-sinii text-white border-sinii"
                  : "border-slate-300 text-slate-600 hover:border-sinii hover:text-sinii"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 mb-4 text-sm text-slate-500">
        <span>Найдено: <strong className="text-sinii">{filtered.length}</strong></span>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <ul className="divide-y divide-slate-100">
          {filtered.length === 0 ? (
            <li className="py-12 text-center text-slate-400 text-sm">Ничего не найдено</li>
          ) : (
            filtered.map((w) => (
              <li key={w.id} className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 leading-snug mb-1">{w.title}</p>
                  <p className="text-xs text-slate-500">{w.author} · {w.year}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0 pt-0.5">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    w.type === "НИР"
                      ? "bg-blue-50 text-blue-700"
                      : "bg-emerald-50 text-emerald-700"
                  }`}>
                    {w.type}
                  </span>
                  <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-1 rounded-full">{w.dept}</span>
                  <button className="text-sm font-medium text-sinii hover:underline">→</button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default LibraryNIR;
