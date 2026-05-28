import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { useStaffStore } from "@/store/staff.store";
import Loader from "@/components/organisms/loader/Loader";

const Council = () => {
  const { t } = useTranslation();
  const { council, status, fetchCouncil } = useStaffStore();

  useEffect(() => {
    fetchCouncil();
  }, [fetchCouncil]);

  if (status === 'idle' || status === 'loading') return <Loader />;

  return (
    <div className="w-full">
      <Line title={t("sidebar.council")} />
      {council.map((item) => (
        <div key={item.id} className="mt-6">
          <h2 className="text-lg font-semibold text-sinii mb-2">{item.title}</h2>
          <p className="text-sm text-slate-700 mb-4 whitespace-pre-line">{item.composition}</p>
          {item.files.length > 0 && (
            <ul className="flex flex-col gap-2 text-sinii">
              {item.files.map((file) => (
                <li key={file.id}>
                  <a
                    href={file.file_url || file.file}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {file.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Council;
