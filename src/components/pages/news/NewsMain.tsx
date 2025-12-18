import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import news_img from "@/assets/img/news_img.png";
import ArrowToTop from "@/components/atoms/ArrowToTop";
import { useNavigate } from "react-router-dom";

const NewsMain = () => {
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
      date: `12 ${t("announcement.mounath")} 2024`,
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
      <div className="w-11/12 mx-auto mt-10">
        <div className="w-full flex items-center justify-between my-10">
          <Line title={t("header.navs.nav6")} />
          <button
            onClick={() => navigate("/news")}
            className="px-4 py-2 flex gap-2 items-center border border-sinii rounded-md cursor-pointer"
          >
            <p className="uppercase font-medium text-sinii">
              {t("news.allnews")}
            </p>
            <ArrowToTop width={20} height={20} color="#104385" />
          </button>
        </div>
        <div className="w-full flex justify-between gap-10">
          <div className="w-1/4 p-4">
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
          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            <div className="w-96 flex flex-col gap-2">
              <img src={news_img} alt="" className="rounded-md" />
              <p className="text-base">
                Руководство по реализации программы грантов Академического
                инновационного фонда
              </p>
              <button className="text-sinii flex gap-2 uppercase items-center cursor-pointer">
                <p>Подробнее</p>
                <ArrowToTop width={25} height={25} color="#104385" />
              </button>
            </div>
            <div className="w-96 flex flex-col gap-2">
              <img src={news_img} alt="" className="rounded-md" />
              <p className="text-base">
                Руководство по реализации программы грантов Академического
                инновационного фонда
              </p>
              <button className="text-sinii flex gap-2 uppercase items-center cursor-pointer">
                <p>Подробнее</p>
                <ArrowToTop width={25} height={25} color="#104385" />
              </button>
            </div>
            <div className="w-96 flex flex-col gap-2">
              <img src={news_img} alt="" className="rounded-md" />
              <p className="text-base">
                Руководство по реализации программы грантов Академического
                инновационного фонда
              </p>
              <button className="text-sinii flex gap-2 uppercase items-center cursor-pointer">
                <p>Подробнее</p>
                <ArrowToTop width={25} height={25} color="#104385" />
              </button>
            </div>
            <div className="w-96 flex flex-col gap-2">
              <img src={news_img} alt="" className="rounded-md" />
              <p className="text-base">
                Руководство по реализации программы грантов Академического
                инновационного фонда
              </p>
              <button className="text-sinii flex gap-2 uppercase items-center cursor-pointer">
                <p>Подробнее</p>
                <ArrowToTop width={25} height={25} color="#104385" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsMain;
