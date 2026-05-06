
const journals = [
  { id: 1, title: "Вестник Академии государственного управления", field: "Государственное управление", issn: "1694-5239", freq: "Ежеквартально", access: true },
  { id: 2, title: "Государственное управление и государственная служба", field: "Государственная служба", issn: "2072-8557", freq: "2 раза в год", access: true },
  { id: 3, title: "Муниципальное управление", field: "МСУ", issn: "2220-4873", freq: "Ежемесячно", access: true },
  { id: 4, title: "Право и государство", field: "Право", issn: "1818-2682", freq: "Ежеквартально", access: true },
  { id: 5, title: "Вопросы государственного и муниципального управления", field: "Управление", issn: "1999-5431", freq: "Ежеквартально", access: false },
  { id: 6, title: "Государственная служба", field: "Государственная служба", issn: "2070-8378", freq: "2 раза в год", access: false },
  { id: 7, title: "Журнал российского права", field: "Право", issn: "1605-6590", freq: "Ежемесячно", access: false },
  { id: 8, title: "Финансы и кредит", field: "Финансы", issn: "2311-8709", freq: "Ежемесячно", access: false },
  { id: 9, title: "Экономика и управление", field: "Экономика", issn: "1814-1196", freq: "Ежеквартально", access: true },
];

const LibraryJournals = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-sinii mb-1">Электронные журналы</h1>
        <p className="text-sm text-slate-500">Научные и научно-практические периодические издания в открытом доступе</p>
      </div>

      <div className="flex gap-3 mb-5">
        <span className="flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Открытый доступ
        </span>
        <span className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full font-medium">
          <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" /> По запросу
        </span>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Название</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden md:table-cell">Область</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">ISSN</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide hidden lg:table-cell">Периодичность</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Доступ</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {journals.map((j) => (
              <tr key={j.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3.5">
                  <p className="font-medium text-slate-800 leading-snug">{j.title}</p>
                </td>
                <td className="px-4 py-3.5 hidden md:table-cell">
                  <span className="text-xs bg-[#E5F0FF] text-sinii px-2 py-0.5 rounded-full">{j.field}</span>
                </td>
                <td className="px-4 py-3.5 text-slate-500 text-xs hidden lg:table-cell">{j.issn}</td>
                <td className="px-4 py-3.5 text-slate-500 text-xs hidden lg:table-cell">{j.freq}</td>
                <td className="px-4 py-3.5 text-center">
                  {j.access ? (
                    <button className="inline-flex items-center gap-1 text-xs font-medium text-sinii hover:underline">
                      Читать →
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400">По запросу</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LibraryJournals;
