import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import { useStaffStore } from "@/store/staff.store";

const Professors = () => {
  const { t } = useTranslation();
  const { professors: items, status, fetchProfessors } = useStaffStore();

  useEffect(() => {
    fetchProfessors();
  }, [fetchProfessors]);

  if ((status === 'idle' || status === 'loading') && items.length === 0) return null;

  return (
    <div className="w-full">
      <Line title={t("sidebar.professors")} />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((prof) => (
          <div key={prof.id} className="flex flex-col items-center gap-3 text-center p-4 rounded-2xl border border-slate-200 bg-white shadow-sm">
            {prof.photo_url ? (
              <img
                src={prof.photo_url}
                alt={prof.name}
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 text-2xl">
                ?
              </div>
            )}
            <h3 className="font-semibold text-sinii text-sm">{prof.name}</h3>
            {prof.description && (
              <p className="text-xs text-slate-500 leading-relaxed">{prof.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Professors;
