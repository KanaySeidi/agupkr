import LogoLoop from "@/components/ui/LogoLoop";
import { Anchor, Banana, EggFried, Laugh } from "lucide-react";

const techLogos = [
  { node: <Anchor />, title: "React", href: "https://react.dev" },
  { node: <Banana />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <EggFried />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <Laugh />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

function LogoLp() {
  return (
    <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={100}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogoLp;
