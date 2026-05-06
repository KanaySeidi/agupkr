import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import { useNavigate } from "react-router-dom";
import { newsItems } from "@/utils/newsData";

const News = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const announcements = [
    { id: 1, date: `10 ${t("announcement.mounth")} 2024`, title: `${t("announcement.announ1")}` },
    { id: 2, date: `12 ${t("announcement.mounth")} 2024`, title: `${t("announcement.announ2")}` },
    { id: 3, date: `13 ${t("announcement.mounth")} 2024`, title: `${t("announcement.announ3")}` },
  ];

  return (
    <div className="w-full mt-6">
      <div className="mb-8">
        <Line title={t("news.announcement")} />
      </div>

      <p className="bg-[#E5E6E8] text-black/60 px-4 py-2 inline rounded-md text-sm">
        {t("news.pinned")}
      </p>

      <div className="w-full my-6 sm:my-10">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

      <div className="flex flex-col gap-4 items-start mb-4">
        <Line title={t("news.evnnew")} />
        <p className="bg-[#E5E6E8] text-black/60 px-4 py-2 inline rounded-md text-sm">
          {t("news.news")}
        </p>
      </div>

      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-5">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => navigate(`/news/${item.id}`)}
          >
            <img
              src={item.image}
              alt={t(item.titleKey)}
              className="rounded-md w-full object-cover aspect-video group-hover:opacity-90 transition-opacity"
            />
            <p className="text-sm text-blue-500">{t(item.dateKey)}</p>
            <p className="text-sm leading-snug group-hover:text-sinii transition-colors line-clamp-3">
              {t(item.titleKey)}
            </p>
            <button className="text-sinii flex gap-2 uppercase items-center cursor-pointer w-fit text-sm">
              <p>{t("news.more")}</p>
              <ArrowToTop width={18} height={18} color="#104385" />
            </button>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col gap-4 items-start mt-8">
        <p className="bg-[#E5E6E8] text-black/60 px-4 py-2 inline rounded-md text-sm">
          {t("news.events")}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
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
    </div>
  );
};

export default News;
