import { j as jsxRuntimeExports, c as cn, u as useLanguage, d as useAuth, r as reactExports, f as useRouterState, L as Link, l as languageNames } from "./index-ib-RthyM.js";
import { S as Slot, b as cva, L as LayoutDashboard, C as ChevronDown, U as User, d as LogOut, B as Button, M as Menu } from "./user-DZs1hiW7.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import { S as Sprout } from "./sprout-CuTJBTyQ.js";
import { X } from "./x-IzlvJscY.js";
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-destructive-foreground [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Comp,
    {
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }]
];
const HeartPulse = createLucideIcon("heart-pulse", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 12h-5", key: "r7krc0" }],
  ["path", { d: "M15 8h-5", key: "1khuty" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4", key: "zz82l3" }],
  [
    "path",
    {
      d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",
      key: "1ph1d7"
    }
  ]
];
const ScrollText = createLucideIcon("scroll-text", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m15 11-1 9", key: "5wnq3a" }],
  ["path", { d: "m19 11-4-7", key: "cnml18" }],
  ["path", { d: "M2 11h20", key: "3eubbj" }],
  ["path", { d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4", key: "yiazzp" }],
  ["path", { d: "M4.5 15.5h15", key: "13mye1" }],
  ["path", { d: "m5 11 4-7", key: "116ra9" }],
  ["path", { d: "m9 11 1 9", key: "1ojof7" }]
];
const ShoppingBasket = createLucideIcon("shopping-basket", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const LANGUAGES = ["en", "hi", "mr", "kn", "te", "pa"];
function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { isAuthenticated, userProfile, principal, login, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [langOpen, setLangOpen] = reactExports.useState(false);
  const [featuresOpen, setFeaturesOpen] = reactExports.useState(false);
  const [userMenuOpen, setUserMenuOpen] = reactExports.useState(false);
  const langRef = reactExports.useRef(null);
  const featuresRef = reactExports.useRef(null);
  const userMenuRef = reactExports.useRef(null);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const displayName = (userProfile == null ? void 0 : userProfile.displayName) || (principal ? `${principal.slice(0, 6)}…` : "Farmer");
  reactExports.useEffect(() => {
    function handleClick(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(e.target)) {
        setFeaturesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
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
    { label: t.learnTitle, href: "/learn", icon: BookOpen }
  ];
  const navLinks = [
    { label: t.navHome, href: "/" },
    { label: t.navDashboard, href: "/dashboard" }
  ];
  const isActive = (href) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href) && href !== "/";
  };
  const isFeatureActive = featureLinks.some((l) => isActive(l.href));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "nav",
    {
      className: "fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-white/10 shadow-glass-sm",
      "data-ocid": "navbar",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 min-w-0 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-5 h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold text-foreground hidden sm:block", children: [
              "FarmTech ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "AI" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-1", children: [
            navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: link.href,
                className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive(link.href) ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
                "data-ocid": `nav-link-${link.label.toLowerCase()}`,
                children: link.label
              },
              link.href
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: featuresRef, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setFeaturesOpen((o) => !o),
                  className: `flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isFeatureActive ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
                  "data-ocid": "nav-features-dropdown",
                  children: [
                    t.navFeatures,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        className: `w-3 h-3 transition-transform duration-200 ${featuresOpen ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              featuresOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 mt-2 w-52 glass rounded-xl overflow-hidden shadow-glass-lg border border-white/20 z-50", children: featureLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: link.href,
                  onClick: () => setFeaturesOpen(false),
                  className: `flex items-center gap-3 px-4 py-2.5 text-sm transition-colors duration-150 ${isActive(link.href) ? "bg-primary/25 text-primary font-medium" : "text-foreground hover:bg-white/10"}`,
                  "data-ocid": `nav-feature-${link.href.slice(1)}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { className: "w-4 h-4 text-accent shrink-0" }),
                    link.label
                  ]
                },
                link.href
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: langRef, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setLangOpen((o) => !o),
                  className: "flex items-center gap-1.5 px-3 py-2 rounded-lg glass text-sm text-foreground hover:bg-white/15 transition-smooth",
                  "aria-label": "Select language",
                  "data-ocid": "lang-switcher",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-accent" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block font-medium", children: languageNames[language] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        className: `w-3 h-3 text-muted-foreground transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              langOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 mt-2 w-44 glass rounded-xl overflow-hidden shadow-glass-lg border border-white/20 z-50", children: LANGUAGES.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setLanguage(lang);
                    setLangOpen(false);
                  },
                  className: `w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 flex items-center justify-between ${language === lang ? "bg-primary/25 text-primary font-medium" : "text-foreground hover:bg-white/10"}`,
                  "data-ocid": `lang-option-${lang}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: languageNames[lang] }),
                    language === lang && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent" })
                  ]
                },
                lang
              )) })
            ] }),
            isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: userMenuRef, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setUserMenuOpen((o) => !o),
                  className: "flex items-center gap-2 px-3 py-2 rounded-lg glass text-sm text-foreground hover:bg-white/15 transition-smooth",
                  "aria-label": "User menu",
                  "data-ocid": "nav-user-menu",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block font-medium max-w-[80px] truncate", children: displayName }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        className: `w-3 h-3 text-muted-foreground transition-transform duration-200 ${userMenuOpen ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              userMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 mt-2 w-48 glass rounded-xl overflow-hidden shadow-glass-lg border border-white/20 z-50", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/profile",
                    onClick: () => setUserMenuOpen(false),
                    className: "flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-white/10 transition-colors duration-150",
                    "data-ocid": "nav-user-profile",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-accent" }),
                      "Profile"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/settings",
                    onClick: () => setUserMenuOpen(false),
                    className: "flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-white/10 transition-colors duration-150",
                    "data-ocid": "nav-user-settings",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "w-4 h-4 text-accent" }),
                      "Settings"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setUserMenuOpen(false);
                      logout();
                    },
                    className: "flex items-center gap-3 w-full px-4 py-2.5 text-sm text-destructive hover:bg-destructive/10 transition-colors duration-150",
                    "data-ocid": "nav-logout",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
                      "Logout"
                    ]
                  }
                ) })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                size: "sm",
                onClick: login,
                className: "hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-glass-sm",
                "data-ocid": "nav-login-btn",
                children: "Login"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors",
                onClick: () => setMobileOpen((o) => !o),
                "aria-label": mobileOpen ? "Close menu" : "Open menu",
                "data-ocid": "nav-hamburger",
                children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 text-foreground" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5 text-foreground" })
              }
            )
          ] })
        ] }) }),
        mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden bg-card/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 space-y-1", children: [
          navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: link.href,
              onClick: () => setMobileOpen(false),
              className: `block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive(link.href) ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
              "data-ocid": `mobile-nav-${link.label.toLowerCase()}`,
              children: link.label
            },
            link.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-1 pb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: t.navFeatures }),
            featureLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: link.href,
                onClick: () => setMobileOpen(false),
                className: `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive(link.href) ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`,
                "data-ocid": `mobile-nav-feature-${link.href.slice(1)}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { className: "w-4 h-4 text-accent shrink-0" }),
                  link.label
                ]
              },
              link.href
            ))
          ] }),
          isAuthenticated ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 pt-1 border-t border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/profile",
                onClick: () => setMobileOpen(false),
                className: "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-white/5",
                "data-ocid": "mobile-nav-profile",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-accent" }),
                  "Profile"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  setMobileOpen(false);
                  logout();
                },
                className: "flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10",
                "data-ocid": "mobile-nav-logout",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-4 h-4" }),
                  "Logout"
                ]
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold",
              onClick: () => {
                setMobileOpen(false);
                login();
              },
              "data-ocid": "mobile-nav-login",
              children: "Login with Internet Identity"
            }
          )
        ] })
      ]
    }
  );
}
export {
  Badge as B,
  Globe as G,
  HeartPulse as H,
  Navbar as N,
  ShoppingBasket as S,
  TrendingUp as T,
  ScrollText as a,
  BookOpen as b
};
