import { useMemo, useRef, useEffect } from "react";
import { useSidebarNav } from "@/utils/sidebarData";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navItems = useSidebarNav();
  const { pathname } = useLocation();

  const itemRefs = useRef<Record<number, HTMLAnchorElement | null>>({});

  const normalize = (p: string) =>
    p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p;

  const currentPath = normalize(pathname);

  const activeId = useMemo(() => {
    let bestId: number | null = null;
    let bestLen = -1;

    for (const item of navItems) {
      if (!item.path) continue;
      const itemPath = normalize(item.path);

      if (currentPath === itemPath) {
        if (itemPath.length > bestLen) {
          bestLen = itemPath.length;
          bestId = item.id;
        }
        continue;
      }

      if (itemPath !== "/" && currentPath.startsWith(itemPath + "/")) {
        if (itemPath.length > bestLen) {
          bestLen = itemPath.length;
          bestId = item.id;
        }
      }
    }

    return bestId;
  }, [navItems, currentPath]);

  useEffect(() => {
    if (!activeId) return;
    const el = itemRefs.current[activeId];
    if (!el) return;

    const container = el.closest("[data-sidebar-scroll]") as HTMLElement | null;
    if (container) {
      const elRect = el.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();
      const offset =
        elRect.top - contRect.top - contRect.height / 2 + elRect.height / 2;
      container.scrollBy({ top: offset, behavior: "smooth" });
    } else {
      el.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, [activeId]);

  return (
    <aside className="hidden md:block w-64 shrink-0" aria-label="Sidebar">
      <div className="sticky top-44 p-4 border-r border-gray-200">
        <nav
          className="max-h-[calc(100vh-7rem)] overflow-y-auto flex flex-col gap-2 text-sm"
          data-sidebar-scroll
          role="navigation"
        >
          {navItems.map((item) => {
            const isActive = activeId === item.id;

            return (
              <Link
                key={item.id}
                to={item.path}
                ref={(el) => (itemRefs.current[item.id] = el)}
                className={`relative block py-2 px-4 rounded-md transition-colors duration-150 ${
                  isActive
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-gray-800 hover:text-blue-500 hover:bg-gray-100"
                }`}
                aria-current={isActive ? "page" : undefined}
                title={typeof item.title === "string" ? item.title : undefined}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-600 rounded-r-sm" />
                )}
                <span className="relative z-10">{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
