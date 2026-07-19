import { useEffect } from "react";
import { useCmsStore } from "@/store/cms.store";
import type { PageBlock } from "@/api/types";
import Line from "@/components/atoms/Line";

// ── Block renderers ────────────────────────────────────────────────────────────

function TextBlock({ block }: { block: PageBlock }) {
  return (
    <div className="flex flex-col gap-3">
      {block.title && <h2 className="text-xl font-semibold">{block.title}</h2>}
      {block.description && (
        <div
          className="text-sm sm:text-base text-[#4C4C4C] leading-relaxed prose max-w-none"
          dangerouslySetInnerHTML={{ __html: block.description }}
        />
      )}
    </div>
  );
}

function PhotoTextBlock({ block }: { block: PageBlock }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 items-start">
      {block.photo_url && (
        <img
          src={block.photo_url}
          alt={block.title}
          className="w-full sm:w-1/2 rounded-xl object-cover"
        />
      )}
      <div className="flex flex-col gap-3 flex-1">
        {block.title && <h2 className="text-xl font-semibold">{block.title}</h2>}
        {block.description && (
          <div
            className="text-sm sm:text-base text-[#4C4C4C] leading-relaxed prose max-w-none"
            dangerouslySetInnerHTML={{ __html: block.description }}
          />
        )}
      </div>
    </div>
  );
}

function LinkBlock({ block }: { block: PageBlock }) {
  if (!block.url) return null;
  return (
    <a
      href={block.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sinii hover:text-hover-sinii underline text-sm sm:text-base"
    >
      {block.title || block.url}
    </a>
  );
}

function PdfBlock({ block }: { block: PageBlock }) {
  const url = block.file_url || block.url;
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sinii hover:text-hover-sinii underline text-sm sm:text-base"
    >
      {block.title || "Скачать PDF"}
    </a>
  );
}

function NumberBlock({ block }: { block: PageBlock }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-3xl font-bold text-sinii">{block.value}</span>
      {block.title && <span className="text-sm text-gray-500">{block.title}</span>}
    </div>
  );
}

function SocialBlock({ block }: { block: PageBlock }) {
  if (!block.url) return null;
  return (
    <a
      href={block.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sinii hover:text-hover-sinii underline text-sm sm:text-base"
    >
      {block.title || block.url}
    </a>
  );
}

function BlockRenderer({ block }: { block: PageBlock }) {
  switch (block.block_type) {
    case "text":       return <TextBlock block={block} />;
    case "photo_text": return <PhotoTextBlock block={block} />;
    case "link":       return <LinkBlock block={block} />;
    case "pdf":        return <PdfBlock block={block} />;
    case "number":     return <NumberBlock block={block} />;
    case "social":     return <SocialBlock block={block} />;
    default:           return null;
  }
}

// ── Main component ─────────────────────────────────────────────────────────────

type Props = {
  slug: string;
  title?: string;
  fallback?: React.ReactNode;
};

const CmsPageView = ({ slug, title, fallback }: Props) => {
  const { pageDetails, detailStatus, fetchPage } = useCmsStore();

  useEffect(() => {
    fetchPage(slug);
  }, [slug]);

  const status = detailStatus[slug];
  const page = pageDetails[slug];

  if (status === "loading" || status === "idle" || !page) {
    return fallback ? <>{fallback}</> : null;
  }

  if (status === "error") return null;

  const blocks = [...page.blocks].sort((a, b) => a.order - b.order);
  const pageTitle = title ?? page.title;

  return (
    <div className="w-full flex flex-col gap-6">
      {pageTitle && <Line title={pageTitle} />}
      {page.main_photo_url && (
        <img src={page.main_photo_url} alt={pageTitle} className="w-full rounded-xl object-cover" />
      )}
      {page.description && !blocks.length && (
        <div
          className="text-sm sm:text-base text-[#4C4C4C] leading-relaxed prose max-w-none"
          dangerouslySetInnerHTML={{ __html: page.description }}
        />
      )}
      {blocks.map(block => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </div>
  );
};

export default CmsPageView;
