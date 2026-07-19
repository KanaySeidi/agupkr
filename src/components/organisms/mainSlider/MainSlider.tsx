import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";
import { useCmsStore } from "@/store/cms.store";

const MainSlider = () => {
  const { t } = useTranslation();
  const emblaRef = useRef<CarouselApi | null>(null);
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  const { pagesByGroup, pageDetails, fetchGroupWithDetail, groupStatus } =
    useCmsStore();

  useEffect(() => {
    if (!groupStatus.home) fetchGroupWithDetail("home");
  }, []);

  const isLoading =
    !groupStatus.home ||
    groupStatus.home === "idle" ||
    groupStatus.home === "loading";

  const homePages = pagesByGroup.home ?? [];
  const sliderBlocks = homePages.flatMap((p) => {
    const detail = pageDetails[p.slug];
    if (!detail) return [];
    return detail.blocks
      .filter((b) => b.block_type === "slider")
      .sort((a, b) => a.order - b.order);
  });

  const slides = sliderBlocks.map((b) => ({
    id: b.id,
    title: b.title,
    photo_url: b.photo_url || "",
    date: b.date ?? "",
  }));

  const handlePrev = () => emblaRef.current?.scrollPrev();
  const handleNext = () => emblaRef.current?.scrollNext();

  if (isLoading) {
    return (
      <section className="w-full lg:w-3/4">
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-gray-200 animate-pulse"
          style={{ height: "clamp(220px, 45vw, 600px)" }}
        />
      </section>
    );
  }

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
            {slides.map((item) => (
              <CarouselItem key={item.id}>
                <div
                  className="relative w-full h-full"
                  style={{ height: "clamp(220px, 45vw, 600px)" }}
                >
                  <img
                    src={item.photo_url}
                    alt={item.title}
                    className="h-full w-full object-cover blur-sm transition-all duration-300"
                    loading="lazy"
                    onLoad={(e) => e.currentTarget.classList.remove("blur-sm")}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  {(item.title || item.date) && (
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                      <div className="bg-black/55 backdrop-blur-[2px] rounded-xl p-3 sm:p-5 shadow-xl">
                        {item.date && (
                          <p className="text-gray-200 text-xs sm:text-sm mb-1">
                            {item.date}
                          </p>
                        )}
                        {item.title && (
                          <h2 className="text-white text-sm sm:text-xl lg:text-2xl xl:text-3xl font-semibold leading-tight">
                            {item.title}
                          </h2>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bottom-6 right-6 flex gap-2">
            <Button
              onClick={handlePrev}
              size="icon"
              className="rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md size-8 sm:size-10"
              aria-label={t(
                "auto.components.organisms.mainSlider.MainSlider.1"
              )}
            >
              <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              onClick={handleNext}
              size="icon"
              className="rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md size-8 sm:size-10"
              aria-label={t(
                "auto.components.organisms.mainSlider.MainSlider.2"
              )}
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
