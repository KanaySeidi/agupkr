import React, { useState } from "react";

interface PdfVariant {
  label: string;
  href: string;
}

interface CourseInfo {
  label: string;
  variants: PdfVariant[];
}

interface ProgramCard {
  title: string;
  icon: string;
  courses: CourseInfo[];
}

const programCards: ProgramCard[] = [
  {
    title: "Бакалавриат",
    icon: "🎓",
    courses: [
      {
        label: "2 курс",
        variants: [
          {
            label: "ГМУ 24 (1, 2, 3)",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_2%20%D0%BA%D1%83%D1%80%D1%81%20_%D0%93%D0%9C%D0%A3-1%2C2%2C3-24.pdf",
          },
          {
            label: "ГМУ 24 (3, 4, 5)",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_2%20%D0%BA%D1%83%D1%80%D1%81%20%D0%93%D0%9C%D0%A3-4%2C5%2C6-24.pdf",
          },
          {
            label: "ЮСГСзи-23, ГМУзи-23, ПМЕНзи-23, ГФФБзи-23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/241025/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_%D0%AE%D0%A1%D0%93%D0%A1%D0%B7%D0%B8-23%2C%20%D0%93%D0%9C%D0%A3%D0%B7%D0%B8-23%2C%20%D0%9F%D0%9C%D0%95%D0%9D%20%D0%B7%D0%B8-23%2C%20%D0%93%D0%A4%D0%A4%D0%91%D0%B7%D0%B8-23.PDF",
          },
          {
            label: "ЗИМА",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/260925/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%202%20%D0%BA%D1%83%D1%80%D1%81%20%D0%97%D0%98%D0%9C%D0%90%20%D0%B0%D0%BA%D1%8B%D1%80%D0%BA%D1%8B.pdf",
          },
          {
            label: "ГМУ-1,2,3,4,5,6-24 · ГРАФИК ПК1,2-ИК",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/161025/%D0%9F%D0%91%202%20%D0%BA%D1%83%D1%80%D1%81_%20%D0%93%D0%9C%D0%A3-1%2C2%2C3%2C4%2C5%2C6-24%20_%20%D0%93%D0%A0%D0%90%D0%A4%D0%98%D0%9A%20%D0%9F%D0%9A1%2C2-%D0%98%D0%9A.pdf",
          },
        ],
      },
      {
        label: "3 курс",
        variants: [
          {
            label: "ГМУ-23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%93%D0%9C%D0%A323.pdf",
          },
          {
            label: "МЕН-23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%9F%D0%9C%D0%95%D0%9D23.pdf",
          },
          {
            label: "ЭКОН-23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/041125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%AD%D0%9A23_03.11-13.12.pdf",
          },
          {
            label: "ЮСГС-23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/041125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%AE%D0%A1%D0%93%D0%A123_03.11-13.12.pdf",
          },
        ],
      },
      {
        label: "4 курс",
        variants: [
          {
            label: "ГМУ-22",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_4%20%D0%BA%D1%83%D1%80%D1%81_%D0%93%D0%9C%D0%A31%2C2%2C-22.pdf",
          },
          {
            label: "ЭКМЕН-22",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/131025/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%204%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%AD%D0%9A%D0%9C%D0%95%D0%9D22%2013.10-18.10.pdf",
          },
          {
            label: "ЮСГС-22",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_4%20%D0%BA%D1%83%D1%80%D1%81_%D0%AE%D0%A1%D0%93%D0%A1-1%2C2-22.pdf",
          },
          {
            label: "БУА-22 / ЭУБ-22 / МЕН-22",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_4%20%D0%BA%D1%83%D1%80%D1%81_%D0%91%D0%A3%D0%90%2C%D0%AD%D0%A3%D0%91%2C%D0%9C%D0%95%D0%9D-22.pdf",
          },
          {
            label: "ГМУ-1,2 · БУА · МЕН · ЭУБ · ЮСГС-1,2-22 · ГРАФИК ПК1,2-ИК",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/161025/%D0%9F%D0%91%204%20%D0%BA%D1%83%D1%80%D1%81_%D0%93%D0%9C%D0%A3-1%2C2%2C_%D0%91%D0%A3%D0%90_%20%D0%9C%D0%95%D0%9D_%D0%AD%D0%A3%D0%91_%20%D0%AE%D0%A1%D0%93%D0%A11%2C2%20-22%20%20%D0%93%D0%A0%D0%90%D0%A4%D0%98%D0%9A%20%D0%9F%D0%9A1%2C2-%20%D0%98%D0%9A.pdf",
          },
        ],
      },
    ],
  },
  {
    title: "Магистратура",
    icon: "📚",
    courses: [
      {
        label: "1 курс",
        variants: [
          { label: "ГМУ", href: "/pdf/mag/1/gmu.pdf" },
          { label: "ЗИМА", href: "/pdf/mag/1/zima.pdf" },
        ],
      },
      {
        label: "2 курс",
        variants: [
          { label: "ГМУ", href: "/pdf/mag/2/gmu.pdf" },
          { label: "ЗИМА", href: "/pdf/mag/2/zima.pdf" },
        ],
      },
    ],
  },
];

const PdfIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const ProgramBlock: React.FC<{ data: ProgramCard }> = ({ data }) => {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);
  const activeCourse = data.courses[activeCourseIndex] ?? null;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-bold text-sinii">{data.title}</h2>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.courses.map((course, idx) => {
          const isActive = idx === activeCourseIndex;
          return (
            <button
              key={course.label}
              type="button"
              onClick={() => setActiveCourseIndex(idx)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-sinii text-white border-sinii shadow"
                  : "border-slate-300 text-slate-600 hover:border-sinii hover:text-sinii"
              }`}
            >
              {course.label}
            </button>
          );
        })}
      </div>

      {activeCourse ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {activeCourse.variants.map((variant) => (
            <a
              key={variant.label}
              href={variant.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-slate-200 bg-white hover:border-sinii hover:bg-blue-50 hover:text-sinii text-slate-700 transition-all duration-150 group"
            >
              <span className="text-slate-400 group-hover:text-sinii transition-colors">
                <PdfIcon />
              </span>
              <span className="text-sm font-medium leading-snug">
                {variant.label}
              </span>
            </a>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-400 italic">
          Материалы пока не добавлены
        </p>
      )}
    </div>
  );
};

const PdfBento: React.FC = () => {
  return (
    <section className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-sinii mb-1">
          Расписание занятий
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {programCards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <ProgramBlock data={card} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PdfBento;
