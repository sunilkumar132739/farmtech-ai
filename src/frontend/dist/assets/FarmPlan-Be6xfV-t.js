import { u as useLanguage, r as reactExports, j as jsxRuntimeExports } from "./index-ib-RthyM.js";
import { N as Navbar, B as Badge } from "./Navbar-BxJ_VEM-.js";
import { B as Button } from "./user-DZs1hiW7.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-DEgCNCa5.js";
import { S as Sun } from "./sun-UjGSzuyd.js";
import { B as Bell } from "./bell-DhShFftw.js";
import { D as Droplets } from "./droplets-B1m6mLc0.js";
import { S as Sprout } from "./sprout-CuTJBTyQ.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import { C as CircleCheck } from "./circle-check-D5fSt3nL.js";
import { V as Volume2 } from "./volume-2-5ZZ-FCdX.js";
import { C as CloudRain, M as Mic } from "./mic-ON5s-rsm.js";
import "./x-IzlvJscY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]];
const Circle = createLucideIcon("circle", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "6", cy: "6", r: "3", key: "1lh9wr" }],
  ["path", { d: "M8.12 8.12 12 12", key: "1alkpv" }],
  ["path", { d: "M20 4 8.12 15.88", key: "xgtan2" }],
  ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }],
  ["path", { d: "M14.8 14.8 20 20", key: "ptml3r" }]
];
const Scissors = createLucideIcon("scissors", __iconNode);
const TASKS = [
  {
    id: "t1",
    icon: Droplets,
    time: "6:00 AM",
    labelKey: "taskIrrigation",
    voiceHi: "Kal paani dena hai. Khet mein pani do. Paidavar das pratishat badhegi.",
    voicePa: "Khet vich paani deo. Paidavar das pratishat vadhegi.",
    priority: "high",
    profit: "Yield +10% (≈ ₹2,500)"
  },
  {
    id: "t2",
    icon: Sprout,
    time: "8:30 AM",
    labelKey: "taskSpray",
    voiceHi: "Aaj fertilizer spray karna hai. Teen aur chaar kataaron mein khaad ka chhidakaav karo.",
    voicePa: "Aaj khad da chhidkaav karo. Kaataaran teen te chaar.",
    priority: "medium"
  },
  {
    id: "t3",
    icon: Scissors,
    time: "11:00 AM",
    labelKey: "taskHarvest",
    voiceHi: "Section bee mein gehoon kaato. Phasal taiyaar hai.",
    voicePa: "Section bee vich kaanak vado. Fasal taiyaar hai.",
    priority: "low",
    profit: "Income +₹18,000"
  }
];
const WEEKLY_PLAN = [
  { day: "Mon", tasks: ["Irrigation"], today: false, done: true },
  { day: "Tue", tasks: ["Spray"], today: true, done: false },
  { day: "Wed", tasks: ["Soil Test"], today: false, done: false },
  { day: "Thu", tasks: ["Harvest"], today: false, done: false },
  { day: "Fri", tasks: ["Market Visit"], today: false, done: false },
  { day: "Sat", tasks: ["Rest 🙏"], today: false, done: false },
  { day: "Sun", tasks: ["Planning"], today: false, done: false }
];
const WEATHER = [
  { day: "Today", icon: Sun, label: "Sunny 34°C", color: "text-accent" },
  {
    day: "Tomorrow",
    icon: CloudRain,
    label: "Rain 28°C",
    color: "text-blue-300"
  },
  { day: "Day 3", icon: Sun, label: "Sunny 32°C", color: "text-accent" }
];
const priorityColors = {
  high: "bg-red-500/20 text-red-400",
  medium: "bg-accent/20 text-accent",
  low: "bg-primary/20 text-primary"
};
const langMap = {
  hi: "hi-IN",
  pa: "pa-IN",
  en: "en-IN",
  mr: "mr-IN",
  kn: "kn-IN",
  te: "te-IN"
};
function speakText(text, lang) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = langMap[lang] ?? "hi-IN";
  window.speechSynthesis.speak(u);
}
function FarmPlan() {
  const { t, language } = useLanguage();
  const [done, setDone] = reactExports.useState(/* @__PURE__ */ new Set());
  const [speaking, setSpeaking] = reactExports.useState(null);
  const today = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  function toggle(id) {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
  function handleSpeak(task) {
    const text = language === "pa" ? task.voicePa : task.voiceHi;
    speakText(text, language);
    setSpeaking(task.id);
    setTimeout(() => setSpeaking(null), 4e3);
  }
  function handleVoiceAssistant() {
    const text = language === "pa" ? "Kal paani dena hai. Aaj fertilizer spray karna hai." : "Kal paani dena hai. Aaj fertilizer spray karna hai.";
    speakText(text, language);
    setSpeaking("assistant");
    setTimeout(() => setSpeaking(null), 5e3);
  }
  const completedCount = done.size;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen gradient-bg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-24 pb-16 px-4 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-accent", children: t.goodMorning })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-2", children: t.farmPlanTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: today }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent/20 border border-accent/40 text-accent font-semibold text-base", children: [
          "💰 ",
          t.todayAdvice
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-5 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "glass border-white/10 md:col-span-2",
            "data-ocid": "tasks-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-accent" }),
                  t.morningTasks
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary/20 text-primary border border-primary/30", children: [
                  completedCount,
                  "/",
                  TASKS.length,
                  " done"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "space-y-3", children: TASKS.map((task) => {
                const isDone = done.has(task.id);
                const isSpeaking = speaking === task.id;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `rounded-xl p-4 border transition-smooth ${isDone ? "border-primary/30 bg-primary/5 opacity-70" : "border-white/15 bg-white/5"}`,
                    "data-ocid": `task-${task.id}`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => toggle(task.id),
                          "aria-label": isDone ? "Mark incomplete" : "Mark complete",
                          className: "mt-0.5 shrink-0",
                          "data-ocid": `task-check-${task.id}`,
                          children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "w-5 h-5 text-muted-foreground" })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-wrap mb-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(task.icon, { className: "w-4 h-4 text-accent shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: `font-medium text-sm ${isDone ? "line-through text-muted-foreground" : "text-foreground"}`,
                              children: t[task.labelKey]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              className: `text-xs ${priorityColors[task.priority]}`,
                              children: task.priority
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground flex items-center gap-1", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-3 h-3" }),
                            task.time
                          ] }),
                          task.profit && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-accent font-medium", children: [
                            "💰 ",
                            task.profit
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Button,
                        {
                          variant: "ghost",
                          size: "sm",
                          className: `shrink-0 p-2 h-auto rounded-lg transition-smooth ${isSpeaking ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-accent hover:bg-accent/10"}`,
                          onClick: () => handleSpeak(task),
                          "aria-label": t.listenInstruction,
                          "data-ocid": `listen-task-${task.id}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs ml-1", children: isSpeaking ? "..." : t.listenInstruction })
                          ]
                        }
                      )
                    ] })
                  },
                  task.id
                );
              }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "glass border-white/10", "data-ocid": "weather-mini-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-foreground text-sm flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4 text-accent" }),
            "3-Day Weather"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
            WEATHER.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: w.day }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(w.icon, { className: `w-4 h-4 ${w.color}` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: w.label })
                  ] })
                ]
              },
              w.day
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 pt-3 border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-white/5 border border-white/15 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-blue-300 font-medium", children: "🌧 Rain expected tomorrow 2–4 PM. Delay spraying to Day 3." }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "glass border-white/10 mb-6",
          "data-ocid": "weekly-plan-card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-4 h-4 text-accent" }),
              "This Week's Plan"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-7 gap-2", children: WEEKLY_PLAN.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `rounded-xl p-3 text-center border transition-smooth ${day.today ? "bg-accent/20 border-accent/40" : day.done ? "bg-primary/10 border-primary/30" : "bg-white/5 border-white/10"}`,
                "data-ocid": `week-day-${day.day.toLowerCase()}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: `text-xs font-bold mb-2 ${day.today ? "text-accent" : day.done ? "text-primary" : "text-muted-foreground"}`,
                      children: day.day
                    }
                  ),
                  day.tasks.map((task) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs text-foreground/80 leading-snug",
                      children: task
                    },
                    task
                  )),
                  day.done && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-primary mx-auto mt-1.5" })
                ]
              },
              day.day
            )) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "glass border-accent/30",
          "data-ocid": "voice-assistant-card",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-6 h-6 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold text-foreground mb-1", children: t.voiceAssistant }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: t.tapToListen })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: handleVoiceAssistant,
                className: `w-20 h-20 rounded-full flex items-center justify-center transition-smooth border-2 ${speaking === "assistant" ? "bg-accent border-accent animate-pulse" : "bg-accent/20 border-accent/40 hover:bg-accent/30 hover:border-accent/60"}`,
                "aria-label": "Tap to hear today's advice",
                "data-ocid": "voice-assistant-btn",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Mic,
                  {
                    className: `w-8 h-8 ${speaking === "assistant" ? "text-accent-foreground" : "text-accent"}`
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/15 px-5 py-3 max-w-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 italic", children: language === "pa" ? '"Kal paani dena hai. Aaj fertilizer spray karna hai."' : '"Kal paani dena hai. Aaj fertilizer spray karna hai."' }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: speaking === "assistant" ? "🔊 Speaking..." : "Tap button to play" })
            ] })
          ] }) })
        }
      )
    ] })
  ] });
}
export {
  FarmPlan as default
};
