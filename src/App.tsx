import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/organisms/error/Error";
import Layout from "./components/pages/layout/Layout";
import routes from "./routes/routes";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
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
  return <RouterProvider router={router} />;
}

export default App;
