import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCmsStore } from "@/store/cms.store";
import type { PageBlock } from "@/api/types";
import Line from "@/components/atoms/Line";
import Loader from "@/components/organisms/loader/Loader";

function ContactTextBlock({ block }: { block: PageBlock }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row gap-5">
      {block.photo_url && (
        <img
          src={block.photo_url}
          alt={block.title || ""}
          className="w-full sm:w-40 sm:h-40 rounded-lg object-cover flex-shrink-0"
        />
      )}
      <div className="flex flex-col gap-3">
        {block.title && (
          <h2 className="text-xl sm:text-2xl font-semibold text-sinii">{block.title}</h2>
        )}
        {block.description && (
          <div
            className="text-sm sm:text-base text-[#4C4C4C] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: block.description }}
          />
        )}
      </div>
    </div>
  );
}

function ContactLinkBlock({ block }: { block: PageBlock }) {
  if (!block.url) return null;
  return (
    <a
      href={block.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sinii hover:underline text-sm sm:text-base"
    >
      {block.title || block.url}
    </a>
  );
}

function ContactSocialBlock({ block }: { block: PageBlock }) {
  if (!block.url) return null;
  return (
    <a
      href={block.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sinii hover:underline text-sm sm:text-base"
    >
      {block.title || block.url}
    </a>
  );
}

const Contacts = () => {
  const { t } = useTranslation();
  const { pagesByGroup, pageDetails, groupStatus, fetchGroupWithDetail } = useCmsStore();

  useEffect(() => {
    fetchGroupWithDetail("contacts");
  }, []);

  const isLoading =
    !groupStatus.contacts ||
    groupStatus.contacts === "idle" ||
    groupStatus.contacts === "loading";

  if (isLoading) return <Loader />;

  const pages = pagesByGroup["contacts"] ?? [];

  return (
    <div className="py-6 sm:py-10 flex flex-col gap-10">
      <Line title={t("header.navs.nav8")} />

      {pages.map((p, idx) => {
        const detail = pageDetails[p.slug];
        if (!detail) return null;

        const blocks = [...detail.blocks].sort((a, b) => a.order - b.order);
        const textBlocks = blocks.filter(b => b.block_type === "text" || b.block_type === "photo_text");
        const linkBlocks = blocks.filter(b => b.block_type === "link");
        const socialBlocks = blocks.filter(b => b.block_type === "social");
        const hasLinks = linkBlocks.length > 0 || socialBlocks.length > 0;

        return (
          <div key={p.id} className="flex flex-col gap-6">
            {idx > 0 && <hr className="border-slate-200" />}

            {detail.main_photo_url && (
              <img
                src={detail.main_photo_url}
                alt={detail.title}
                className="w-full rounded-xl object-cover max-h-72"
              />
            )}

            {detail.title && (
              <h2 className="text-xl sm:text-2xl font-bold text-sinii">{detail.title}</h2>
            )}

            {detail.description && (
              <div
                className="text-sm sm:text-base text-[#4C4C4C] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: detail.description }}
              />
            )}

            {textBlocks.map(b => (
              <ContactTextBlock key={b.id} block={b} />
            ))}

            {hasLinks && (
              <div className="bg-[#F7F9FF] rounded-xl p-5 flex flex-col gap-3">
                {linkBlocks.map(b => <ContactLinkBlock key={b.id} block={b} />)}
                {socialBlocks.map(b => <ContactSocialBlock key={b.id} block={b} />)}
              </div>
            )}
          </div>
        );
      })}

      {pages.length === 0 && (
        <p className="text-gray-400 text-sm">{t("header.navs.nav8")}</p>
      )}
    </div>
  );
};

export default Contacts;
