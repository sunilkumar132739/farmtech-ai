import { j as jsxRuntimeExports, r as reactExports, e as useNavigate } from "./index-ib-RthyM.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import { P as Play } from "./play-B5JVHp-C.js";
import { X } from "./x-IzlvJscY.js";
import { A as ArrowRight } from "./arrow-right-XJK3p29s.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" }],
  ["rect", { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" }]
];
const Pause = createLucideIcon("pause", __iconNode);
function SlideNav({
  currentSlide,
  totalSlides,
  autoAdvance,
  notesVisible,
  onPrev,
  onNext,
  onExit,
  onToggleAuto,
  onToggleNotes,
  onGoToSlide
}) {
  const progress = (currentSlide + 1) / totalSlides * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 glass border-b border-white/10",
        "data-ocid": "slide-nav-top",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg text-accent tracking-wide select-none", children: "AgriCare" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-body text-foreground/70 tabular-nums select-none", children: [
            currentSlide + 1,
            " / ",
            totalSlides
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onToggleNotes,
                "aria-label": "Toggle speaker notes",
                "data-ocid": "notes-toggle",
                className: `p-2 rounded-lg transition-smooth hover:bg-white/10 ${notesVisible ? "text-accent" : "text-foreground/60"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onToggleAuto,
                "aria-label": autoAdvance ? "Pause auto-advance" : "Start auto-advance",
                "data-ocid": "auto-advance-toggle",
                className: `p-2 rounded-lg transition-smooth hover:bg-white/10 ${autoAdvance ? "text-accent" : "text-foreground/60"}`,
                children: autoAdvance ? /* @__PURE__ */ jsxRuntimeExports.jsx(Pause, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onExit,
                "aria-label": "Exit presentation",
                "data-ocid": "exit-presentation",
                className: "p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-white/10 transition-smooth",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[52px] left-0 right-0 z-50 h-0.5 bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-full bg-accent transition-all duration-500 ease-out",
        style: { width: `${progress}%` },
        "data-ocid": "progress-bar"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onPrev,
        disabled: currentSlide === 0,
        "aria-label": "Previous slide",
        "data-ocid": "prev-slide",
        className: "absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 glass rounded-full text-foreground/70 hover:text-foreground hover:bg-white/20 transition-smooth disabled:opacity-20 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 20 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: onNext,
        disabled: currentSlide === totalSlides - 1,
        "aria-label": "Next slide",
        "data-ocid": "next-slide",
        className: "absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 glass rounded-full text-foreground/70 hover:text-foreground hover:bg-white/20 transition-smooth disabled:opacity-20 disabled:cursor-not-allowed",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 20 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5", children: Array.from(
      { length: totalSlides },
      (_, i) => `slide-dot-${i + 1}`
    ).map((dotId, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => onGoToSlide(i),
        "aria-label": `Go to slide ${i + 1}`,
        "data-ocid": `dot-${i}`,
        className: `h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-accent w-4" : "w-1.5 bg-white/30 hover:bg-white/50"}`
      },
      dotId
    )) })
  ] });
}
const bgMap = {
  dark: "gradient-bg",
  light: "bg-card",
  accent: "bg-primary/10"
};
function SlideLayout({
  title,
  subtitle,
  children,
  variant = "dark",
  notesContent,
  notesVisible,
  centered = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `w-full h-full flex flex-col ${bgMap[variant]} relative overflow-hidden`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -top-32 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative z-10 flex-1 flex flex-col ${centered ? "items-center justify-center text-center" : "justify-start"} px-16 pt-10 pb-4 overflow-y-auto`,
            children: [
              title && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 animate-stagger-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "slide-heading", children: title }),
                subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 text-xl font-body mt-2", children: subtitle })
              ] }),
              children
            ]
          }
        ),
        notesVisible && notesContent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-20 bg-black/60 border-t border-white/10 px-16 py-3 text-sm text-foreground/70 font-body", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold mr-2", children: "Notes:" }),
          notesContent
        ] })
      ]
    }
  );
}
function Slide01Title({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      variant: "dark",
      centered: true,
      notesVisible,
      notesContent: "Welcome everyone. AgriCare is a smart agriculture platform built to empower farmers with technology that's simple and actionable.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-stagger-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-accent text-sm font-body font-semibold mb-4", children: "🌱 Student Innovation Project" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-stagger-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-7xl md:text-8xl leading-none text-accent", children: "AgriCare" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-stagger-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl md:text-4xl text-foreground/80 font-semibold", children: "Smart Farming Made Simple" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-stagger-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl text-foreground/60 font-body max-w-xl", children: "AI + IoT Based Agriculture Solution" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "mt-4 flex items-center gap-8 text-sm text-foreground/50 font-body animate-stagger-4",
            style: { animationDelay: "0.5s" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌾 IoT Sensors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🤖 AI Insights" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📱 Farmer-First" })
            ]
          }
        )
      ] })
    }
  );
}
function SlideCard({
  icon,
  title,
  description,
  variant = "default",
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: `slide-card flex flex-col gap-3 ${variant === "highlighted" ? "border-accent/40 bg-accent/5" : "border-white/20"} ${className}`,
      "data-ocid": "slide-card",
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${variant === "highlighted" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary-foreground"}`,
            children: icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h3",
          {
            className: `font-display font-semibold text-lg leading-snug ${variant === "highlighted" ? "text-accent" : "text-foreground"}`,
            children: title
          }
        ),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 font-body leading-relaxed", children: description })
      ]
    }
  );
}
function Slide02Intro({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      title: "Introduction",
      subtitle: "What is AgriCare?",
      variant: "dark",
      notesVisible,
      notesContent: "AgriCare bridges the gap between complex technology and everyday farming. Built by students, designed for India's 100M+ farmers.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6 animate-stagger-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2 glass-card p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl text-foreground/80 font-body leading-relaxed", children: [
          "AgriCare is a smart agriculture platform that empowers farmers in remote areas with",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: "real-time data and actionable guidance" }),
          " ",
          "— designed for teachers, judges, and early-stage investors."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SlideCard,
          {
            icon: "🎯",
            title: "Our Goal",
            description: "Help every farmer make better decisions using technology — without needing a tech background."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SlideCard,
          {
            icon: "📱",
            title: "The Platform",
            description: "A web app connected to smart IoT sensors that translates raw data into simple, money-saving actions.",
            variant: "highlighted"
          }
        )
      ] })
    }
  );
}
const problems = [
  {
    icon: "🎲",
    title: "Farmers rely on guesswork",
    stat: "70%",
    statLabel: "decisions with no data"
  },
  {
    icon: "📡",
    title: "No real-time soil or weather data",
    stat: "0",
    statLabel: "sensor coverage in villages"
  },
  {
    icon: "🦠",
    title: "Crop diseases detected too late",
    stat: "₹1.5L",
    statLabel: "avg annual loss per farmer"
  },
  {
    icon: "📉",
    title: "Farmers miss the best market price",
    stat: "40%",
    statLabel: "below fair price sold"
  }
];
function Slide03Problem({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      title: "The Problem",
      subtitle: "Why Indian farmers are losing money every season",
      variant: "dark",
      notesVisible,
      notesContent: "These four problems compound each other — guesswork leads to late disease detection, which leads to poor yields, which forces bad market deals.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-5 animate-stagger-2", children: problems.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card flex items-start gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl mt-1", children: p.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-foreground/90 font-medium leading-snug", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-1.5 mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold text-accent", children: p.stat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground/50", children: p.statLabel })
          ] })
        ] })
      ] }, p.title)) })
    }
  );
}
function Slide04Solution({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideLayout,
    {
      title: "Our Solution",
      subtitle: "AgriCare — one platform, all the answers",
      variant: "dark",
      notesVisible,
      notesContent: "AgriCare doesn't give farmers charts — it gives them instructions. That's the key difference from every other solution.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-5 animate-stagger-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SlideCard,
            {
              icon: "📡",
              title: "IoT Sensors",
              description: "Soil moisture, temperature, and humidity — live from the field.",
              variant: "highlighted"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SlideCard,
            {
              icon: "🤖",
              title: "AI Brain Insights",
              description: "Converts raw sensor data into plain language: 'Water your crops tomorrow morning.'",
              variant: "highlighted"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            SlideCard,
            {
              icon: "🌐",
              title: "Simple Web Platform",
              description: "Works on any phone. No app install needed. Designed for non-technical farmers.",
              variant: "highlighted"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 glass-card animate-stagger-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-lg font-body text-foreground/80", children: [
          "Designed for ease of use —",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: "even for non-technical farmers in rural India." })
        ] }) })
      ]
    }
  );
}
const features$1 = [
  {
    icon: "📊",
    title: "Informational Dashboard",
    description: "Farming conditions at a glance — soil, weather, and crop status."
  },
  {
    icon: "💡",
    title: "Smart Agriculture Concepts",
    description: "Integrated smart farming principles to guide everyday decisions."
  },
  {
    icon: "🖥️",
    title: "User-Friendly Interface",
    description: "Clean, minimal design built for users with any level of tech skill."
  },
  {
    icon: "📋",
    title: "Basic Farmer Guidance",
    description: "Step-by-step recommendations for irrigation, fertilizer, and harvest timing."
  }
];
function Slide05CurrentFeatures({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      title: "Current Features",
      subtitle: "Live on the platform today",
      variant: "dark",
      notesVisible,
      notesContent: "These features are fully functional in the current version. The next slide shows the innovation roadmap.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-5 animate-stagger-2", children: features$1.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SlideCard,
        {
          icon: f.icon,
          title: f.title,
          description: f.description
        },
        f.title
      )) })
    }
  );
}
const features = [
  {
    icon: "📡",
    title: "IoT Sensor Integration",
    description: "Soil moisture, temperature & humidity sensors — real-time cloud sync.",
    variant: "highlighted"
  },
  {
    icon: "💧",
    title: "Smart Irrigation Alerts",
    description: "Auto alerts when soil is dry. Controls water pump remotely.",
    variant: "default"
  },
  {
    icon: "🩺",
    title: "AI Crop Doctor",
    description: "Upload a photo → instant disease detection with medicine & dosage.",
    variant: "highlighted"
  },
  {
    icon: "🌦️",
    title: "Hyperlocal Weather Alerts",
    description: "Rain, frost, and heat stress warnings 2–3 hours in advance.",
    variant: "default"
  },
  {
    icon: "🗣️",
    title: "Voice in Hindi/Punjabi",
    description: "Tap & listen instructions in the farmer's native language.",
    variant: "default"
  },
  {
    icon: "🛒",
    title: "Farmer Marketplace",
    description: "Sell crops directly to buyers. Live mandi vs. buyer price comparison.",
    variant: "highlighted"
  }
];
function Slide06AdvancedFeatures({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      title: "Advanced Features",
      subtitle: "Planned Innovation — What sets AgriCare apart",
      variant: "dark",
      notesVisible,
      notesContent: "These six features represent our innovation thesis. Each addresses a specific failure point in the current market — Fasal doesn't do all of these.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4 animate-stagger-2", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        SlideCard,
        {
          icon: f.icon,
          title: f.title,
          description: f.description,
          variant: f.variant
        },
        f.title
      )) })
    }
  );
}
const steps = [
  {
    icon: "🌱",
    label: "Sensors in the Field",
    desc: "Collect soil & weather data"
  },
  { icon: "☁️", label: "Cloud / Database", desc: "Data sent securely to cloud" },
  {
    icon: "🧠",
    label: "AI Processing",
    desc: "Analyze patterns & predict needs"
  },
  { icon: "📱", label: "Farmer's App", desc: "Simple instructions delivered" }
];
function Slide07HowItWorks({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideLayout,
    {
      title: "How It Works",
      subtitle: "From field to phone in seconds",
      variant: "dark",
      notesVisible,
      notesContent: "The pipeline is: sensor → cloud → AI → farmer. Each step reduces complexity for the end user. The farmer sees one clear action.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between gap-2 animate-stagger-2 mt-4", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center flex-1 glass-card py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-5xl mb-3", children: step.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-semibold text-foreground text-base leading-snug", children: step.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/60 mt-1 font-body", children: step.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 text-xs font-mono text-accent font-bold", children: [
              "Step ",
              i + 1
            ] })
          ] }),
          i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl text-accent/60 font-bold flex-shrink-0", children: "→" })
        ] }, step.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 glass-card animate-stagger-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/70 font-body text-lg", children: [
          "Result:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: `"Kal paani dena hai" — spoken in the farmer's language.` })
        ] }) })
      ]
    }
  );
}
const stack = [
  {
    layer: "Frontend",
    items: ["React + TypeScript", "Tailwind CSS", "Glassmorphism UI"],
    icon: "🖥️",
    color: "bg-white/5 border-white/10"
  },
  {
    layer: "Hardware",
    items: [
      "ESP32 Microcontroller",
      "Soil Moisture Sensor",
      "DHT11 (Temp/Humidity)"
    ],
    icon: "🔧",
    color: "bg-primary/10 border-primary/30"
  },
  {
    layer: "Backend",
    items: ["Cloud Database", "REST API", "Real-time Sync"],
    icon: "☁️",
    color: "bg-secondary/20 border-secondary/30"
  },
  {
    layer: "AI / ML",
    items: ["Crop Disease Detection", "Yield Prediction", "Price Forecasting"],
    icon: "🧠",
    color: "bg-accent/10 border-accent/30"
  }
];
function Slide08TechStack({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      title: "Technology Stack",
      subtitle: "Built for scale, designed for simplicity",
      variant: "dark",
      notesVisible,
      notesContent: "The stack is chosen for rapid iteration and low cost. ESP32 sensors cost under ₹500 each. The AI layer will use open-source models fine-tuned on Indian crop data.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-5 animate-stagger-2", children: stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `glass border rounded-2xl p-6 ${s.color}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-foreground", children: s.layer })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: s.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "li",
              {
                className: "flex items-center gap-2 text-sm text-foreground/80 font-body",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent text-xs", children: "▸" }),
                  item
                ]
              },
              item
            )) })
          ]
        },
        s.layer
      )) })
    }
  );
}
const benefits = [
  {
    icon: "💧",
    title: "Saves Water",
    metric: "30%",
    detail: "reduction in irrigation waste",
    color: "border-primary/30 bg-primary/5"
  },
  {
    icon: "🌾",
    title: "Increases Yield",
    metric: "25–35%",
    detail: "higher crop output per season",
    color: "border-primary/40 bg-primary/5"
  },
  {
    icon: "🦠",
    title: "Reduces Disease Loss",
    metric: "60%",
    detail: "fewer losses from late detection",
    color: "border-destructive/30 bg-destructive/5"
  },
  {
    icon: "💰",
    title: "Improves Income",
    metric: "128%",
    detail: "average income growth reported",
    color: "border-accent/40 bg-accent/5"
  },
  {
    icon: "📱",
    title: "Easy to Use",
    metric: "< 2 min",
    detail: "to get first actionable insight",
    color: "border-secondary/40 bg-secondary/5"
  }
];
function Slide09Benefits({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      title: "Benefits to Farmers",
      subtitle: "Real impact, measurable results",
      variant: "dark",
      notesVisible,
      notesContent: "These metrics are based on comparable smart farming deployments in India and Maharashtra pilot studies. Our target is to validate these with our own pilot.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-4 animate-stagger-2", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `glass border rounded-2xl p-5 flex flex-col items-center text-center ${b.color}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl mb-3", children: b.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-accent mb-1", children: b.metric }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-foreground text-sm mb-1", children: b.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground/50 font-body", children: b.detail })
          ]
        },
        b.title
      )) })
    }
  );
}
const rows = [
  { feature: "Easy to use", agricare: true, fasal: false },
  { feature: "Voice in Hindi/Punjabi", agricare: true, fasal: false },
  { feature: "AI Crop Doctor", agricare: true, fasal: false },
  { feature: "Farmer Marketplace", agricare: true, fasal: true },
  { feature: "IoT Sensor Integration", agricare: true, fasal: true },
  { feature: "Affordable (< ₹500 setup)", agricare: true, fasal: false },
  { feature: "Government Schemes", agricare: true, fasal: false },
  { feature: "Local language first", agricare: true, fasal: false }
];
function Slide10CompetitiveAdv({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      title: "Competitive Advantage",
      subtitle: "AgriCare vs. Fasal and traditional methods",
      variant: "dark",
      notesVisible,
      notesContent: "Fasal is the market leader, but they target large farms and English-speaking operators. AgriCare targets the underserved small farmer — 100M+ potential users.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass border border-white/20 rounded-2xl overflow-hidden animate-stagger-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm font-body", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-6 py-3 text-foreground/60 font-semibold", children: "Feature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-display font-bold text-base", children: "AgriCare ✓" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-center px-6 py-3 text-foreground/50 font-semibold", children: "Fasal / Others" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: `border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-3 text-foreground/80", children: row.feature }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-6 py-3", children: row.agricare ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-bold text-lg", children: "✓" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/30", children: "✗" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "text-center px-6 py-3", children: row.fasal ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/50", children: "✓" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive/70 font-bold", children: "✗" }) })
            ]
          },
          row.feature
        )) })
      ] }) })
    }
  );
}
const roadmap = [
  {
    quarter: "Q3 2025",
    items: [
      "Pilot launch with 50 farmers",
      "IoT sensor deployment",
      "AI Crop Doctor beta"
    ],
    status: "upcoming"
  },
  {
    quarter: "Q4 2025",
    items: [
      "Mobile app launch",
      "Voice assistant Hindi/Punjabi",
      "Smart irrigation automation"
    ],
    status: "upcoming"
  },
  {
    quarter: "Q1 2026",
    items: [
      "Marketplace launch",
      "Govt scheme integration",
      "PM Kisan API link"
    ],
    status: "future"
  },
  {
    quarter: "2026+",
    items: [
      "Pan-India expansion",
      "Full IoT automation",
      "500K+ farmers on platform"
    ],
    status: "future"
  }
];
function Slide11FutureScope({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    SlideLayout,
    {
      title: "Future Scope",
      subtitle: "Roadmap to scale across India",
      variant: "dark",
      notesVisible,
      notesContent: "We have a clear 18-month roadmap. The pilot with 50 farmers will validate our core metrics before we pursue Series A funding.",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-4 animate-stagger-2", children: roadmap.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `glass border rounded-2xl p-5 ${r.status === "upcoming" ? "border-accent/30 bg-accent/5" : "border-white/15"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `text-xs font-mono font-bold mb-3 ${r.status === "upcoming" ? "text-accent" : "text-foreground/50"}`,
                  children: r.quarter
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: r.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-2 text-sm font-body text-foreground/80",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `mt-0.5 text-xs ${r.status === "upcoming" ? "text-accent" : "text-foreground/30"}`,
                        children: "▸"
                      }
                    ),
                    item
                  ]
                },
                item
              )) })
            ]
          },
          r.quarter
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 glass-card animate-stagger-3 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/70 font-body", children: [
          "Target:",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: "500,000 farmers by 2026" }),
          " ",
          "across 5 Indian states."
        ] }) })
      ]
    }
  );
}
function Slide12Conclusion({ notesVisible }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    SlideLayout,
    {
      variant: "dark",
      centered: true,
      notesVisible,
      notesContent: "Close with the vision: AgriCare is not just a website — it's a movement to empower India's 100M farmers with the technology they deserve.",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-8 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-stagger-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body text-sm uppercase tracking-widest", children: "Our Vision" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-stagger-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl font-bold text-foreground leading-tight", children: "AgriCare is not just a website —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-5xl md:text-6xl font-bold leading-tight mt-2 text-accent", children: "it's a smart farming assistant." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-stagger-3 glass-card px-10 py-6 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-2xl font-semibold text-foreground/90", children: [
          "Better Data → ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Better Decisions" }),
          " ",
          "→ Better Income"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-stagger-4 flex flex-col items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/60 font-body text-lg", children: "Empowering every farmer with the technology they deserve." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-3xl text-accent tracking-wide", children: "AgriCare: Cultivating the Future" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-8 text-sm text-foreground/40 font-body animate-stagger-4",
            style: { animationDelay: "0.5s" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📧 agricare@example.com" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "📞 +91 98765 43210" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "🌐 agricare.app" })
            ]
          }
        )
      ] })
    }
  );
}
const SLIDES = [
  Slide01Title,
  Slide02Intro,
  Slide03Problem,
  Slide04Solution,
  Slide05CurrentFeatures,
  Slide06AdvancedFeatures,
  Slide07HowItWorks,
  Slide08TechStack,
  Slide09Benefits,
  Slide10CompetitiveAdv,
  Slide11FutureScope,
  Slide12Conclusion
];
function SlideRenderer({
  slideIndex,
  totalSlides,
  notesVisible
}) {
  const [visible, setVisible] = reactExports.useState(true);
  const [displayIndex, setDisplayIndex] = reactExports.useState(slideIndex);
  reactExports.useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setDisplayIndex(slideIndex);
      setVisible(true);
    }, 180);
    return () => clearTimeout(t);
  }, [slideIndex]);
  const SlideComponent = SLIDES[displayIndex] ?? SLIDES[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute inset-0 pt-[56px] pb-10 overflow-hidden",
      "data-ocid": "slide-renderer",
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.3s ease, transform 0.3s ease"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SlideComponent,
        {
          slideIndex: displayIndex,
          totalSlides,
          notesVisible
        }
      ) })
    }
  );
}
const TOTAL_SLIDES = 12;
const AUTO_ADVANCE_INTERVAL = 5e3;
function Presentation() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = reactExports.useState(0);
  const [autoAdvance, setAutoAdvance] = reactExports.useState(false);
  const [notesVisible, setNotesVisible] = reactExports.useState(false);
  const touchStartX = reactExports.useRef(null);
  const autoRef = reactExports.useRef(null);
  const goNext = reactExports.useCallback(
    () => setCurrentSlide((s) => Math.min(s + 1, TOTAL_SLIDES - 1)),
    []
  );
  const goPrev = reactExports.useCallback(
    () => setCurrentSlide((s) => Math.max(s - 1, 0)),
    []
  );
  const goExit = reactExports.useCallback(() => navigate({ to: "/" }), [navigate]);
  reactExports.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        goExit();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, goExit]);
  reactExports.useEffect(() => {
    if (autoAdvance) {
      autoRef.current = setInterval(() => {
        setCurrentSlide((s) => {
          if (s >= TOTAL_SLIDES - 1) {
            setAutoAdvance(false);
            return s;
          }
          return s + 1;
        });
      }, AUTO_ADVANCE_INTERVAL);
    }
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [autoAdvance]);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "w-screen h-screen overflow-hidden relative bg-background",
      onTouchStart,
      onTouchEnd,
      "data-ocid": "presentation-root",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SlideNav,
          {
            currentSlide,
            totalSlides: TOTAL_SLIDES,
            autoAdvance,
            notesVisible,
            onPrev: goPrev,
            onNext: goNext,
            onExit: goExit,
            onToggleAuto: () => setAutoAdvance((v) => !v),
            onToggleNotes: () => setNotesVisible((v) => !v),
            onGoToSlide: setCurrentSlide
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SlideRenderer,
          {
            slideIndex: currentSlide,
            totalSlides: TOTAL_SLIDES,
            notesVisible
          }
        )
      ]
    }
  );
}
export {
  Presentation as default
};
