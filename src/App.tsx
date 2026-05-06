import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/organisms/error/Error";
import Layout from "./components/pages/layout/Layout";
import routes from "./routes/routes";
import ScrollToTop from "./utils/ScrollToTop";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    element: (
      <ScrollToTop>
        <Layout />
      </ScrollToTop>
    ),
    errorElement: <Error />,
    children: routes,
  },
]);

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("app.title");
  }, [t, i18n.language]);

  return <RouterProvider router={router} />;
}

export default App;
