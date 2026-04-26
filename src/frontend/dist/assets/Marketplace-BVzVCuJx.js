import { u as useLanguage, a as useActor, j as jsxRuntimeExports, A as ActivityEventType, b as createActor } from "./index-ib-RthyM.js";
import { N as Navbar, S as ShoppingBasket, T as TrendingUp, B as Badge } from "./Navbar-BxJ_VEM-.js";
import { B as Button } from "./user-DZs1hiW7.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-DEgCNCa5.js";
import { u as ue } from "./index-C47K-RDy.js";
import { Z as Zap } from "./zap-CLqr7zww.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import { M as MapPin } from "./map-pin-CBfij1sz.js";
import { S as Star } from "./star-_MPecS2q.js";
import "./sprout-CuTJBTyQ.js";
import "./x-IzlvJscY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2", key: "wrbu53" }],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i"
    }
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }]
];
const Truck = createLucideIcon("truck", __iconNode);
const CROP_PRICES = [
  {
    crop: "Wheat",
    emoji: "🌾",
    mandiPrice: 2100,
    buyerPrice: 2450,
    buyerName: "Anaj Mandi Ltd"
  },
  {
    crop: "Rice",
    emoji: "🍚",
    mandiPrice: 1800,
    buyerPrice: 2050,
    buyerName: "BigBasket Direct"
  },
  {
    crop: "Tomato",
    emoji: "🍅",
    mandiPrice: 1200,
    buyerPrice: 1650,
    buyerName: "Local Restaurant"
  },
  {
    crop: "Potato",
    emoji: "🥔",
    mandiPrice: 800,
    buyerPrice: 950,
    buyerName: "Retail Chain"
  },
  {
    crop: "Onion",
    emoji: "🧅",
    mandiPrice: 1500,
    buyerPrice: 1900,
    buyerName: "Wholesale Buyer"
  }
];
const BUYERS = [
  {
    id: "1",
    name: "Anaj Mandi Ltd",
    type: "Grain Buyer",
    buying: "Wheat, Rice, Corn",
    rating: 4,
    distance: "3.2 km",
    badge: "Top Buyer"
  },
  {
    id: "2",
    name: "BigBasket Direct",
    type: "Online Grocery",
    buying: "Vegetables, Fruits, Pulses",
    rating: 5,
    distance: "1.8 km",
    badge: "★ Best Price"
  },
  {
    id: "3",
    name: "Punjab Restaurant Assoc.",
    type: "Bulk Buyer",
    buying: "Vegetables, Herbs",
    rating: 4,
    distance: "4.5 km",
    badge: "Bulk Orders"
  },
  {
    id: "4",
    name: "Local Cold Storage",
    type: "Storage + Sell",
    buying: "Potato, Onion, Tomato",
    rating: 3,
    distance: "2.1 km",
    badge: "Storage"
  },
  {
    id: "5",
    name: "Export House Agro",
    type: "Export Quality",
    buying: "Premium produce only",
    rating: 5,
    distance: "8.0 km",
    badge: "Export"
  },
  {
    id: "6",
    name: "Organic Direct",
    type: "Organic Certified",
    buying: "Chemical-free produce",
    rating: 4,
    distance: "5.5 km",
    badge: "Organic"
  }
];
const TICKER_ITEMS = [
  { id: "t1", text: "🔥 Wheat prices up ₹50 today" },
  { id: "t2", text: "🌾 BigBasket buying Tomato at ₹1,650/qtl" },
  { id: "t3", text: "💰 Best Onion price in your area: ₹1,900/qtl" },
  { id: "t4", text: "📦 Cold Storage space available near Ludhiana" },
  { id: "t5", text: "🚜 Rice procurement open — 100 qtl needed urgently" },
  { id: "t6", text: "🌽 Corn demand high — contact buyers now" }
];
function StarRating({ rating }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    Star,
    {
      className: `w-3.5 h-3.5 ${i <= rating ? "text-accent fill-accent" : "text-white/20"}`
    },
    i
  )) });
}
function Marketplace() {
  const { t } = useLanguage();
  const { actor } = useActor(createActor);
  function handleSellNow(name) {
    actor == null ? void 0 : actor.logActivity(
      ActivityEventType.MarketplaceClick,
      `Marketplace item clicked: ${name}`
    ).catch(() => {
    });
    ue.success("Our team will contact you within 24 hours!", {
      description: `${name} has been notified about your produce.`,
      duration: 5e3
    });
  }
  function handleBestPriceSearch() {
    actor == null ? void 0 : actor.logActivity(
      ActivityEventType.BestPriceSearch,
      "Best price search triggered"
    ).catch(() => {
    });
  }
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen gradient-bg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-24 pb-10 px-4 max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative rounded-3xl overflow-hidden mb-10 border border-accent/30",
          "data-ocid": "marketplace-hero",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-accent/10 backdrop-blur-sm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-8 -right-8 w-48 h-48 rounded-full bg-accent/20 blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5 text-accent" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-accent uppercase tracking-wider", children: "Live Prices" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-2", children: t.bestPriceToday }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: today }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    onClick: handleBestPriceSearch,
                    className: "bg-accent text-accent-foreground hover:bg-accent/90 font-bold gap-2",
                    "data-ocid": "best-price-search-btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4" }),
                      "Best Price Near You"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 shrink-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border border-accent/30 px-5 py-3 rounded-2xl text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-accent", children: "+18%" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Avg over mandi" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border border-primary/30 px-5 py-3 rounded-2xl text-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-primary", children: "24" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Live buyers" })
                ] })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [
        { label: "Live Buyers", value: "24", icon: ShoppingBasket },
        {
          label: "Avg. Premium over Mandi",
          value: "+18%",
          icon: TrendingUp
        },
        { label: "Deliveries Today", value: "12", icon: Truck }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "glass border-white/10 text-center",
          "data-ocid": `stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-5 h-5 text-accent mx-auto mb-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-bold text-foreground", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.label })
          ] })
        },
        s.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", "data-ocid": "price-comparison", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Price Comparison" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/20 text-primary border-primary/30 border text-xs", children: "Live" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass border-white/10 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-5 gap-2 px-5 py-3 border-b border-white/10 bg-white/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider col-span-1", children: "Crop" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right", children: t.mandiPrice }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider text-right", children: t.buyerPrice }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-accent uppercase tracking-wider text-right", children: "Difference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right", children: "Best Buyer" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-white/5", children: CROP_PRICES.map((row) => {
            const diff = row.buyerPrice - row.mandiPrice;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "grid grid-cols-5 gap-2 px-5 py-4 hover:bg-white/5 transition-smooth",
                "data-ocid": `price-row-${row.crop.toLowerCase()}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 col-span-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0", children: row.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground text-sm truncate", children: row.crop })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-right font-medium text-secondary-foreground self-center text-sm", children: [
                    "₹",
                    row.mandiPrice.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-right font-bold text-primary self-center", children: [
                    "₹",
                    row.buyerPrice.toLocaleString()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-1 self-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-3.5 h-3.5 text-accent shrink-0" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-accent text-sm", children: [
                      "+₹",
                      diff
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-right text-xs text-muted-foreground self-center truncate", children: row.buyerName })
                ]
              },
              row.crop
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", "data-ocid": "buyer-cards", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBasket, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Active Buyers Near You" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: BUYERS.map((buyer) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "glass border-white/10 hover:border-primary/30 transition-smooth group",
            "data-ocid": `buyer-card-${buyer.id}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-foreground text-base group-hover:text-primary transition-colors", children: buyer.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent/15 text-accent border border-accent/30 text-xs shrink-0", children: buyer.badge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: buyer.type })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 px-3 py-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1", children: "Buying" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: buyer.buying })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(StarRating, { rating: buyer.rating }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                      buyer.rating,
                      ".0"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3" }),
                    buyer.distance
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2",
                    onClick: () => handleSellNow(buyer.name),
                    "data-ocid": `sell-btn-${buyer.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" }),
                      t.sellNow
                    ]
                  }
                )
              ] })
            ]
          },
          buyer.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative overflow-hidden rounded-2xl border border-accent/20 bg-accent/5",
          "data-ocid": "urgency-ticker",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex items-center gap-1.5 bg-accent/20 border border-accent/30 rounded-lg px-3 py-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-accent", children: "LIVE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex gap-8 whitespace-nowrap",
                style: {
                  animation: "marquee 28s linear infinite"
                },
                children: [
                  ...TICKER_ITEMS.map((i) => ({ ...i, uid: i.id })),
                  ...TICKER_ITEMS.map((i) => ({ ...i, uid: `${i.id}-b` }))
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "text-sm text-foreground font-medium shrink-0",
                    children: item.text
                  },
                  item.uid
                ))
              }
            ) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        ` })
    ] })
  ] });
}
export {
  Marketplace as default
};
