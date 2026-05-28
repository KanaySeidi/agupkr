import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { usePagesStore } from "@/store/pages.store";

const Cooperation = () => {
  const { t } = useTranslation();
  const { cooperation, status, fetchCooperation } = usePagesStore();

  useEffect(() => {
    fetchCooperation();
  }, [fetchCooperation]);

  const isLoading = (status.cooperation === 'idle' || status.cooperation === 'loading') && cooperation.length === 0;
  if (isLoading) return null;

  return (
    <div className="w-full">
      <Line title={t("sidebar.cooperation")} />
      <div className="flex flex-col gap-10 mt-6">
        {cooperation.map((item, idx) => (
          <div key={item.id} className="flex flex-col gap-5">
            {idx > 0 && <hr className="border-slate-200" />}
            {item.title && <h2 className="text-xl font-medium">{item.title}</h2>}
            {item.photo_url && <img src={item.photo_url} alt="" className="rounded-md" />}
            {item.description && (
              <div
                className="flex flex-col gap-2"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
            {item.links && item.links.length > 0 && (
              <ul className="flex flex-col gap-1">
                {item.links.map(link => (
                  <li key={link.id}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sinii hover:text-hover-sinii underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cooperation;
