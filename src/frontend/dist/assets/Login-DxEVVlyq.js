import { d as useAuth, e as useNavigate, r as reactExports, j as jsxRuntimeExports } from "./index-ib-RthyM.js";
import { u as ue } from "./index-C47K-RDy.js";
import { S as Sprout } from "./sprout-CuTJBTyQ.js";
import { S as ShieldCheck } from "./shield-check-mqMsWIkE.js";
import { W as Wifi } from "./wifi-P5yQ_40D.js";
import { Z as Zap } from "./zap-CLqr7zww.js";
import { L as Leaf } from "./leaf-BDTtk3JC.js";
import { L as LoaderCircle } from "./loader-circle-BgS6_iZ0.js";
import "./createLucideIcon-DsIAFFRl.js";
const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    desc: "Decentralized identity — no passwords, no data leaks"
  },
  {
    icon: Wifi,
    title: "Real-time Data",
    desc: "Live IoT sensor readings from your farm, anywhere"
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    desc: "Smart recommendations that save water and boost yield"
  },
  {
    icon: Leaf,
    title: "Multi-language",
    desc: "Full support in Hindi, Punjabi, Marathi, Kannada, Telugu"
  }
];
function Login() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/dashboard" });
    }
  }, [isAuthenticated, navigate]);
  async function handleLogin() {
    setIsSigningIn(true);
    try {
      await login();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Authentication failed. Please try again.";
      ue.error("Login failed", {
        description: msg,
        duration: 5e3
      });
    } finally {
      setIsSigningIn(false);
    }
  }
  const busy = isLoading || isSigningIn;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "auth-container relative overflow-hidden",
      "data-ocid": "login-page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 pointer-events-none overflow-hidden",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "svg",
                {
                  className: "absolute bottom-0 left-0 w-80 h-80 opacity-5 text-primary",
                  viewBox: "0 0 200 200",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100 10 C60 10, 10 50, 10 100 C10 150, 60 190, 100 190 C140 190, 190 150, 190 100 C190 50, 140 10, 100 10Z M100 30 C130 30, 170 60, 170 100 C170 140, 130 170, 100 170 C70 170, 30 140, 30 100 C30 60, 70 30, 100 30Z" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100 50 C100 50, 50 80, 50 100 C50 120, 80 140, 100 140 C100 140, 100 100, 100 50Z" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100 50 C100 50, 150 80, 150 100 C150 120, 120 140, 100 140 C100 140, 100 100, 100 50Z" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "absolute top-0 right-0 w-64 h-64 opacity-5 text-accent rotate-180",
                  viewBox: "0 0 200 200",
                  fill: "currentColor",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M100 10 C60 10, 10 50, 10 100 C10 150, 60 190, 100 190 C140 190, 190 150, 190 100 C190 50, 140 10, 100 10Z M100 50 C100 50, 50 80, 50 100 C50 120, 80 140, 100 140 C100 140, 100 100, 100 50Z" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 w-full max-w-4xl mx-4 grid md:grid-cols-2 gap-8 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex flex-col gap-6 animate-slide-in-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-glass-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-7 h-7 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-bold text-foreground", children: [
                  "FarmTech ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "AI" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground tracking-wide uppercase", children: "Smart Agriculture Platform" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-4xl font-bold text-foreground leading-tight", children: [
                "Your farm's ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "digital brain" }),
                ",",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "always with you."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed", children: "Monitor soil moisture, temperature, crop health, and get AI-powered recommendations — all in your language." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 mt-2", children: FEATURES.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-start gap-3 animate-slide-in-left",
                style: {
                  animationDelay: `${0.1 + i * 0.08}s`,
                  animationFillMode: "both"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: f.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: f.desc })
                  ] })
                ]
              },
              f.title
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 w-fit", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-primary shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Trusted by",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "2,400+" }),
                " ",
                "farmers across India"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "auth-card animate-slide-up shadow-glass-lg",
              "data-ocid": "login-card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 md:hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-6 h-6 text-primary-foreground" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-lg font-bold text-foreground", children: [
                      "FarmTech ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "AI" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground uppercase tracking-wide", children: "Smart Agriculture Platform" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground", children: "Welcome to FarmTech AI" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Log in securely to manage your smart farm" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "auth-button-ii",
                      onClick: handleLogin,
                      disabled: busy,
                      "data-ocid": "btn-login-ii",
                      "aria-label": "Sign in with Internet Identity",
                      children: [
                        busy ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-black/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5" }) }),
                        busy ? "Signing in…" : "Sign in with Internet Identity"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "Secure, passwordless login powered by the Internet Computer" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full border-t border-white/10" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 bg-transparent text-muted-foreground", children: "What you get" }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
                  { emoji: "🌱", label: "Soil Analytics" },
                  { emoji: "🌡️", label: "IoT Monitoring" },
                  { emoji: "💧", label: "Smart Irrigation" },
                  { emoji: "📈", label: "Income Tracker" }
                ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: item.emoji }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground font-medium", children: item.label })
                    ]
                  },
                  item.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-xs text-muted-foreground", children: [
                  "By continuing, you agree to FarmTech AI's",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-primary hover:underline", children: "terms of service" }),
                  " ",
                  "and",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "text-primary hover:underline", children: "privacy policy" }),
                  "."
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  Login as default
};
