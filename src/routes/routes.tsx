import {
  About,
  AboutLogo,
  AboutUstav,
  Budget,
  Cooperation,
  Council,
  History,
  Integrity,
  Journal,
  LawsGeneral,
  LawsInternal,
  Main,
  Professors,
  QualitySystem,
  Structure,
  Union,
} from "@/components/pages";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/about", element: <About /> },
  { path: "/about/charter", element: <AboutUstav /> },
  { path: "/about/logotip", element: <AboutLogo /> },
  { path: "/about/history", element: <History /> },
  { path: "/about/structure", element: <Structure /> },
  { path: "/about/council", element: <Council /> },
  { path: "/about/union", element: <Union /> },
  { path: "/about/quality-system", element: <QualitySystem /> },
  { path: "/about/journal", element: <Journal /> },
  { path: "/about/budget", element: <Budget /> },
  { path: "/about/professors", element: <Professors /> },
  { path: "/about/cooperation", element: <Cooperation /> },
  { path: "/about/integrity", element: <Integrity /> },
  { path: "/about/laws-general", element: <LawsGeneral /> },
  { path: "/about/laws-internal", element: <LawsInternal /> },
];

export default routes;
