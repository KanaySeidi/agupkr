import { useTranslation } from "react-i18next";

interface AdmissionProgram {
  title: string;
  description: string;
  competenciesTitle: string;
  competencies: string[];
  elementsTitle: string;
  elements: string[];
  audienceTitle: string;
  audience: string[];
  duration: string;
  fundingTitle: string;
  funding: string[];
  feature?: string;
}

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="ml-6 sm:ml-10 flex flex-col gap-2 list-disc marker:text-black">
    {items.map((item, index) => (
      <li
        key={`${index}-${item}`}
        className="pl-1 text-sm sm:text-base leading-relaxed"
      >
        {item}
      </li>
    ))}
  </ul>
);

const Admission2026Content = () => {
  const { t } = useTranslation();

  const programs = t("admission2026.programs", {
    returnObjects: true,
  }) as AdmissionProgram[];

  const careers = t("admission2026.careers", {
    returnObjects: true,
  }) as string[];

  const documents = t("admission2026.documents", {
    returnObjects: true,
  }) as string[];

  return (
    <article className="mt-8 sm:mt-10 px-3 sm:px-6 py-6 sm:py-10 text-black font-serif text-sm sm:text-base leading-relaxed">
      <header className="text-center">
        <h1 className="mx-auto max-w-5xl text-xl sm:text-2xl font-bold leading-snug">
          {t("admission2026.mainTitle")}
        </h1>

        <h2 className="mt-6 text-xl sm:text-2xl font-bold">
          {t("admission2026.direction")}
        </h2>
      </header>

      <h2 className="mt-8 text-lg sm:text-xl font-bold">
        {t("admission2026.programsTitle")}
      </h2>

      <div className="mt-7 flex flex-col gap-12">
        {Array.isArray(programs) &&
          programs.map((program, programIndex) => (
            <section key={`${programIndex}-${program.title}`}>
              <h3 className="ml-2 sm:ml-6 text-lg sm:text-xl font-bold text-red-600">
                <span className="mr-2">➢</span>
                {program.title}
              </h3>

              <p className="mt-5 text-justify">{program.description}</p>

              <p className="mt-5">{program.competenciesTitle}</p>

              <div className="mt-3">
                <BulletList items={program.competencies} />
              </div>

              <p className="mt-5">{program.elementsTitle}</p>

              <div className="mt-3">
                <BulletList items={program.elements} />
              </div>

              <p className="mt-5">{program.audienceTitle}</p>

              <div className="mt-3">
                <BulletList items={program.audience} />
              </div>

              <p className="mt-5 font-semibold">{program.duration}</p>

              <p className="mt-5">{program.fundingTitle}</p>

              <div className="mt-3">
                <BulletList items={program.funding} />
              </div>

              {program.feature && (
                <p className="mt-6 text-justify">
                  <span className="mr-2 text-lg">❖</span>
                  {program.feature}
                </p>
              )}
            </section>
          ))}
      </div>

      <section className="mt-12">
        <h2 className="text-lg sm:text-xl">{t("admission2026.careerTitle")}</h2>

        <ul className="mt-5 flex flex-col gap-3">
          {Array.isArray(careers) &&
            careers.map((career, index) => (
              <li
                key={`${index}-${career}`}
                className="flex items-start gap-3 text-sm sm:text-base"
              >
                <span className="text-[#607D8B] text-xl leading-none">✔</span>

                <span>{career}</span>
              </li>
            ))}
        </ul>
      </section>

      <section className="mt-8">
        <p className="text-justify">
          {t("admission2026.examsBeforeBold")}
          <strong>{t("admission2026.examsBold")}</strong>
          {t("admission2026.examsAfterBold")}
        </p>

        <p className="mt-5 text-justify">
          {t("admission2026.documentsBeforeBold")}
          <strong>{t("admission2026.documentsBold")}</strong>
        </p>

        <ol className="mt-4 ml-6 sm:ml-10 list-decimal flex flex-col gap-2">
          {Array.isArray(documents) &&
            documents.map((document, index) => (
              <li key={`${index}-${document}`} className="pl-1">
                {document}
              </li>
            ))}
        </ol>
      </section>

      <footer className="mt-10 text-center">
        <h2 className="text-xl sm:text-2xl font-bold uppercase">
          {t("admission2026.submissionTitle")}
        </h2>

        <p className="mt-4">{t("admission2026.round1")}</p>

        <p>{t("admission2026.round2")}</p>

        <p className="mt-6">{t("admission2026.address")}</p>

        <p>{t("admission2026.phone")}</p>
      </footer>
    </article>
  );
};

export default Admission2026Content;
