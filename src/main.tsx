import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n.tsx";
import { setupLanguageSync } from "./store/i18n-sync";

setupLanguageSync();
createRoot(document.getElementById("root")!).render(<App />);
