import { Link, useRouterState } from "@tanstack/react-router";
import {
  BarChart3,
  Cpu,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Shield,
  Sprout,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useIsAdmin } from "../hooks/useQueries";

interface SidebarLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SIDEBAR_LINKS: SidebarLink[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Crop Doctor", href: "/crop-doctor", icon: Sprout },
  { label: "Marketplace", href: "/marketplace", icon: BarChart3 },
  { label: "IoT Sensors", href: "/income-tracker", icon: Cpu },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const { logout, userProfile, principal } = useAuth();
  const { data: isAdmin } = useIsAdmin();
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const displayName =
    userProfile?.displayName ||
    (principal ? `${principal.slice(0, 8)}...` : "Farmer");

  const isActive = (href: string) =>
    currentPath === href || currentPath.startsWith(`${href}/`);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") setOpen(false);
  }

  return (
    <>
      {/* Mobile toggle button */}
      <button
        type="button"
        className="sidebar-toggle fixed top-4 left-4 z-50 bg-card/80 backdrop-blur-sm shadow-glass-sm"
        onClick={() => setOpen((o) => !o)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen((o) => !o);
        }}
        aria-label={open ? "Close sidebar" : "Open sidebar"}
        data-ocid="sidebar-toggle"
      >
        {open ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </button>

      {/* Backdrop for mobile */}
      {open && (
        // biome-ignore lint/a11y/useKeyWithClickEvents: backdrop is decorative
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`sidebar-nav z-40 ${open ? "active" : ""}`}
        data-ocid="sidebar-nav"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-white/10">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md shrink-0">
            <Sprout className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <p className="font-display text-sm font-bold text-foreground leading-none">
              FarmTech <span className="text-accent">AI</span>
            </p>
            <p className="text-[10px] text-muted-foreground mt-0.5 truncate">
              Smart Agriculture
            </p>
          </div>
        </div>

        {/* User info */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <div className="w-9 h-9 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center shrink-0">
            <User className="w-4 h-4 text-primary" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">
              {displayName}
            </p>
            <p className="text-[10px] text-accent font-medium truncate">
              {isAdmin ? "Admin" : "Verified Farmer"}
            </p>
          </div>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              onKeyDown={handleKeyDown}
              className={`sidebar-link ${isActive(link.href) ? "active" : ""}`}
              data-ocid={`sidebar-link-${link.href.slice(1) || "home"}`}
            >
              <link.icon className="w-4 h-4 shrink-0" />
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          ))}

          {/* Admin-only: Admin Dashboard */}
          {isAdmin && (
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              onKeyDown={handleKeyDown}
              className={`sidebar-link ${isActive("/admin") ? "active" : ""} border border-accent/20 bg-accent/5 hover:bg-accent/15`}
              data-ocid="sidebar-link-admin"
            >
              <Shield className="w-4 h-4 shrink-0 text-accent" />
              <span className="text-sm font-medium text-accent">
                Admin Dashboard
              </span>
            </Link>
          )}
        </nav>

        {/* Logout */}
        <div className="px-3 py-4 border-t border-white/10">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              logout();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setOpen(false);
                logout();
              }
            }}
            className="sidebar-link w-full text-destructive hover:bg-destructive/15"
            data-ocid="sidebar-logout"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
