import { useEffect } from "react";
import LogoLoop from "@/components/ui/LogoLoop";
import { useTranslation } from "react-i18next";
import { useSiteStore } from "@/store/site.store";

const LogoLp = () => {
  const { t } = useTranslation();
  const partners = useSiteStore(s => s.partners);
  const fetchPartners = useSiteStore(s => s.fetchPartners);

  useEffect(() => { fetchPartners(); }, [fetchPartners]);

  if (partners.length === 0) return null;

  const techLogos = partners.map(partner => {
    if (partner.photo_url) {
      return {
        src: partner.photo_url,
        href: partner.url || undefined,
        title: partner.name,
      };
    }
    return {
      node: (
        <div className="flex flex-col items-center justify-center px-5 py-3 mb-2 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-sinii hover:shadow-md transition-all duration-200 min-w-[130px] cursor-pointer">
          <span className="text-sm font-bold text-sinii whitespace-nowrap">
            {partner.name}
          </span>
        </div>
      ),
      href: partner.url || undefined,
      title: partner.name,
    };
  });

  return (
    <div className="relative overflow-hidden" style={{ height: "140px" }}>
      <LogoLoop
        logos={techLogos}
        speed={80}
        direction="left"
        logoHeight={76}
        gap={16}
        hoverSpeed={0}
        scaleOnHover={false}
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel={t("auto2.components.organisms.logoloop.LogoLp.35")}
      />
    </div>
  );
};

export default LogoLp;
