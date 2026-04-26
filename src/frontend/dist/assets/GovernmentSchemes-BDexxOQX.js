import { u as useLanguage, r as reactExports, j as jsxRuntimeExports } from "./index-ib-RthyM.js";
import { N as Navbar, a as ScrollText, B as Badge } from "./Navbar-BxJ_VEM-.js";
import { B as Button } from "./user-DZs1hiW7.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-DEgCNCa5.js";
import { I as Input } from "./input-CIAHzYDO.js";
import { L as Label } from "./label-Bw3fJEXf.js";
import { u as ue } from "./index-C47K-RDy.js";
import { S as Shield } from "./shield-wG7DL4C6.js";
import { C as CreditCard, S as ShoppingCart } from "./shopping-cart-7Hm83gBi.js";
import { S as Sprout } from "./sprout-CuTJBTyQ.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import "./x-IzlvJscY.js";
import "./index-DeTknbey.js";
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
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
const SCHEMES = [
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana",
    nameHi: "प्रधानमंत्री फसल बीमा योजना",
    description: "Crop insurance at low premium — protect your crop from drought, flood, and disease.",
    benefit: "Coverage up to ₹2,00,000 per season",
    category: "insurance",
    icon: Shield,
    color: "border-blue-500/30",
    deadline: "Last date: June 30, 2026",
    eligibility: "All farmers growing notified crops",
    cta: "Apply Now",
    url: "https://pmfby.gov.in"
  },
  {
    id: "kcc",
    name: "Kisan Credit Card (KCC)",
    nameHi: "किसान क्रेडिट कार्ड",
    description: "Get instant funds for seeds, fertilizer, and equipment at lowest interest rates.",
    benefit: "Credit up to ₹3 lakh at 4% per year",
    category: "loan",
    icon: CreditCard,
    color: "border-accent/30",
    eligibility: "All farmers, sharecroppers, tenant farmers",
    cta: "Apply Now",
    url: "https://www.nabard.org"
  },
  {
    id: "pmksy",
    name: "PM Krishi Sinchai Yojana",
    nameHi: "प्रधानमंत्री कृषि सिंचाई योजना",
    description: "Save 50% water, increase yield by 40% with subsidized drip/sprinkler irrigation.",
    benefit: "55–90% subsidy on irrigation systems",
    category: "subsidy",
    icon: Sprout,
    color: "border-primary/30",
    eligibility: "All farmers with land documents",
    cta: "Apply Now",
    url: "https://pmksy.gov.in"
  },
  {
    id: "nfsm",
    name: "National Food Security Mission",
    nameHi: "राष्ट्रीय खाद्य सुरक्षा मिशन",
    description: "Free quality seeds distribution and training on modern farming techniques.",
    benefit: "Free certified seeds + expert training",
    category: "subsidy",
    icon: BadgeCheck,
    color: "border-primary/30",
    eligibility: "Small and marginal farmers",
    cta: "Check Eligibility",
    url: "https://nfsm.gov.in"
  },
  {
    id: "shc",
    name: "Soil Health Card Scheme",
    nameHi: "मृदा स्वास्थ्य कार्ड योजना",
    description: "Get your soil health card FREE — detailed fertilizer recommendations included.",
    benefit: "Free soil testing + card every 2 years",
    category: "subsidy",
    icon: Building2,
    color: "border-white/15",
    eligibility: "All farmers across India",
    cta: "Apply Now",
    url: "https://soilhealth.dac.gov.in"
  },
  {
    id: "enam",
    name: "eNAM — Electronic Market",
    nameHi: "ई-नाम — इलेक्ट्रॉनिक राष्ट्रीय कृषि बाजार",
    description: "Sell crops online at best prices — direct mandi access from your phone.",
    benefit: "Best price guarantee + instant payment",
    category: "market",
    icon: ShoppingCart,
    color: "border-accent/30",
    eligibility: "Any farmer with Aadhaar + bank account",
    cta: "Register Now",
    url: "https://enam.gov.in"
  }
];
const CATEGORY_COLORS = {
  subsidy: "bg-primary/20 text-primary",
  insurance: "bg-white/10 text-blue-300",
  loan: "bg-accent/20 text-accent",
  income: "bg-primary/20 text-primary",
  market: "bg-accent/20 text-accent"
};
const CATEGORY_LABELS = {
  subsidy: "Subsidy",
  insurance: "Insurance",
  loan: "Loan",
  income: "Income",
  market: "Market"
};
const STATES = [
  "Select State",
  "Punjab",
  "Haryana",
  "Uttar Pradesh",
  "Maharashtra",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Rajasthan",
  "Bihar",
  "West Bengal",
  "Gujarat",
  "Madhya Pradesh",
  "Tamil Nadu"
];
function GovernmentSchemes() {
  const { t } = useLanguage();
  const [filter, setFilter] = reactExports.useState("all");
  const [landSize, setLandSize] = reactExports.useState("");
  const [state, setState] = reactExports.useState("Select State");
  const [eligibleSchemes, setEligibleSchemes] = reactExports.useState(null);
  const filtered = filter === "all" ? SCHEMES : SCHEMES.filter((s) => s.category === filter);
  const filters = [
    { key: "all", label: "All Schemes" },
    { key: "income", label: "Income" },
    { key: "subsidy", label: "Subsidy" },
    { key: "insurance", label: "Insurance" },
    { key: "loan", label: "Loan" },
    { key: "market", label: "Market" }
  ];
  function handleApply(schemeName) {
    ue.info(
      `Redirecting to official government portal for ${schemeName}...`
    );
  }
  function checkEligibility() {
    if (!landSize || state === "Select State") {
      ue.error("Please enter land size and select your state.");
      return;
    }
    const acres = Number(landSize);
    const qualified = ["PM-KISAN", "Soil Health Card Scheme", "eNAM"];
    if (acres <= 5) qualified.push("Kisan Credit Card (KCC)");
    if (acres >= 1) qualified.push("PM Fasal Bima Yojana");
    setEligibleSchemes(qualified);
    ue.success(`Found ${qualified.length} schemes for you!`);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen gradient-bg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-24 pb-16 px-4 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollText, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-accent", children: "Free money waiting for you" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-3", children: t.schemesTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg", children: "Free money and support from the government — made easy" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "mb-8 rounded-2xl p-6 md:p-8 border border-accent/40 relative overflow-hidden",
          style: {
            background: "linear-gradient(135deg, oklch(0.28 0.08 40 / 0.85), oklch(0.35 0.13 118 / 0.7))"
          },
          "data-ocid": "pmkisan-banner",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/5 blur-3xl pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/30 text-primary-foreground border border-primary/40 font-semibold", children: "✓ ACTIVE SCHEME" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/20 text-accent border border-accent/30", children: "Featured" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-2", children: "PM-KISAN Samman Nidhi" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-xl font-bold mb-2", children: "₹6,000 per year — directly to your bank account" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Eligibility: All small and marginal farmers with less than 2 hectares land" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6",
                    onClick: () => handleApply("PM-KISAN"),
                    "data-ocid": "pmkisan-apply-btn",
                    children: t.applyNow
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    className: "border-white/30 text-foreground hover:bg-white/10 px-6",
                    onClick: () => ue.info("Checking PM-KISAN status..."),
                    "data-ocid": "pmkisan-status-btn",
                    children: "Check Status"
                  }
                )
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-6", "data-ocid": "scheme-filters", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setFilter(f.key),
          className: `px-4 py-2 rounded-full text-sm font-medium transition-smooth ${filter === f.key ? "bg-primary text-primary-foreground" : "glass border border-white/15 text-muted-foreground hover:text-foreground"}`,
          "data-ocid": `filter-${f.key}`,
          children: f.label
        },
        f.key
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10",
          "data-ocid": "schemes-grid",
          children: filtered.map((scheme) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: `glass border transition-smooth hover:border-primary/40 ${scheme.color}`,
              "data-ocid": `scheme-card-${scheme.id}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(scheme.icon, { className: "w-5 h-5 text-accent" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-foreground text-sm leading-tight line-clamp-2", children: scheme.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 line-clamp-1", children: scheme.nameHi })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `${CATEGORY_COLORS[scheme.category]} shrink-0 text-xs`,
                      children: CATEGORY_LABELS[scheme.category]
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: scheme.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white/5 px-3 py-2 border border-white/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-0.5", children: "Benefit" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary", children: scheme.benefit })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Eligibility" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80", children: scheme.eligibility })
                  ] }),
                  scheme.deadline && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-accent font-medium", children: [
                    "⏰ ",
                    scheme.deadline
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm",
                        onClick: () => handleApply(scheme.name),
                        "data-ocid": `apply-btn-${scheme.id}`,
                        children: scheme.cta
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        variant: "outline",
                        size: "icon",
                        className: "border-white/20 text-muted-foreground hover:text-foreground hover:bg-white/10 shrink-0",
                        onClick: () => window.open(scheme.url, "_blank"),
                        "aria-label": "Open official website",
                        "data-ocid": `external-btn-${scheme.id}`,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" })
                      }
                    )
                  ] })
                ] })
              ]
            },
            scheme.id
          ))
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass border-white/10", "data-ocid": "eligibility-checker", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-foreground flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 text-accent" }),
          "Check Schemes I Qualify For"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-sm mb-2 block", children: "Land Size (acres)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  type: "number",
                  placeholder: "e.g. 2.5",
                  className: "bg-white/5 border-white/15 text-foreground placeholder:text-muted-foreground",
                  value: landSize,
                  onChange: (e) => setLandSize(e.target.value),
                  "data-ocid": "land-size-input"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-muted-foreground text-sm mb-2 block", children: "State" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "select",
                {
                  className: "w-full h-10 px-3 rounded-lg bg-white/5 border border-white/15 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-accent",
                  value: state,
                  onChange: (e) => setState(e.target.value),
                  "data-ocid": "state-select",
                  children: STATES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "option",
                    {
                      value: s,
                      className: "bg-card text-foreground",
                      children: s
                    },
                    s
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold",
                onClick: checkEligibility,
                "data-ocid": "check-eligibility-btn",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 mr-2" }),
                  t.checkEligibility
                ]
              }
            ) })
          ] }),
          eligibleSchemes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 space-y-2", "data-ocid": "eligible-schemes-list", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground mb-3", children: [
              "✅ You qualify for ",
              eligibleSchemes.length,
              " schemes:"
            ] }),
            eligibleSchemes.map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 border border-primary/30",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "w-4 h-4 text-primary shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium", children: name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      size: "sm",
                      variant: "ghost",
                      className: "ml-auto text-primary hover:bg-primary/10 text-xs h-7 px-3",
                      onClick: () => handleApply(name),
                      children: t.applyNow
                    }
                  )
                ]
              },
              name
            ))
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  GovernmentSchemes as default
};
