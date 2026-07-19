import { useEffect } from "react";
import LogoLp from "@/components/organisms/logoloop/LogoLp";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/img/AboutUs.svg";
import goldenUzor2 from "@/assets/img/golden-uzor-2.svg";
import { useCmsStore } from "@/store/cms.store";

const About = () => {
  const { t } = useTranslation();
  const { pageDetails, detailStatus, fetchPage } = useCmsStore();

  useEffect(() => {
    fetchPage("about");
  }, []);

  const page = pageDetails["about"];
  const blocks = page ? [...page.blocks].sort((a, b) => a.order - b.order) : [];
  const textBlocks = blocks.filter((b) => b.block_type === "text");

  const mainTitle = textBlocks[0]?.title || t("aboutAgu.title");
  const lead = textBlocks[0]?.description || t("aboutAgu.lead");
  const missionTitle = textBlocks[1]?.title || t("aboutAgu.mission.title");
  const missionDesc =
    textBlocks[1]?.description || t("aboutAgu.mission.descr1");
  const heroPhoto = page?.main_photo_url || heroImg;

  const isLoading =
    detailStatus["about"] === "loading" || detailStatus["about"] === "idle";

  return (
    <div className="w-full flex flex-col gap-10 sm:gap-14">
      {/* Hero с оверлеем */}
      <div
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ minHeight: "260px" }}
      >
        <img
          src={heroPhoto}
          alt=""
          className="w-full h-full object-cover"
          style={{ minHeight: "260px", maxHeight: "420px" }}
        />
      </div>

      {/* Заголовок + лид */}
      <div className="flex flex-col gap-5 sm:gap-6">
        {!isLoading && (
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug">
            {mainTitle}
          </h2>
        )}
        <p className="text-sm sm:text-base lg:text-lg text-[#4C4C4C] leading-relaxed">
          {lead}
        </p>
      </div>

      {/* Синий инфо-блок */}
      <div className="bg-sinii rounded-3xl p-8 sm:p-10 flex flex-col gap-5">
        <p className="text-white text-base sm:text-lg leading-relaxed">
          {t("aboutAgu.paragraphs1")}
        </p>
        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
          {t("aboutAgu.paragraphs5")}
        </p>
      </div>

      {/* Дополнительные абзацы */}
      {textBlocks.slice(2).length > 0
        ? textBlocks
            .slice(2)
            .map((b) => (
              <div
                key={b.id}
                className="text-sm sm:text-base text-justify text-[#4C4C4C] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: b.description }}
              />
            ))
        : !isLoading && (
            <div className="flex flex-col gap-5">
              <p className="text-sm sm:text-base text-justify text-[#4C4C4C] leading-relaxed">
                {t("aboutAgu.paragraphs2")}
              </p>
              <p className="text-sm sm:text-base text-justify text-[#4C4C4C] leading-relaxed">
                {t("aboutAgu.paragraphs3")}
              </p>
              <p className="text-sm sm:text-base text-justify text-[#4C4C4C] leading-relaxed">
                {t("aboutAgu.paragraphs4")}
              </p>
            </div>
          )}

      {/* Миссия Академии */}
      <div
        className="relative rounded-2xl overflow-hidden p-8 sm:p-10 lg:p-14 flex flex-col justify-center gap-6 bg-sinii"
        style={{ minHeight: "360px" }}
      >
        <img
          src={goldenUzor2}
          className="absolute right-0 top-1/2 -translate-y-1/2 h-full object-contain pointer-events-none select-none opacity-60"
          alt=""
          aria-hidden="true"
        />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white relative z-10">
          {missionTitle}
        </h2>
        <div className="w-full lg:w-[640px] relative z-10">
          <div
            className="text-sm sm:text-base text-white/85 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: missionDesc }}
          />
        </div>
      </div>

      {/* Партнёры */}
      <div>
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          {t("aboutAgu.partners")}
        </p>
        <LogoLp />
      </div>
    </div>
  );
};

export default About;
