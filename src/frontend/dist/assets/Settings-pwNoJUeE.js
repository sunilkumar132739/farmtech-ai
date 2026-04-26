import { u as useLanguage, d as useAuth, r as reactExports, j as jsxRuntimeExports, l as languageNames, L as Link } from "./index-ib-RthyM.js";
import { B as Badge, G as Globe } from "./Navbar-BxJ_VEM-.js";
import { L as Label } from "./label-Bw3fJEXf.js";
import { S as Switch } from "./switch-BHowVGGm.js";
import { u as ue } from "./index-C47K-RDy.js";
import { L as Layout } from "./Layout-Cs_Ziq3X.js";
import { S as Sidebar } from "./Sidebar-Dg-WUZ3p.js";
import { B as Bell } from "./bell-DhShFftw.js";
import { V as Volume2 } from "./volume-2-5ZZ-FCdX.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import { S as Sun } from "./sun-UjGSzuyd.js";
import { U as User } from "./user-DZs1hiW7.js";
import { C as ChevronRight } from "./chevron-right-CFF9X-V2.js";
import { C as Copy } from "./copy-C-KDkIE3.js";
import "./sprout-CuTJBTyQ.js";
import "./x-IzlvJscY.js";
import "./index-DeTknbey.js";
import "./map-pin-CBfij1sz.js";
import "./leaf-BDTtk3JC.js";
import "./cpu-Bvvu7u4w.js";
import "./shield-wG7DL4C6.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
];
const Moon = createLucideIcon("moon", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = createLucideIcon("smartphone", __iconNode);
const LANGUAGES = ["en", "hi", "mr", "kn", "te", "pa"];
const LANGUAGE_FLAG = {
  en: "🇬🇧",
  hi: "🇮🇳",
  mr: "🇮🇳",
  kn: "🇮🇳",
  te: "🇮🇳",
  pa: "🇮🇳"
};
function readDarkMode() {
  try {
    return localStorage.getItem("theme") === "dark";
  } catch {
    return false;
  }
}
function applyDarkMode(dark) {
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}
const NOTIF_SETTINGS = [
  {
    id: "notifications",
    label: "Push Notifications",
    description: "Receive alerts for soil and weather events",
    icon: Bell,
    storageKey: "farmtech_notifications"
  },
  {
    id: "voiceAssist",
    label: "Voice Assistant",
    description: "Enable audio guidance for farm tasks",
    icon: Volume2,
    storageKey: "farmtech_voice_assist"
  },
  {
    id: "mobileOptimized",
    label: "Mobile Optimized View",
    description: "Simplified layout for smaller screens",
    icon: Smartphone,
    storageKey: "farmtech_mobile_optimized"
  }
];
function readStorageBoolean(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    if (val === null) return fallback;
    return val === "true";
  } catch {
    return fallback;
  }
}
function Settings() {
  const { language, setLanguage } = useLanguage();
  const { userProfile, principal } = useAuth();
  const [darkMode, setDarkMode] = reactExports.useState(readDarkMode);
  const [toggles, setToggles] = reactExports.useState(
    () => Object.fromEntries(
      NOTIF_SETTINGS.map((s) => [
        s.id,
        readStorageBoolean(s.storageKey, false)
      ])
    )
  );
  reactExports.useEffect(() => {
    applyDarkMode(darkMode);
  }, [darkMode]);
  function handleDarkModeToggle(checked) {
    setDarkMode(checked);
    applyDarkMode(checked);
    ue.success(`Switched to ${checked ? "Dark" : "Light"} mode`);
  }
  function handleToggle(id, key) {
    setToggles((prev) => {
      const next = !prev[id];
      try {
        localStorage.setItem(key, String(next));
      } catch {
      }
      return { ...prev, [id]: next };
    });
    ue.success("Setting saved");
  }
  function handleCopyPrincipal() {
    if (principal) {
      navigator.clipboard.writeText(principal).then(() => {
        ue.success("Principal ID copied");
      });
    }
  }
  const truncatedPrincipal = principal ? `${principal.slice(0, 12)}...${principal.slice(-6)}` : "Not connected";
  const displayName = (userProfile == null ? void 0 : userProfile.displayName) || (userProfile == null ? void 0 : userProfile.fullName) || "Farmer";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen gradient-bg flex", "data-ocid": "settings-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 md:ml-64 px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 md:hidden" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "welcome-banner mb-6", "data-ocid": "settings-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "welcome-text", children: "Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "welcome-subtitle", children: "Customize your FarmTech AI experience" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "glass-card",
            "data-ocid": "settings-appearance",
            "aria-labelledby": "appearance-heading",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4 text-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    id: "appearance-heading",
                    className: "text-sm font-semibold text-foreground",
                    children: "Appearance"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0", children: darkMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-5 h-5 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-5 h-5 text-accent" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Label,
                      {
                        htmlFor: "dark-mode-toggle",
                        className: "text-sm font-semibold text-foreground cursor-pointer block",
                        children: "Dark Mode"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: darkMode ? "Dark theme active" : "Light theme active" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: "outline",
                      className: `text-xs font-semibold px-3 py-1 transition-smooth border ${darkMode ? "bg-primary/20 border-primary/40 text-primary" : "bg-accent/20 border-accent/40 text-accent"}`,
                      "data-ocid": "dark-mode-status",
                      children: darkMode ? "Dark" : "Light"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      id: "dark-mode-toggle",
                      checked: darkMode,
                      onCheckedChange: handleDarkModeToggle,
                      className: "shrink-0",
                      "data-ocid": "toggle-dark-mode"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "💾 Preference is saved in your browser — persists across sessions." }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "glass-card",
            "data-ocid": "settings-language",
            "aria-labelledby": "language-heading",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-4 h-4 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h2",
                    {
                      id: "language-heading",
                      className: "text-sm font-semibold text-foreground",
                      children: "Language"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "outline",
                    className: "text-xs border-primary/40 text-primary bg-primary/10",
                    children: [
                      LANGUAGE_FLAG[language],
                      " ",
                      languageNames[language]
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Select your preferred language. All pages will update immediately." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: LANGUAGES.map((lang) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setLanguage(lang);
                    ue.success(
                      `Language changed to ${languageNames[lang]}`
                    );
                  },
                  className: `px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth border flex items-center gap-2 ${language === lang ? "bg-primary/30 border-primary/50 text-primary shadow-sm" : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-foreground"}`,
                  "data-ocid": `settings-lang-${lang}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: LANGUAGE_FLAG[lang] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: languageNames[lang] }),
                    language === lang && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] font-bold text-primary", children: "✓" })
                  ]
                },
                lang
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "glass-card",
            "data-ocid": "settings-account",
            "aria-labelledby": "account-heading",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-accent" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    id: "account-heading",
                    className: "text-sm font-semibold text-foreground",
                    children: "Account"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Display Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground truncate mt-0.5", children: displayName })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/profile",
                      className: "ml-3 flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-smooth shrink-0",
                      "data-ocid": "settings-edit-name",
                      children: [
                        "Edit ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3 h-3" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Principal ID" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-foreground truncate mt-0.5", children: truncatedPrincipal })
                  ] }),
                  principal && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: handleCopyPrincipal,
                      className: "ml-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-smooth shrink-0",
                      "aria-label": "Copy principal ID",
                      "data-ocid": "settings-copy-principal",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/profile",
                    className: "flex items-center justify-between w-full p-3 rounded-xl bg-primary/10 border border-primary/25 hover:bg-primary/20 transition-smooth group",
                    "data-ocid": "settings-goto-profile",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary", children: "Edit Profile" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Update your display name and details" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-primary group-hover:translate-x-0.5 transition-smooth" })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "section",
          {
            className: "glass-card",
            "data-ocid": "settings-preferences",
            "aria-labelledby": "preferences-heading",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h2",
                {
                  id: "preferences-heading",
                  className: "text-sm font-semibold text-foreground mb-5",
                  children: "Notifications & Preferences"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: NOTIF_SETTINGS.map((setting, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(setting.icon, { className: "w-4 h-4 text-primary" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Label,
                        {
                          htmlFor: `toggle-${setting.id}`,
                          className: "text-sm font-medium text-foreground cursor-pointer",
                          children: setting.label
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 truncate", children: setting.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Switch,
                    {
                      id: `toggle-${setting.id}`,
                      checked: toggles[setting.id] ?? false,
                      onCheckedChange: () => handleToggle(setting.id, setting.storageKey),
                      className: "shrink-0 ml-4",
                      "data-ocid": `toggle-${setting.id}`
                    }
                  )
                ] }),
                index < NOTIF_SETTINGS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/5" })
              ] }, setting.id)) })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
export {
  Settings as default
};
