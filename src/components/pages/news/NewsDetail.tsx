import { useParams, useNavigate } from "react-router-dom";
import { newsItems } from "@/utils/newsData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const item = newsItems.find((n) => n.id === Number(id));
  const others = newsItems.filter((n) => n.id !== Number(id)).slice(0, 3);

  if (!item) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-xl">Новость не найдена</p>
        <button
          onClick={() => navigate("/news")}
          className="mt-4 text-sinii underline"
        >
          Вернуться к новостям
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Заголовок */}
      <h1 className="text-2xl font-bold text-sinii leading-snug mb-2">
        {item.title}
      </h1>
      <p className="text-sm text-blue-500 mb-6">{item.date}</p>

      {/* Основное фото + текст */}
      <div className="flex gap-6 mb-8">
        <img
          src={item.image}
          alt={item.title}
          className="w-2/5 shrink-0 rounded-xl object-cover"
        />
        <div className="text-gray-700 text-sm leading-relaxed space-y-4">
          <p>{item.content}</p>
          <p>
            Вторая Консультативная встреча собрала представителей АГУПКР и ЖОА,
            а также ключевых бенефициаров заказчика в лице представителей
            Администрации Президента КР, Государственного агентства по делам
            государственной службы и местного самоуправления при Правительстве КР.
          </p>
          <p>
            В ходе встречи участники обсудили результаты исследовательской
            работы по шести направлениям, рассмотрели рекомендации по
            совершенствованию системы государственного управления, в том числе:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Разработка модели компетентностного подхода в обучении государственных и муниципальных служащих КР</li>
            <li>Государственная политика в отношении ГБ/МЭ в Кыргызской Республике</li>
            <li>Повышение эффективности работы государственной службы в Кыргызской Республике</li>
            <li>Разработка модели компетентностного подхода в подготовке кадров государственной службы</li>
          </ul>
          <p>
            Согласно условиям Договора с ЖОА, следующим важным этапом является
            проведение заключительного семинара ориентировочно в ноябре 2025
            года для обсуждения финальных результатов исследований Академии.
          </p>
        </div>
      </div>

      {/* Фотослайдер */}
      {item.images.length > 0 && (
        <div className="mb-10">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {item.images.map((src, idx) => (
                <CarouselItem key={idx} className="basis-1/3">
                  <img
                    src={src}
                    alt={`Фото ${idx + 1}`}
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

      {/* Другие новости */}
      <div className="pt-6 border-t border-gray-200">
        <h2 className="text-base font-semibold text-sinii mb-4 flex items-center gap-2">
          <span>→</span> Другие новости и объявления
        </h2>
        <div className="flex flex-col divide-y divide-gray-100">
          {others.map((n) => (
            <div
              key={n.id}
              className="py-3 cursor-pointer group"
              onClick={() => navigate(`/news/${n.id}`)}
            >
              <p className="text-xs text-blue-500 mb-1">{n.date}</p>
              <p className="text-sm text-gray-800 group-hover:text-sinii transition-colors leading-snug">
                {n.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
