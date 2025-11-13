import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import Loader from "@/components/organisms/loader/Loader";
import Navbar from "@/components/organisms/navbar/Navbar";
import QuickLinks from "@/components/organisms/quickLinks/QuickLinks";
import Sidebar from "@/components/organisms/sidebar/Sidebar";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <>
      <Header />
      {isHome ? null : <Navbar />}
      <main className="">
        <Suspense fallback={<Loader />}>
          {isHome ? (
            <div className="mt-40">
              <Outlet />
            </div>
          ) : (
            <div className="w-11/12 mx-auto">
              <div className="flex gap-8 mt-5 mb-20">
                <Sidebar />
                <div className="flex-1 min-w-0 mt-5 mb-20">
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
