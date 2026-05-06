
const books = [
  { id: 1, title: "Государственное управление в условиях цифровизации", author: "Бейшенов А.К.", year: 2024, category: "Управление", color: "from-blue-500 to-blue-700" },
  { id: 2, title: "Публичная политика и реформы государственных институтов", author: "Джумалиев М.Д.", year: 2024, category: "Политика", color: "from-indigo-500 to-indigo-700" },
  { id: 3, title: "Местное самоуправление: теория и практика", author: "Асанов Т.Р.", year: 2024, category: "МСУ", color: "from-teal-500 to-teal-700" },
  { id: 4, title: "Административное право Кыргызской Республики", author: "Токтосунова А.Б.", year: 2024, category: "Право", color: "from-purple-500 to-purple-700" },
  { id: 5, title: "Бюджетное планирование и финансовый контроль", author: "Мамытов Б.С.", year: 2024, category: "Финансы", color: "from-orange-500 to-orange-700" },
  { id: 6, title: "Управление персоналом в государственных органах", author: "Иванова Н.В.", year: 2024, category: "HR", color: "from-rose-500 to-rose-700" },
  { id: 7, title: "Антикоррупционная политика: международный опыт", author: "Сыдыков Э.А.", year: 2023, category: "Управление", color: "from-emerald-500 to-emerald-700" },
  { id: 8, title: "Конституционное право стран СНГ", author: "Абдыкалыков К.Т.", year: 2023, category: "Право", color: "from-cyan-500 to-cyan-700" },
  { id: 9, title: "Экономика общественного сектора", author: "Жумабаева Г.К.", year: 2023, category: "Экономика", color: "from-amber-500 to-amber-700" },
];

const LibraryNewArrivals = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">Новые поступления</h1>
        <p className="text-sm text-slate-500">Актуальные издания, поступившие в фонд библиотеки</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <div key={book.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sinii transition-all duration-200 overflow-hidden flex flex-col">
            {/* Обложка */}
            <div className={`h-40 bg-gradient-to-br ${book.color}`} />
            <div className="p-4 flex flex-col gap-2 flex-1">
              <span className="text-xs font-medium bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full w-fit">
                {book.category}
              </span>
              <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2">
                {book.title}
              </p>
              <p className="text-xs text-slate-500">{book.author}</p>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span className="text-xs text-slate-400">{book.year}</span>
                <button className="text-xs font-medium text-sinii border border-sinii rounded-full px-3 py-1 hover:bg-sinii hover:text-white transition-colors">
                  Читать
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryNewArrivals;
