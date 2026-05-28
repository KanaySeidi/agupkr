import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Line from "@/components/atoms/Line";
import { usePagesStore } from "@/store/pages.store";

const AboutUstav = () => {
  const { t } = useTranslation();
  const { charter, status, fetchCharter } = usePagesStore();

  useEffect(() => {
    fetchCharter();
  }, [fetchCharter]);

  const isLoading = (status.charter === 'idle' || status.charter === 'loading') && !charter;

  if (isLoading) return null;

  return (
    <div className="w-full flex flex-col gap-5">
      <Line title={t("sidebar.charter")} />
      {charter ? (
        <>
          <h1 className="text-xl sm:text-2xl font-medium">{charter.title}</h1>
          <div
            className="text-sm sm:text-base"
            dangerouslySetInnerHTML={{ __html: charter.description }}
          />
          {charter.file_url && (
            <a
              href={charter.file_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sinii hover:text-hover-sinii underline"
            >
              {t("sidebar.charter")}
            </a>
          )}
        </>
      ) : null}
    </div>
  );
};

export default AboutUstav;
