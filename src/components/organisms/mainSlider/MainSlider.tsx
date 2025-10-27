import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import agu from "@/assets/img/agu.jpg";
import agu1 from "@/assets/img/agu1.jpg";
import agu2 from "@/assets/img/agu3.jpg";
import { useTranslation } from "react-i18next";

const MainSlider = () => {
  const { t } = useTranslation();
  const infoSlider = [
    {
      id: 1,
      date: `9 ${t("announcement.mounth")} 2024`,
      title: `${t("announcement.announ1")}`,
      img: agu,
    },
    {
      id: 2,
      date: `12 ${t("announcement.mounth")} 2024`,
      title: `${t("announcement.announ2")}`,
      img: agu1,
    },
    {
      id: 3,
      date: `18 ${t("announcement.mounth")} 2024`,
      title: `${t("announcement.announ3")}`,
      img: agu2,
    },
  ];

  // Embla API + Autoplay
  const emblaRef = useRef<any>(null);
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true, // останавливать при клике/перетаскивании
    })
  );

  const handlePrev = () => emblaRef.current?.scrollPrev();
  const handleNext = () => emblaRef.current?.scrollNext();

  return (
    <section className="w-3/4 mx-auto">
      <div
        className="relative w-full h-[600px] rounded-2xl overflow-hidden"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
        onFocus={() => autoplay.current.stop()}
        onBlur={() => autoplay.current.play()}
      >
        <Carousel
          className="w-full h-full"
          setApi={(api) => (emblaRef.current = api)}
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
        >
          <CarouselContent>
            {infoSlider.map((item) => (
              <CarouselItem key={item.id}>
                <div className="relative h-[600px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                  {/* затемняющий градиент по всему слайду */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                  {/* читаемый блок текста */}
                  <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-auto">
                    <div className="max-w-2xl bg-black/55 backdrop-blur-[2px] rounded-xl p-5 md:p-6 shadow-xl">
                      <p className="text-gray-200 text-sm md:text-base mb-1 drop-shadow">
                        {item.date}
                      </p>
                      <h2 className="text-white text-2xl md:text-3xl font-semibold leading-tight drop-shadow">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* стрелки */}
          <div className="absolute bottom-6 right-6 flex gap-3">
            <Button
              onClick={handlePrev}
              size="icon"
              className="rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md"
              aria-label="Предыдущий слайд"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              className="rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md"
              aria-label="Следующий слайд"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default MainSlider;
