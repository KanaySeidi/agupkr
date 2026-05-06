import { useLayoutEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopOnPageChangeProps = {
  children: ReactNode;
  behavior?: ScrollBehavior;
};

const ScrollToTop = ({
  children,
  behavior = "smooth",
}: ScrollToTopOnPageChangeProps) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior });
  }, [pathname, behavior]);

  return <>{children}</>;
};

export default ScrollToTop;
