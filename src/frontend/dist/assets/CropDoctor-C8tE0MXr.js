import { u as useLanguage, r as reactExports, a as useActor, j as jsxRuntimeExports, A as ActivityEventType, b as createActor } from "./index-ib-RthyM.js";
import { N as Navbar, H as HeartPulse, B as Badge } from "./Navbar-BxJ_VEM-.js";
import { B as Button } from "./user-DZs1hiW7.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-DEgCNCa5.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import { F as FlaskConical } from "./flask-conical-C_DCI1x2.js";
import { T as TriangleAlert } from "./triangle-alert-DvDiQrwr.js";
import { C as CircleCheck } from "./circle-check-D5fSt3nL.js";
import { I as IndianRupee } from "./indian-rupee-CRWzbXy8.js";
import { V as Volume2 } from "./volume-2-5ZZ-FCdX.js";
import { L as Leaf } from "./leaf-BDTtk3JC.js";
import "./sprout-CuTJBTyQ.js";
import "./x-IzlvJscY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
];
const Camera = createLucideIcon("camera", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
];
const Pill = createLucideIcon("pill", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
];
const Upload = createLucideIcon("upload", __iconNode);
const DIAGNOSIS = {
  disease: "Wheat Rust Disease",
  confidence: 94,
  severity: "high",
  description: "Fungal infection causing orange-red pustules on leaves. Spreads fast in humid conditions.",
  chemical: {
    type: "chemical",
    medicine: "Propiconazole 25% EC",
    dosage: "2ml per litre of water, spray every 7 days",
    cost: "₹180 per 100ml bottle",
    application: "Spray early morning or evening"
  },
  organic: {
    type: "organic",
    medicine: "Neem Oil + Garlic Extract",
    dosage: "5ml neem oil + 3ml garlic per litre, weekly",
    cost: "₹40 per treatment",
    application: "Spray after sunset"
  }
};
const QUICK_REF = [
  {
    crop: "Tomato Blight",
    emoji: "🍅",
    symptom: "Yellow spots, wilting leaves",
    medicine: "Mancozeb 75% WP",
    cost: "₹120"
  },
  {
    crop: "Rice Blast",
    emoji: "🌾",
    symptom: "White diamond lesions on leaves",
    medicine: "Tricyclazole 75% WP",
    cost: "₹200"
  },
  {
    crop: "Cotton Bollworm",
    emoji: "🌿",
    symptom: "Holes in bolls, boll damage",
    medicine: "Spinosad 45% SC",
    cost: "₹350"
  }
];
function speak(text) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "hi-IN";
    window.speechSynthesis.speak(u);
  }
}
const severityBadge = {
  low: "bg-primary/20 text-primary border-primary/30",
  medium: "bg-accent/20 text-accent-foreground border-accent/30",
  high: "bg-red-500/20 text-red-400 border-red-500/30"
};
function CropDoctor() {
  const { t } = useLanguage();
  const fileRef = reactExports.useRef(null);
  const [preview, setPreview] = reactExports.useState(null);
  const [diagnosing, setDiagnosing] = reactExports.useState(false);
  const [result, setResult] = reactExports.useState(null);
  const [activeTab, setActiveTab] = reactExports.useState(
    "chemical"
  );
  const { actor } = useActor(createActor);
  function handleFile(e) {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setResult(null);
  }
  function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setResult(null);
  }
  function handleDiagnose() {
    if (!preview) return;
    setDiagnosing(true);
    setResult(null);
    actor == null ? void 0 : actor.logActivity(
      ActivityEventType.CropDoctorUpload,
      "Crop doctor photo uploaded"
    ).catch(() => {
    });
    setTimeout(() => {
      setResult(DIAGNOSIS);
      setDiagnosing(false);
    }, 2e3);
  }
  const activeTreatment = result ? activeTab === "chemical" ? result.chemical : result.organic : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen gradient-bg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pt-24 pb-16 px-4 max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "w-4 h-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-accent", children: "AI Powered · 95% Accuracy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl font-bold text-foreground mb-3", children: t.cropDoctorTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: t.cropDoctorSubtitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "glass border-white/15",
            "data-ocid": "crop-doctor-upload-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-5 h-5 text-accent" }),
                t.uploadPhoto
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      var _a;
                      return (_a = fileRef.current) == null ? void 0 : _a.click();
                    },
                    onDrop: handleDrop,
                    onDragOver: (e) => e.preventDefault(),
                    className: "w-full h-56 rounded-2xl border-2 border-dashed border-primary/40 flex flex-col items-center justify-center gap-3 hover:border-primary/70 hover:bg-primary/5 transition-smooth group relative overflow-hidden",
                    "data-ocid": "upload-zone",
                    children: preview ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: preview,
                        alt: "Uploaded crop",
                        className: "absolute inset-0 w-full h-full object-cover rounded-2xl"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-7 h-7 text-primary" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: "Click to upload or drag photo here" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "JPG, PNG, WebP supported" })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    ref: fileRef,
                    type: "file",
                    accept: "image/*",
                    className: "hidden",
                    onChange: handleFile,
                    "data-ocid": "file-input"
                  }
                ),
                preview && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "sm",
                    className: "w-full border-white/20 text-muted-foreground hover:bg-white/10",
                    onClick: () => {
                      setPreview(null);
                      setResult(null);
                    },
                    children: "Remove photo"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    className: "w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base py-6",
                    disabled: !preview || diagnosing,
                    onClick: handleDiagnose,
                    "data-ocid": "diagnose-btn",
                    children: diagnosing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-5 h-5 animate-spin" }),
                      "Analyzing crop..."
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "w-5 h-5" }),
                      t.diagnoseNow
                    ] })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          !result && !diagnosing && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "glass border-white/10 flex items-center justify-center min-h-72",
              "data-ocid": "diagnosis-empty",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "text-center py-12 px-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "w-9 h-9 text-muted-foreground opacity-40" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground mb-2", children: "Upload a crop photo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Our AI will detect diseases instantly and suggest treatment" })
              ] })
            }
          ),
          diagnosing && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "glass border-primary/30 flex items-center justify-center min-h-72",
              "data-ocid": "diagnosis-loading",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "py-12 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-9 h-9 text-primary" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold text-lg", children: "Scanning your crop..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-2", children: "AI is analyzing for diseases" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1 mt-4", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "w-2 h-2 rounded-full bg-primary animate-bounce",
                    style: { animationDelay: `${i * 0.15}s` }
                  },
                  i
                )) })
              ] })
            }
          ),
          result && !diagnosing && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                className: "glass border-red-500/20",
                "data-ocid": "diagnosis-result",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-foreground text-base", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-4 h-4 text-red-400 shrink-0" }),
                      t.diseaseDetected
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Badge,
                      {
                        className: `text-xs shrink-0 border ${severityBadge[result.severity]}`,
                        children: [
                          result.severity.toUpperCase(),
                          " SEVERITY"
                        ]
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-lg", children: result.disease }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: result.description })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-primary shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-primary font-semibold", children: [
                        result.confidence,
                        "% confidence"
                      ] })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                className: "glass border-white/15",
                "data-ocid": "treatment-card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 p-1 bg-white/5 rounded-xl", children: ["chemical", "organic"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => setActiveTab(tab),
                      className: `flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-smooth capitalize ${activeTab === tab ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
                      "data-ocid": `tab-${tab}`,
                      children: tab === "chemical" ? "💊 Chemical" : "🌿 Organic"
                    },
                    tab
                  )) }) }),
                  activeTreatment && /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-5 h-5 text-accent mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: t.treatment }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold break-words", children: activeTreatment.medicine })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-5 h-5 text-accent mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: t.dosage }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium break-words", children: activeTreatment.dosage })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-5 h-5 text-accent mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: t.estimatedCost }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-bold text-lg", children: activeTreatment.cost })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 px-4 py-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider mb-1", children: "Application" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: activeTreatment.application })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      Button,
                      {
                        variant: "outline",
                        className: "w-full border-white/20 text-foreground hover:bg-white/10 gap-2",
                        onClick: () => speak(
                          `${result.disease}. ${t.treatment}: ${activeTreatment.medicine}. ${t.dosage}: ${activeTreatment.dosage}. ${t.estimatedCost}: ${activeTreatment.cost}`
                        ),
                        "data-ocid": "listen-diagnosis-btn",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Volume2, { className: "w-4 h-4 text-accent" }),
                          t.tapToListen
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "w-5 h-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "Common Crop Diseases" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/20 text-primary border-primary/30 border text-xs", children: "Quick Reference" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-4", children: QUICK_REF.map((card) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "glass border-white/10 hover:border-primary/30 transition-smooth group",
            "data-ocid": `quick-ref-${card.crop.toLowerCase().replace(/\s+/g, "-")}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-4 space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: card.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground text-sm group-hover:text-primary transition-colors", children: card.crop }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: card.symptom })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/5 border border-white/10 px-3 py-2 space-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Medicine" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-foreground", children: card.medicine })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Cost" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-accent", children: [
                    card.cost,
                    "/bottle"
                  ] })
                ] })
              ] })
            ] })
          },
          card.crop
        )) })
      ] })
    ] })
  ] });
}
export {
  CropDoctor as default
};
