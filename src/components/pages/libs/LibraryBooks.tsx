import { useState } from "react";

const allBooks = [
  { id: 1, title: "Государственное управление", author: "Атаманчук Г.В.", year: 2022, category: "Управление", pages: 488, color: "from-blue-500 to-blue-700" },
  { id: 2, title: "Теория государства и права", author: "Марченко М.Н.", year: 2021, category: "Право", pages: 636, color: "from-purple-500 to-purple-700" },
  { id: 3, title: "Муниципальное право России", author: "Кутафин О.Е.", year: 2023, category: "МСУ", pages: 559, color: "from-teal-500 to-teal-700" },
  { id: 4, title: "Экономика государственного сектора", author: "Якобсон Л.И.", year: 2021, category: "Экономика", pages: 380, color: "from-amber-500 to-amber-700" },
  { id: 5, title: "Административное право", author: "Козлов Ю.М.", year: 2022, category: "Право", pages: 728, color: "from-rose-500 to-rose-700" },
  { id: 6, title: "Управление персоналом организации", author: "Кибанов А.Я.", year: 2023, category: "HR", pages: 695, color: "from-indigo-500 to-indigo-700" },
  { id: 7, title: "Финансовое право", author: "Горбунова О.Н.", year: 2020, category: "Право", pages: 512, color: "from-cyan-500 to-cyan-700" },
  { id: 8, title: "Государственная служба", author: "Граждан В.Д.", year: 2022, category: "Управление", pages: 460, color: "from-emerald-500 to-emerald-700" },
  { id: 9, title: "Публичная политика", author: "Соловьёв А.И.", year: 2023, category: "Политика", pages: 344, color: "from-orange-500 to-orange-700" },
  { id: 10, title: "Конституционное право России", author: "Баглай М.В.", year: 2021, category: "Право", pages: 816, color: "from-sky-500 to-sky-700" },
  { id: 11, title: "Бюджетная система Российской Федерации", author: "Романовский М.В.", year: 2022, category: "Финансы", pages: 520, color: "from-violet-500 to-violet-700" },
  { id: 12, title: "Политология", author: "Соловьёв А.И.", year: 2023, category: "Политика", pages: 400, color: "from-pink-500 to-pink-700" },
];

const categories = ["Все", "Управление", "Право", "МСУ", "Экономика", "Политика", "Финансы", "HR"];

const LibraryBooks = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = allBooks.filter((b) => {
    const matchCat = activeCategory === "Все" || b.category === activeCategory;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">Электронные книги</h1>
        <p className="text-sm text-slate-500">Учебники, монографии и справочные издания</p>
      </div>

      {/* Поиск */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Поиск по названию или автору..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:border-sinii transition-colors"
        />
      </div>

      {/* Фильтр по категориям */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              activeCategory === cat
                ? "bg-sinii text-white border-sinii"
                : "border-slate-300 text-slate-600 hover:border-sinii hover:text-sinii"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-400 text-center py-12">Ничего не найдено</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((book) => (
            <div key={book.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-sinii transition-all duration-200 overflow-hidden flex flex-col">
              <div className={`h-32 bg-gradient-to-br ${book.color}`} />
              <div className="p-3 flex flex-col gap-1.5 flex-1">
                <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full w-fit">{book.category}</span>
                <p className="text-xs font-semibold text-slate-800 leading-snug line-clamp-2">{book.title}</p>
                <p className="text-xs text-slate-500">{book.author}</p>
                <div className="flex items-center justify-between mt-auto pt-1">
                  <span className="text-xs text-slate-400">{book.year} · {book.pages} с.</span>
                  <button className="text-xs font-medium text-sinii hover:underline">Читать</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LibraryBooks;
