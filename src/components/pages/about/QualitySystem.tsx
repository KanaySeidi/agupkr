import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const QualitySystem = () => {
  const { t } = useTranslation();
  const { qualityManagement, status, fetchQualityManagement } = usePagesStore();

  useEffect(() => {
    fetchQualityManagement();
  }, [fetchQualityManagement]);

  const isLoading = (status.quality === 'idle' || status.quality === 'loading') && !qualityManagement;

  if (isLoading) return null;

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={qualityManagement?.title || t("sidebar.qualitySystem")} />
        {qualityManagement?.files && qualityManagement.files.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {qualityManagement.files.map(f => (
              <li key={f.id}>
                <div className="flex text-sinii items-center gap-2">
                  <ArrowToTop width={20} height={20} />
                  <a
                    href={f.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {f.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
};

export default QualitySystem;
