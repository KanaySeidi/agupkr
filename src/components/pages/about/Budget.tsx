import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const Budget = () => {
  const { t } = useTranslation();
  const { budgetPrograms, status, fetchBudgetPrograms } = usePagesStore();

  useEffect(() => {
    fetchBudgetPrograms();
  }, [fetchBudgetPrograms]);

  const isLoading = (status.budget === 'idle' || status.budget === 'loading') && budgetPrograms.length === 0;

  if (isLoading) return null;

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={t("sidebar.budget")} />
        <ul className="flex flex-col gap-2">
          {budgetPrograms.map(program => (
            <li key={program.id} className="flex flex-col gap-1">
              <span className="font-medium">{program.title}</span>
              {program.period && (
                <span className="text-sm text-gray-500">{program.period}</span>
              )}
              {program.description && (
                <span
                  className="text-sm sm:text-base"
                  dangerouslySetInnerHTML={{ __html: program.description }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Budget;
