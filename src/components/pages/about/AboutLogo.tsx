import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const AboutLogo = () => {
  const { t } = useTranslation();
  const { logo, status, fetchLogo } = usePagesStore();

  useEffect(() => {
    fetchLogo();
  }, [fetchLogo]);

  const isLoading = (status.logo === 'idle' || status.logo === 'loading') && !logo;
  if (isLoading) return null;

  return (
    <div className="w-full flex flex-col gap-5">
      <Line title={t("sidebar.logo")} />
      {logo && (
        <>
          {logo.logo_url && <img src={logo.logo_url} alt="" className="max-h-64 object-contain" />}
          {logo.title && <h1>{logo.title}</h1>}
          {logo.description && (
            <div dangerouslySetInnerHTML={{ __html: logo.description }} />
          )}
        </>
      )}
    </div>
  );
};

export default AboutLogo;
