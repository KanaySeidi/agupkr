import { About, AboutLogo, AboutUstav, Main } from "@/components/pages";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/about", element: <About /> },
  { path: "/about/ustav", element: <AboutUstav /> },
  { path: "/about/logotip", element: <AboutLogo /> },
];

export default routes;
