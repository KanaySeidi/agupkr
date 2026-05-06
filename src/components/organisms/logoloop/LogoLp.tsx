import LogoLoop from "@/components/ui/LogoLoop";
import { useTranslation } from "react-i18next";

const partners = [
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.1", sectorKey: "auto2.components.organisms.logoloop.LogoLp.2" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.3", sectorKey: "auto2.components.organisms.logoloop.LogoLp.4" },
  { name: "Elsom", sectorKey: "auto2.components.organisms.logoloop.LogoLp.5" },
  { name: "MBank", sectorKey: "auto2.components.organisms.logoloop.LogoLp.6" },
  { name: "O!", sectorKey: "auto2.components.organisms.logoloop.LogoLp.7" },
  { name: "MegaCom", sectorKey: "auto2.components.organisms.logoloop.LogoLp.8" },
  { name: "Beeline KG", sectorKey: "auto2.components.organisms.logoloop.LogoLp.9" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.10", sectorKey: "auto2.components.organisms.logoloop.LogoLp.11" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.12", sectorKey: "auto2.components.organisms.logoloop.LogoLp.13" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.14", sectorKey: "auto2.components.organisms.logoloop.LogoLp.15" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.16", sectorKey: "auto2.components.organisms.logoloop.LogoLp.17" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.18", sectorKey: "auto2.components.organisms.logoloop.LogoLp.19" },
  { name: "KICB", sectorKey: "auto2.components.organisms.logoloop.LogoLp.20" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.21", sectorKey: "auto2.components.organisms.logoloop.LogoLp.22" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.23", sectorKey: "auto2.components.organisms.logoloop.LogoLp.24" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.25", sectorKey: "auto2.components.organisms.logoloop.LogoLp.26" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.27", sectorKey: "auto2.components.organisms.logoloop.LogoLp.28" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.29", sectorKey: "auto2.components.organisms.logoloop.LogoLp.30" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.31", sectorKey: "auto2.components.organisms.logoloop.LogoLp.32" },
  { nameKey: "auto2.components.organisms.logoloop.LogoLp.33", sectorKey: "auto2.components.organisms.logoloop.LogoLp.34" },
];

const LogoLp = () => {
  const { t } = useTranslation();
  const techLogos = partners.map(({ name, nameKey, sectorKey }) => {
    const partnerName = name ?? t(nameKey);

    return {
      node: (
        <div className="flex flex-col items-center justify-center px-5 py-3 mb-2 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-sinii hover:shadow-md transition-all duration-200 min-w-[130px] cursor-pointer">
          <span className="text-sm font-bold text-sinii whitespace-nowrap">
            {partnerName}
          </span>
          <span className="text-xs text-slate-400 mt-0.5">{t(sectorKey)}</span>
        </div>
      ),
      title: partnerName,
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
}

export default LogoLp;
