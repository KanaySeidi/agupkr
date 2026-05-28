import { useEffect } from "react";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const Journal = () => {
  const { t } = useTranslation();
  const { bulletin, status, fetchBulletin } = usePagesStore();

  useEffect(() => {
    fetchBulletin();
  }, [fetchBulletin]);

  const isLoading = (status.bulletin === 'idle' || status.bulletin === 'loading') && !bulletin;

  if (isLoading) return null;

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={bulletin?.title || t("sidebar.journal")} />

        {bulletin?.description ? (
          <div dangerouslySetInnerHTML={{ __html: bulletin.description }} />
        ) : null}

        {bulletin?.files && bulletin.files.length > 0 ? (
          <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 lg:gap-20 items-start">
            <div className="flex flex-col gap-5">
              {bulletin.files.map(f => (
                <div key={f.id} className="flex text-sinii items-center gap-2">
                  <ArrowToTop width={20} height={20} />
                  <a href={f.file_url}>{f.title}</a>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Journal;
