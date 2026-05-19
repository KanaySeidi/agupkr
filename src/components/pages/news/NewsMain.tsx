import { useEffect } from "react";
import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import { useNavigate } from "react-router-dom";
import { useNewsStore } from "@/store/news.store";
import { useAnnouncementsStore } from "@/store/announcements.store";

const NewsMain = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { items, fetchList } = useNewsStore();
  const { pinned: pinnedAnnouncements, fetchPinned } = useAnnouncementsStore();

  useEffect(() => {
    fetchList();
    fetchPinned();
  }, [fetchList, fetchPinned]);

  return (
    <div className="w-11/12 mx-auto mt-8 sm:mt-10">
      <div className="w-full flex items-center justify-between my-6 lg:my-10">
        <Line title={t("header.navs.nav6")} />
        <button
          onClick={() => navigate("/news")}
          className="px-3 py-1.5 flex gap-1.5 items-center border border-sinii rounded-md cursor-pointer shrink-0 ml-4"
        >
          <p className="uppercase font-medium text-sinii text-sm">{t("news.allnews")}</p>
          <ArrowToTop width={18} height={18} color="#104385" />
        </button>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
        <div className="hidden lg:block w-1/4">
          <ul className="space-y-6">
            {pinnedAnnouncements.map((a) => (
              <li key={a.id} className="border-b pb-3">
                <p className="text-sm text-blue-600">
                  {new Date(a.date).toLocaleDateString()}
                </p>
                <p className="text-gray-800 text-sm leading-snug mt-1 hover:underline cursor-pointer">
                  {a.title}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {items.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 cursor-pointer group"
              onClick={() => navigate(`/news/${item.id}`)}
            >
              {item.photo_url && (
                <img
                  src={item.photo_url}
                  alt={item.title}
                  className="rounded-md w-full object-cover aspect-video group-hover:opacity-90 transition-opacity"
                />
              )}
              <p className="text-sm text-blue-500">
                {new Date(item.date).toLocaleDateString()}
              </p>
              <p className="text-sm leading-snug group-hover:text-sinii transition-colors line-clamp-3">
                {item.title}
              </p>
              <button className="text-sinii flex gap-1.5 uppercase items-center cursor-pointer w-fit text-sm">
                <p>{t("news.more")}</p>
                <ArrowToTop width={18} height={18} color="#104385" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
