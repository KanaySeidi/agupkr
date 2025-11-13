import { useSidebarNav } from "@/utils/sidebarData";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navItems = useSidebarNav();
  const { pathname } = useLocation();

  return (
    <aside className="hidden md:block w-64 shrink-0">
      <div className="sticky top-44 p-4 border-r border-gray-200 h-[calc(100vh-7rem)] overflow-y-auto">
        <nav className="flex flex-col gap-2 text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`relative block py-2 px-4 rounded-md transition-all duration-150 ${
                  isActive
                    ? "text-blue-600 font-medium bg-blue-50"
                    : "text-gray-800 hover:text-blue-500 hover:bg-gray-100"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-600 rounded-r-sm" />
                )}
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
