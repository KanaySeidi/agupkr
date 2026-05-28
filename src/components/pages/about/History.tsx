import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const History = () => {
  const { t } = useTranslation();
  const { history, status, fetchHistory } = usePagesStore();

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const isLoading = (status.history === 'idle' || status.history === 'loading') && !history;
  if (isLoading) return null;

  return (
    <div className="w-full">
      {history?.title && <Line title={history.title} />}
      <div className="flex flex-col gap-5 mt-10">
        {history?.description && (
          <div dangerouslySetInnerHTML={{ __html: history.description }} />
        )}
        {history?.file_url && (
          <a
            href={history.file_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sinii hover:text-hover-sinii underline"
          >
            {t("historyAgu.title")}
          </a>
        )}
      </div>
    </div>
  );
};

export default History;
