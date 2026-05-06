import { useParams, useNavigate } from "react-router-dom";
import { newsItems } from "@/utils/newsData";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";


const NewsDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = newsItems.find((n) => n.id === Number(id));
  const others = newsItems.filter((n) => n.id !== Number(id)).slice(0, 3);

  if (!item) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-xl">{t("auto2.components.pages.news.NewsDetail.1")}</p>
        <button onClick={() => navigate("/news")} className="mt-4 text-sinii underline">
          {t("auto2.components.pages.news.NewsDetail.2")}</button>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-xl sm:text-2xl font-bold text-sinii leading-snug mb-2">{t(item.titleKey)}</h1>
      <p className="text-sm text-blue-500 mb-6">{t(item.dateKey)}</p>

      {}
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 mb-8">
        <img
          src={item.image}
          alt={t(item.titleKey)}
          className="w-full sm:w-2/5 shrink-0 rounded-xl object-cover max-h-64 sm:max-h-none"
        />
        <div className="text-gray-700 text-sm leading-relaxed space-y-4">
          <p>{t(item.contentKey)}</p>
          {item.paragraphKeys?.map((key) => <p key={key}>{t(key)}</p>)}
          {item.bulletKeys && item.bulletKeys.length > 0 && (
            <>
              <p className="font-medium text-slate-800">{t("auto2.components.pages.news.NewsDetail.3")}</p>
              <ul className="list-disc pl-5 space-y-1">
                {item.bulletKeys.map((key) => <li key={key}>{t(key)}</li>)}
              </ul>
            </>
          )}
        </div>
      </div>

      {}
      {item.images.length > 0 && (
        <div className="mb-10">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {item.images.map((src, idx) => (
                <CarouselItem key={idx} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <img
                    src={src}
                    alt={`${t("auto2.components.pages.news.NewsDetail.5")} ${idx + 1}`}
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      )}

      {}
      <div className="pt-6 border-t border-gray-200">
        <h2 className="text-base font-semibold text-sinii mb-4 flex items-center gap-2">
          <span>→</span> {t("auto2.components.pages.news.NewsDetail.4")}</h2>
        <div className="flex flex-col divide-y divide-gray-100">
          {others.map((n) => (
            <div
              key={n.id}
              className="py-3 cursor-pointer group"
              onClick={() => navigate(`/news/${n.id}`)}
            >
              <p className="text-xs text-blue-500 mb-1">{t(n.dateKey)}</p>
              <p className="text-sm text-gray-800 group-hover:text-sinii transition-colors leading-snug">
                {t(n.titleKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
