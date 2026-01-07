import Line from "@/components/atoms/Line";
import { useTranslation } from "react-i18next";
import news_img from "@/assets/img/news_img.png";
import ArrowToTop from "@/components/atoms/ArrowToTop";

const News = () => {
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
              <li key={a.id} className=" pb-3 w-1/3">
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
        <div className="grid grid-cols-4 grid-rows-2 gap-10 my-5">
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
          <div className="flex flex-col gap-2">
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
        <div className="w-full flex flex-col gap-5 items-start">
          <p className="bg-[#E5E6E8] text-black/60 px-4 py-2 inline rounded-md">
            {t("news.events")}
          </p>
          <ul className="w-full flex justify-between">
            {announcements.map((a) => (
              <li key={a.id} className=" pb-3 w-1/3">
                <p className="text-sm text-blue-600">{a.date}</p>
                <p className="text-gray-800 text-sm leading-snug mt-1 hover:underline cursor-pointer">
                  {a.title}
                </p>
              </li>
            ))}
          </ul>
          <ul className="w-full flex">
            {announcements.map((a) => (
              <li key={a.id} className=" pb-3 w-1/3">
                <p className="text-sm text-blue-600">{a.date}</p>
                <p className="text-gray-800 text-sm leading-snug mt-1 hover:underline cursor-pointer">
                  {a.title}
                </p>
              </li>
            ))}
          </ul>
          <ul className="w-full flex">
            {announcements.map((a) => (
              <li key={a.id} className=" pb-3 w-1/3">
                <p className="text-sm text-blue-600">{a.date}</p>
                <p className="text-gray-800 text-sm leading-snug mt-1 hover:underline cursor-pointer">
                  {a.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
