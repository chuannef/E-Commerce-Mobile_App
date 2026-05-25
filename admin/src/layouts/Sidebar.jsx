import { useUser } from "@clerk/clerk-react";
import { ShoppingBagIcon } from "lucide-react";
import { Link, useLocation } from "react-router";
import { NAVIGATION } from "./Navbar";

function Sidebar() {
  const location = useLocation();
  const { user } = useUser();
  const userInitials =
    user?.fullName
      ?.trim()
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "A";

  return (
    <div className="drawer-side is-drawer-close:overflow-visible">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

      <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
        <div className="p-4 w-full">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
              <ShoppingBagIcon className="w-6 h-6 text-primary-content" />
            </div>
            <span className="text-xl font-bold is-drawer-close:hidden">Admin</span>
          </div>
        </div>

        <ul className="menu w-full grow flex flex-col gap-2">
          {NAVIGATION.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`is-drawer-close:tooltip is-drawer-close:tooltip-right 
                    ${isActive ? "bg-primary text-primary-content" : ""}
                  `}
                >
                  {item.icon}
                  <span className="is-drawer-close:hidden">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="p-4 w-full">
          <div className="flex items-center gap-3">
            <div className="avatar shrink-0">
              {user?.imageUrl ? (
                <img src={user.imageUrl} alt={user?.fullName || "Admin user"} className="w-10 h-10 rounded-full" />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-content font-bold">
                  {userInitials}
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0 is-drawer-close:hidden">
              <p className="text-sm font-semibold truncate">
                {user?.fullName || `${user?.firstName || "Admin"} ${user?.lastName || ""}`.trim()}
              </p>

              <p className="text-xs opacity-60 truncate">
                {user?.emailAddresses?.[0]?.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
