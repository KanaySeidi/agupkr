import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import Loader from "@/components/organisms/loader/Loader";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";
import { FileText, Download } from "lucide-react";

const LawsInternal = () => {
  const { t } = useTranslation();
  const { legalInternal, status, fetchLegalInternal } = usePagesStore();

  useEffect(() => {
    fetchLegalInternal();
  }, [fetchLegalInternal]);

  const isLoading =
    (status.legalInternal === "idle" || status.legalInternal === "loading") &&
    legalInternal.length === 0;

  if (isLoading) return <Loader />;

  return (
    <div className="w-full flex flex-col gap-6">
      <Line title={t("sidebar.lawsInternal")} />

      {legalInternal.length === 0 ? (
        <p className="text-gray-500 text-sm">{t("common.noData")}</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {legalInternal.map((doc, index) => (
            <li key={doc.id}>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-sinii/30 hover:bg-blue-50/40 transition-colors group">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-sinii/10 flex items-center justify-center mt-0.5">
                  <FileText size={18} className="text-sinii" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2">
                    <span className="flex-shrink-0 text-xs font-bold text-sinii/50 mt-0.5 w-5 text-right">
                      {index + 1}.
                    </span>
                    <span className="text-sm font-medium text-gray-800 leading-snug">
                      {doc.title}
                    </span>
                  </div>
                </div>

                {doc.file_url && (
                  <a
                    href={doc.file_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sinii text-white text-xs font-medium hover:bg-hover-sinii transition-colors"
                    title={doc.title}
                  >
                    <Download size={13} />
                    <span className="hidden sm:inline">{t("common.download")}</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LawsInternal;
