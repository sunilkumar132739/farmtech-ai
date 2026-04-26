import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronDown,
  Globe,
  HeartPulse,
  LayoutDashboard,
  LogOut,
  Menu,
  ScrollText,
  ShoppingBasket,
  Sprout,
  TrendingUp,
  User,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../hooks/useAuth";
import { languageNames } from "../i18n/translations";
import type { Language } from "../types";

const LANGUAGES: Language[] = ["en", "hi", "mr", "kn", "te", "pa"];

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { isAuthenticated, userProfile, principal, login, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const displayName =
    userProfile?.displayName ||
    (principal ? `${principal.slice(0, 6)}…` : "Farmer");

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (
        featuresRef.current &&
        !featuresRef.current.contains(e.target as Node)
      ) {
        setFeaturesOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(e.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const featureLinks = [
    { label: t.cropDoctorTitle, href: "/crop-doctor", icon: HeartPulse },
    { label: t.marketplaceTitle, href: "/marketplace", icon: ShoppingBasket },
    { label: t.incomeTrackerTitle, href: "/income-tracker", icon: TrendingUp },
    { label: t.farmPlanTitle, href: "/farm-plan", icon: LayoutDashboard },
    { label: t.schemesTitle, href: "/schemes", icon: ScrollText },
    { label: t.learnTitle, href: "/learn", icon: BookOpen },
  ];

  const navLinks = [
    { label: t.navHome, href: "/" },
    { label: t.navDashboard, href: "/dashboard" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href) && href !== "/";
  };

  const isFeatureActive = featureLinks.some((l) => isActive(l.href));

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-white/10 shadow-glass-sm"
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-0 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <Sprout className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground hidden sm:block">
              FarmTech <span className="text-accent">AI</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                data-ocid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}

            {/* Features dropdown */}
            <div className="relative" ref={featuresRef}>
              <button
                type="button"
                onClick={() => setFeaturesOpen((o) => !o)}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isFeatureActive
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                data-ocid="nav-features-dropdown"
              >
                {t.navFeatures}
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${featuresOpen ? "rotate-180" : ""}`}
                />
              </button>

              {featuresOpen && (
                <div className="absolute left-0 mt-2 w-52 glass rounded-xl overflow-hidden shadow-glass-lg border border-white/20 z-50">
                  {featureLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setFeaturesOpen(false)}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${
                        isActive(link.href)
                          ? "bg-primary/25 text-primary font-medium"
                          : "text-foreground hover:bg-white/10"
                      }`}
                      data-ocid={`nav-feature-${link.href.slice(1)}`}
                    >
                      <link.icon className="w-4 h-4 text-accent shrink-0" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg glass text-sm text-foreground hover:bg-white/15 transition-smooth"
                aria-label="Select language"
                data-ocid="lang-switcher"
              >
                <Globe className="w-4 h-4 text-accent" />
                <span className="hidden sm:block font-medium">
                  {languageNames[language]}
                </span>
                <ChevronDown
                  className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-44 glass rounded-xl overflow-hidden shadow-glass-lg border border-white/20 z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => {
                        setLanguage(lang);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 flex items-center justify-between ${
                        language === lang
                          ? "bg-primary/25 text-primary font-medium"
                          : "text-foreground hover:bg-white/10"
                      }`}
                      data-ocid={`lang-option-${lang}`}
                    >
                      <span>{languageNames[lang]}</span>
                      {language === lang && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth: login/user menu */}
            {isAuthenticated ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  type="button"
                  onClick={() => setUserMenuOpen((o) => !o)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm text-foreground hover:bg-white/15 transition-smooth"
                  aria-label="User menu"
                  data-ocid="nav-user-menu"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center">
                    <User className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="hidden sm:block font-medium max-w-[80px] truncate">
                    {displayName}
                  </span>
                  <ChevronDown
                    className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass rounded-xl overflow-hidden shadow-glass-lg border border-white/20 z-50">
                    <Link
                      to="/profile"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-white/10 transition-colors duration-150"
                      data-ocid="nav-user-profile"
                    >
                      <User className="w-4 h-4 text-accent" />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-white/10 transition-colors duration-150"
                      data-ocid="nav-user-settings"
                    >
                      <LayoutDashboard className="w-4 h-4 text-accent" />
                      Settings
                    </Link>
                    <div className="border-t border-white/10 mt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setUserMenuOpen(false);
                          logout();
                        }}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-destructive hover:bg-destructive/10 transition-colors duration-150"
                        data-ocid="nav-logout"
                      >
                        <LogOut className="w-4 h-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Button
                size="sm"
                onClick={login}
                className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glass-sm"
                data-ocid="nav-login-btn"
              >
                Login
              </Button>
            )}

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="nav-hamburger"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isActive(link.href)
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
              data-ocid={`mobile-nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-1 pb-1">
            <p className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {t.navFeatures}
            </p>
            {featureLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                data-ocid={`mobile-nav-feature-${link.href.slice(1)}`}
              >
                <link.icon className="w-4 h-4 text-accent shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>

          {isAuthenticated ? (
            <div className="space-y-1 pt-1 border-t border-white/10">
              <Link
                to="/profile"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-white/5"
                data-ocid="mobile-nav-profile"
              >
                <User className="w-4 h-4 text-accent" />
                Profile
              </Link>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  logout();
                }}
                className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10"
                data-ocid="mobile-nav-logout"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          ) : (
            <Button
              className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              onClick={() => {
                setMobileOpen(false);
                login();
              }}
              data-ocid="mobile-nav-login"
            >
              Login with Internet Identity
            </Button>
          )}
        </div>
      )}
    </nav>
  );
}
