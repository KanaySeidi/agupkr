import Line from "@/components/atoms/Line";
import { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { useEducationStore } from "@/store/education.store";

const EduMagistratura = () => {
  const { t } = useTranslation();
  const { programsByType, status, fetchByType } = useEducationStore();

  useEffect(() => {
    fetchByType("master");
  }, [fetchByType]);

  const programs = programsByType["master"] ?? [];
  const isLoading = status["master"] === "loading" && programs.length === 0;

  return (
    <div className="w-full space-y-3 mt-6">
      <Line title={t("sidebar.education.magistr")} />

      {isLoading && (
        <p className="text-slate-500 text-sm">{t("sidebar.education.magistr")}…</p>
      )}

      {programs.length > 0 ? (
        programs.map((program) => (
          <Accordion
            key={program.id}
            type="single"
            collapsible
            className="w-full rounded-xl bg-[#f4f7ff] p-3"
          >
            <AccordionItem value={`item-${program.id}`}>
              <AccordionTrigger className="text-sm sm:text-base md:text-[18px] text-sinii text-left">
                {program.title}
              </AccordionTrigger>

              {(program.description || program.photo_url || program.link) && (
                <AccordionContent className="p-4 rounded-xl bg-[#eef3ff]">
                  {program.photo_url && (
                    <img
                      src={program.photo_url}
                      alt={program.title}
                      className="w-full max-h-64 object-cover rounded-md mb-4"
                    />
                  )}
                  {program.description && (
                    <div
                      className="flex flex-col gap-6 text-sinii text-[15px]"
                      dangerouslySetInnerHTML={{ __html: program.description }}
                    />
                  )}
                  {program.link && (
                    <a
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-sm text-white bg-sinii hover:bg-sky-700 rounded-md px-4 py-2"
                    >
                      {program.title}
                    </a>
                  )}
                </AccordionContent>
              )}
            </AccordionItem>
          </Accordion>
        ))
      ) : !isLoading ? (
        <p className="text-slate-500 text-sm">{t("sidebar.education.magistr")}</p>
      ) : null}
    </div>
  );
};

export default EduMagistratura;
