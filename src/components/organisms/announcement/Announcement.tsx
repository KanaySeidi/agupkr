import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAnnouncementsStore } from "@/store/announcements.store";

const Announcement = () => {
  const { t } = useTranslation();
  const { items, fetchList } = useAnnouncementsStore();

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div className="w-full lg:w-1/4 lg:p-3">
      <h3 className="bg-sinii rounded-md text-center text-sm font-semibold py-2 px-1 text-white mb-3">
        {t("announcement.univerTitle")}
      </h3>
      <ul className="flex flex-row gap-4 overflow-x-auto pb-1 scrollbar-none lg:flex-col lg:space-y-5 lg:overflow-x-visible lg:pb-0">
        {items.map((a) => (
          <li key={a.id} className="border-b pb-3 min-w-[200px] sm:min-w-[260px] lg:min-w-0 shrink-0 lg:shrink">
            <p className="text-sm text-blue-600">
              {new Date(a.date).toLocaleDateString()}
            </p>
            <p className="text-gray-800 text-sm leading-snug mt-1 font-medium">
              {a.title}
            </p>
            {a.description && (
              <p className="text-gray-500 text-xs leading-snug mt-0.5">{a.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcement;
