import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const LawsInternal = () => {
  const { t } = useTranslation();
  const { legalInternal, status, fetchLegalInternal } = usePagesStore();

  useEffect(() => {
    fetchLegalInternal();
  }, [fetchLegalInternal]);

  const isLoading = (status.legalInternal === 'idle' || status.legalInternal === 'loading') && legalInternal.length === 0;

  if (isLoading) return null;

  return (
    <div className="w-full flex flex-col gap-5">
      <Line title={t("sidebar.lawsInternal")} />
      <ul className="flex flex-col gap-3">
        {legalInternal.map(doc => (
          <li key={doc.id} className="flex flex-col gap-1">
            <span className="font-medium">{doc.title}</span>
            {doc.file_url && (
              <a
                href={doc.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sinii hover:text-hover-sinii underline text-sm"
              >
                {t("sidebar.lawsInternal")}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LawsInternal;
