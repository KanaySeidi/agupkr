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
  courses: CourseInfo[];
}

const programCards: ProgramCard[] = [
  {
    title: "Бакалавриат",
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
            label: "ПБ_ЮСГСзи-23, ГМУзи-23, ПМЕН зи-23, ГФФБзи-23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/241025/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_%D0%AE%D0%A1%D0%93%D0%A1%D0%B7%D0%B8-23%2C%20%D0%93%D0%9C%D0%A3%D0%B7%D0%B8-23%2C%20%D0%9F%D0%9C%D0%95%D0%9D%20%D0%B7%D0%B8-23%2C%20%D0%93%D0%A4%D0%A4%D0%91%D0%B7%D0%B8-23.PDF",
          },
          {
            label: "ЗИМА",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/260925/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%202%20%D0%BA%D1%83%D1%80%D1%81%20%D0%97%D0%98%D0%9C%D0%90%20%D0%B0%D0%BA%D1%8B%D1%80%D0%BA%D1%8B.pdf",
          },
          {
            label: "ПБ 2 курс_ ГМУ-1,2,3,4,5,6-24 _ ГРАФИК ПК1,2-ИК",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/161025/%D0%9F%D0%91%202%20%D0%BA%D1%83%D1%80%D1%81_%20%D0%93%D0%9C%D0%A3-1%2C2%2C3%2C4%2C5%2C6-24%20_%20%D0%93%D0%A0%D0%90%D0%A4%D0%98%D0%9A%20%D0%9F%D0%9A1%2C2-%D0%98%D0%9A.pdf",
          },
        ],
      },
      {
        label: "3 курс",
        variants: [
          {
            label: "ПБ_ГМУ23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%93%D0%9C%D0%A323.pdf",
          },
          {
            label: "ПБ_МЕН23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%9F%D0%9C%D0%95%D0%9D23.pdf",
          },
          {
            label: "ПБ_ЭКОН23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/041125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%AD%D0%9A23_03.11-13.12.pdf",
          },
          {
            label: "ПБ_ЮСГС23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/041125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%203%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%AE%D0%A1%D0%93%D0%A123_03.11-13.12.pdf",
          },
        ],
      },
      {
        label: "4 курс",
        variants: [
          {
            label: "ПБ_ГМУ22",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_4%20%D0%BA%D1%83%D1%80%D1%81_%D0%93%D0%9C%D0%A31%2C2%2C-22.pdf",
          },
          {
            label: "ПБ_ЭКМЕН22",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/131025/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%204%20%D0%BA%D1%83%D1%80%D1%81%20%D0%9F%D0%91_%D0%AD%D0%9A%D0%9C%D0%95%D0%9D22%2013.10-18.10.pdf",
          },
          {
            label: "ПБ_ЮСГС22",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_4%20%D0%BA%D1%83%D1%80%D1%81_%D0%AE%D0%A1%D0%93%D0%A1-1%2C2-22.pdf",
          },
          {
            label: "ПБ_4 курс БУА-22, ЭУБ-22, МЕН-22",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_4%20%D0%BA%D1%83%D1%80%D1%81_%D0%91%D0%A3%D0%90%2C%D0%AD%D0%A3%D0%91%2C%D0%9C%D0%95%D0%9D-22.pdf",
          },
          {
            label:
              "ПБ 4 курс_ГМУ-1,2,_БУА_ МЕН_ЭУБ_ ЮСГС1,2 -22  ГРАФИК ПК1,2- ИК",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/161025/%D0%9F%D0%91%204%20%D0%BA%D1%83%D1%80%D1%81_%D0%93%D0%9C%D0%A3-1%2C2%2C_%D0%91%D0%A3%D0%90_%20%D0%9C%D0%95%D0%9D_%D0%AD%D0%A3%D0%91_%20%D0%AE%D0%A1%D0%93%D0%A11%2C2%20-22%20%20%D0%93%D0%A0%D0%90%D0%A4%D0%98%D0%9A%20%D0%9F%D0%9A1%2C2-%20%D0%98%D0%9A.pdf",
          },
        ],
      },
    ],
  },
  {
    title: "Магистратура",
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
          {
            label: "ГМУ 24 (1, 2, 3)",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_2%20%D0%BA%D1%83%D1%80%D1%81%20_%D0%93%D0%9C%D0%A3-1%2C2%2C3-24.pdf",
          },
          {
            label: "ГМУ 24 (3, 4, 5)",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/141125/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_2%20%D0%BA%D1%83%D1%80%D1%81%20%D0%93%D0%9C%D0%A3-4%2C5%2C6-24.pdf",
          },

          {
            label: "ПБ_ЮСГСзи-23, ГМУзи-23, ПМЕН зи-23, ГФФБзи-23",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/241025/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%9F%D0%91_%D0%AE%D0%A1%D0%93%D0%A1%D0%B7%D0%B8-23%2C%20%D0%93%D0%9C%D0%A3%D0%B7%D0%B8-23%2C%20%D0%9F%D0%9C%D0%95%D0%9D%20%D0%B7%D0%B8-23%2C%20%D0%93%D0%A4%D0%A4%D0%91%D0%B7%D0%B8-23.PDF",
          },
          {
            label: "ЗИМА",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/260925/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%202%20%D0%BA%D1%83%D1%80%D1%81%20%D0%97%D0%98%D0%9C%D0%90%20%D0%B0%D0%BA%D1%8B%D1%80%D0%BA%D1%8B.pdf",
          },
          {
            label: "ПБ 2 курс_ ГМУ-1,2,3,4,5,6-24 _ ГРАФИК ПК1,2-ИК",
            href: "http://www.apap.kg/uploads/pdf/%D0%A0%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5/%D0%91%D0%B0%D0%BA%D0%B0%D0%BB%D0%B0/2025-2026/161025/%D0%9F%D0%91%202%20%D0%BA%D1%83%D1%80%D1%81_%20%D0%93%D0%9C%D0%A3-1%2C2%2C3%2C4%2C5%2C6-24%20_%20%D0%93%D0%A0%D0%90%D0%A4%D0%98%D0%9A%20%D0%9F%D0%9A1%2C2-%D0%98%D0%9A.pdf",
          },
        ],
      },
    ],
  },
];

const ProgramCardItem: React.FC<{ data: ProgramCard }> = ({ data }) => {
  const [activeCourseIndex, setActiveCourseIndex] = useState(0);

  const hasCourses = data.courses && data.courses.length > 0;
  const activeCourse = hasCourses ? data.courses[activeCourseIndex] : null;

  return (
    <div className="w-auto h-auto flex flex-col items-start rounded-2xl border border-slate-700/60 bg-black/10 backdrop-blur-md px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-400/80">
      <h3 className="font-semibold text-2xl text-sinii mb-3 line-clamp-2">
        {data.title}
      </h3>

      {hasCourses ? (
        <>
          <div className="flex flex-wrap gap-2">
            {data.courses.map((course, idx) => {
              const isActive = idx === activeCourseIndex;
              return (
                <button
                  key={course.label}
                  type="button"
                  onClick={() => setActiveCourseIndex(idx)}
                  className={`
                    text-lg px-4 py-2 rounded-full border
                    transition-colors
                    ${
                      isActive
                        ? "border-indigo-400 bg-indigo-500/20 text-sinii"
                        : "border-slate-600 bg-slate-300 text-sinii hover:border-indigo-300"
                    }
                  `}
                >
                  {course.label}
                </button>
              );
            })}
          </div>
          <div className="w-full rounded-4xl h-px bg-sinii my-5"></div>

          {activeCourse && activeCourse.variants.length > 0 ? (
            <div className="flex flex-wrap gap-2 mt-auto">
              {activeCourse.variants.map((variant) => (
                <a
                  key={variant.label}
                  href={variant.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-lg px-4 py-2 rounded-full
                    border border-indigo-400/80
                    bg-indigo-500/10
                    text-sinii
                    hover:bg-indigo-500/20 hover:text-sinii
                    transition-colors
                  "
                >
                  {variant.label}
                </a>
              ))}
            </div>
          ) : (
            <p className="text-xs text-slate-400 italic mt-auto">
              Для этого курса материалов пока нет
            </p>
          )}
        </>
      ) : (
        <p className="text-xs text-slate-400 italic mt-auto">
          Материалы пока не добавлены
        </p>
      )}
    </div>
  );
};

const ProgramsGrid: React.FC = () => {
  return (
    <section className="w-full flexjustify-between px-4 py-8 items-start">
      <div className="w-auto flex flex-col justify-between items-start gap-4 max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {programCards.map((card) => (
          <ProgramCardItem key={card.title} data={card} />
        ))}
      </div>
    </section>
  );
};

export default ProgramsGrid;
