import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCmsStore } from "@/store/cms.store";

const Ideology = () => {
  const { t } = useTranslation();
  const { pagesByGroup, pageDetails, groupStatus, fetchGroupWithDetail } = useCmsStore();

  useEffect(() => {
    fetchGroupWithDetail("ideology");
  }, []);

  const isLoading = !groupStatus.ideology || groupStatus.ideology === "idle" || groupStatus.ideology === "loading";

  const pages = pagesByGroup["ideology"] ?? [];
  const mainPage = pages[0];
  const detail = mainPage ? pageDetails[mainPage.slug] : undefined;

  const blocks = detail ? [...detail.blocks].sort((a, b) => a.order - b.order) : [];
  const textBlocks = blocks.filter(b => b.block_type === "text");
  const photoBlocks = blocks.filter(b => b.block_type === "photo_text");

  const title = detail?.title || mainPage?.title || t("sidebar.ideology.main");
  const heroPhoto = detail?.main_photo_url || mainPage?.main_photo_url || null;

  if (isLoading) {
    return (
      <div className="w-full flex flex-col gap-10 animate-pulse">
        <div className="w-full h-64 bg-gray-200 rounded-2xl" />
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-10 sm:gap-14">
      {heroPhoto && (
        <div className="relative w-full rounded-2xl overflow-hidden" style={{ minHeight: "260px" }}>
          <img
            src={heroPhoto}
            alt={title}
            className="w-full h-full object-cover"
            style={{ minHeight: "260px", maxHeight: "420px" }}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold drop-shadow-lg">
              {title}
            </h1>
          </div>
        </div>
      )}

      {!heroPhoto && (
        <h1 className="text-2xl sm:text-3xl font-bold text-sinii">{title}</h1>
      )}

      {textBlocks.map(b => (
        <div key={b.id} className="flex flex-col gap-3">
          {b.title && <h2 className="text-lg sm:text-xl font-semibold text-sinii">{b.title}</h2>}
          {b.description && (
            <div
              className="text-sm sm:text-base text-[#4C4C4C] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: b.description }}
            />
          )}
        </div>
      ))}

      {photoBlocks.map(b => (
        <div key={b.id} className="flex flex-col md:flex-row gap-6 items-start">
          {b.photo_url && (
            <img
              src={b.photo_url}
              alt={b.title || ""}
              className="w-full md:w-64 rounded-xl object-cover flex-shrink-0"
            />
          )}
          <div className="flex flex-col gap-2">
            {b.title && <h3 className="text-lg font-semibold text-sinii">{b.title}</h3>}
            {b.description && (
              <div
                className="text-sm sm:text-base text-[#4C4C4C]"
                dangerouslySetInnerHTML={{ __html: b.description }}
              />
            )}
          </div>
        </div>
      ))}

      {!detail && (
        <p className="text-gray-400 text-sm">{t("sidebar.ideology.main")}</p>
      )}
    </div>
  );
};

export default Ideology;
