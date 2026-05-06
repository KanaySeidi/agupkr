import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import Loader from "@/components/organisms/loader/Loader";
import QuickLinks from "@/components/organisms/quickLinks/QuickLinks";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import { hasSidebar } from "@/config/siteNavigation";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const showSidebar = hasSidebar(location.pathname);

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loader />}>
          {isHome ? (
            <div style={{ paddingTop: "var(--header-h, 160px)" }}>
              <Outlet />
            </div>
          ) : (
            <div
              className="w-11/12 mx-auto"
              style={{ paddingTop: "calc(var(--header-h, 224px) + 16px)" }}
            >
              <div className="flex gap-8 mb-20">
                {showSidebar ? <Sidebar /> : null}
                <div className="flex-1 min-w-0 mb-20">
                  <Outlet />
                  <QuickLinks />
                </div>
              </div>
            </div>
          )}
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
