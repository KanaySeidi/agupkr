import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import agu from "@/assets/img/agu1.webp";
import agu1 from "@/assets/img/agu2.webp";
import agu2 from "@/assets/img/agu3.webp";
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

  const emblaRef = useRef<CarouselApi | null>(null);
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const handlePrev = () => emblaRef.current?.scrollPrev();
  const handleNext = () => emblaRef.current?.scrollNext();

  return (
    <section className="w-full lg:w-3/4">
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ height: "clamp(220px, 45vw, 600px)" }}
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
                <div className="relative w-full h-full" style={{ height: "clamp(220px, 45vw, 600px)" }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover blur-sm transition-all duration-300"
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                    <div className="bg-black/55 backdrop-blur-[2px] rounded-xl p-3 sm:p-5 shadow-xl">
                      <p className="text-gray-200 text-xs sm:text-sm mb-1">{item.date}</p>
                      <h2 className="text-white text-sm sm:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-3 right-3 flex gap-2">
            <Button
              onClick={handlePrev}
              size="icon"
              className="rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md size-8 sm:size-10"
              aria-label={t("auto.components.organisms.mainSlider.MainSlider.1")}
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              className="rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md size-8 sm:size-10"
              aria-label={t("auto.components.organisms.mainSlider.MainSlider.2")}
            >
              <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default MainSlider;
