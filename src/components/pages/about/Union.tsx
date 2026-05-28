import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const Union = () => {
  const { t } = useTranslation();
  const { tradeUnion, status, fetchTradeUnion } = usePagesStore();

  useEffect(() => {
    fetchTradeUnion();
  }, [fetchTradeUnion]);

  const isLoading = (status.union === 'idle' || status.union === 'loading') && !tradeUnion;

  if (isLoading) return null;

  return (
    <>
      <div className="w-full flex flex-col gap-5">
        <Line title={tradeUnion?.title || t("sidebar.union")} />
        {tradeUnion?.description ? (
          <div
            dangerouslySetInnerHTML={{ __html: tradeUnion.description }}
          />
        ) : null}
      </div>
    </>
  );
};

export default Union;
