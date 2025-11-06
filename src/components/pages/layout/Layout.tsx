import Footer from "@/components/organisms/footer/Footer";
import Header from "@/components/organisms/header/Header";
import Loader from "@/components/organisms/loader/Loader";
import Navbar from "@/components/organisms/navbar/Navbar";
import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" ? null : <Navbar />}
      <main className="mt-40">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
