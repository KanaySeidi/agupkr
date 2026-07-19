import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCmsStore } from "@/store/cms.store";

const Abdrakhmanov = () => {
  const { t } = useTranslation();
  const { pagesByGroup, pageDetails, groupStatus, fetchGroupWithDetail } = useCmsStore();

  useEffect(() => {
    fetchGroupWithDetail("abdrakhmanov");
  }, []);

  const pages = pagesByGroup["abdrakhmanov"] ?? [];
  const mainPage = pages[0];
  const detail = mainPage ? pageDetails[mainPage.slug] : undefined;
  const isLoading = groupStatus["abdrakhmanov"] === "loading" || groupStatus["abdrakhmanov"] === "idle";

  const blocks = detail ? [...detail.blocks].sort((a, b) => a.order - b.order) : [];
  const textBlocks = blocks.filter(b => b.block_type === "text");
  const photoBlocks = blocks.filter(b => b.block_type === "photo_text");

  const title = detail?.title || textBlocks[0]?.title || t("sidebar.abdrakhmanov.main");
  const lead = textBlocks[0]?.description || "";
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
        <div className="w-full rounded-2xl overflow-hidden">
          <img src={heroPhoto} alt={title} className="w-full object-cover" />
        </div>
      )}

      <div className="flex flex-col gap-5 sm:gap-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-sinii">
          {title}
        </h2>

        {lead && (
          <div
            className="text-sm sm:text-base lg:text-lg text-[#4C4C4C] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: lead }}
          />
        )}

        {textBlocks.slice(1).map(b => (
          <div key={b.id} className="flex flex-col gap-3">
            {b.title && (
              <h3 className="text-lg font-semibold text-sinii">{b.title}</h3>
            )}
            <div
              className="text-sm sm:text-base text-[#4C4C4C] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: b.description }}
            />
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
      </div>
    </div>
  );
};

export default Abdrakhmanov;
