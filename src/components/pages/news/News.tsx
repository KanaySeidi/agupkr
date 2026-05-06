import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import { useNavigate } from "react-router-dom";
import { newsItems } from "@/utils/newsData";

const News = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
    <div className="w-11/12 mx-auto mt-10">
      <div className="my-10">
        <Line title={t("news.announcement")} />
      </div>

      <p className="bg-[#E5E6E8] text-black/60 px-4 py-2 inline rounded-md">
        {t("news.pinned")}
      </p>

      <div className="w-full my-10">
        <ul className="w-full flex">
          {announcements.map((a) => (
            <li key={a.id} className="pb-3 w-1/3">
              <p className="text-sm text-blue-600">{a.date}</p>
              <p className="text-gray-800 text-sm leading-snug mt-1 hover:underline cursor-pointer">
                {a.title}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-5 items-start">
        <Line title={t("news.evnnew")} />
        <p className="bg-[#E5E6E8] text-black/60 px-4 py-2 inline rounded-md">
          {t("news.news")}
        </p>
      </div>

      {/* Сетка новостей — 3 колонки */}
      <div className="grid grid-cols-3 gap-6 my-5">
        {newsItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 cursor-pointer group"
            onClick={() => navigate(`/news/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md w-full object-cover aspect-video group-hover:opacity-90 transition-opacity"
            />
            <p className="text-sm text-blue-500">{item.date}</p>
            <p className="text-sm leading-snug group-hover:text-sinii transition-colors line-clamp-3">
              {item.title}
            </p>
            <button className="text-sinii flex gap-2 uppercase items-center cursor-pointer w-fit text-sm">
              <p>{t("news.more") || "Подробнее"}</p>
              <ArrowToTop width={20} height={20} color="#104385" />
            </button>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col gap-5 items-start mt-8">
        <p className="bg-[#E5E6E8] text-black/60 px-4 py-2 inline rounded-md">
          {t("news.events")}
        </p>
        <ul className="w-full flex justify-between">
          {announcements.map((a) => (
            <li key={a.id} className="pb-3 w-1/3">
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
