import { useTranslation } from "react-i18next";

const Announcement = () => {
  const { t } = useTranslation();
  const announcements = [
    {
      id: 1,
      date: `10 ${t("announcement.mounth")} 2024`,
      title: `${t("announcement.announ1")}`,
    },
    {
      id: 2,
      date: `12 ${t("announcement.mounth")} 2024`,
      title: `${t("announcement.announ2")}`,
    },
    {
      id: 3,
      date: `13 ${t("announcement.mounth")} 2024`,
      title: `${t("announcement.announ3")}`,
    },
  ];

  return (
    <>
      <div className="w-1/4 p-4">
        <h3 className="bg-sinii rounded-md text-center text-base font-semibold py-2 px-1 text-white mb-4">
          {t("announcement.univerTitle")}
        </h3>
        <ul className="space-y-6">
          {announcements.map((a) => (
            <li key={a.id} className="border-b pb-3">
              <p className="text-sm text-blue-600">{a.date}</p>
              <p className="text-gray-800 text-sm leading-snug mt-1 hover:underline cursor-pointer">
                {a.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Announcement;
