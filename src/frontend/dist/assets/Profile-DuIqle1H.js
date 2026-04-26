import { d as useAuth, a as useActor, r as reactExports, j as jsxRuntimeExports, S as Skeleton, A as ActivityEventType, b as createActor } from "./index-ib-RthyM.js";
import { B as Badge } from "./Navbar-BxJ_VEM-.js";
import { U as User, B as Button } from "./user-DZs1hiW7.js";
import { I as Input } from "./input-CIAHzYDO.js";
import { L as Label } from "./label-Bw3fJEXf.js";
import { L as Layout, S as Separator } from "./Layout-Cs_Ziq3X.js";
import { u as ue } from "./index-C47K-RDy.js";
import { u as useGetUserProfile, a as useUpdateUserProfile, S as Sidebar } from "./Sidebar-Dg-WUZ3p.js";
import { S as Sprout } from "./sprout-CuTJBTyQ.js";
import { S as ShieldCheck } from "./shield-check-mqMsWIkE.js";
import { C as CircleCheck } from "./circle-check-D5fSt3nL.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import { C as Copy } from "./copy-C-KDkIE3.js";
import { L as LoaderCircle } from "./loader-circle-BgS6_iZ0.js";
import { X } from "./x-IzlvJscY.js";
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
const __iconNode$3 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }]
];
const CalendarDays = createLucideIcon("calendar-days", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
  ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
  ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
  ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
  ["path", { d: "M2 16h.01", key: "1gqxmh" }],
  ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
  ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
  ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
  ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }]
];
const Fingerprint = createLucideIcon("fingerprint", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    {
      d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
      key: "1ykcvy"
    }
  ]
];
const PenLine = createLucideIcon("pen-line", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode);
function Profile() {
  const { principal, setUserProfile } = useAuth();
  const { data: profileData, isLoading } = useGetUserProfile();
  const updateMutation = useUpdateUserProfile();
  const { actor } = useActor(createActor);
  const [editing, setEditing] = reactExports.useState(false);
  const [displayName, setDisplayName] = reactExports.useState("");
  const [fullName, setFullName] = reactExports.useState("");
  const [displayNameError, setDisplayNameError] = reactExports.useState("");
  const [copiedPrincipal, setCopiedPrincipal] = reactExports.useState(false);
  function startEditing() {
    setDisplayName((profileData == null ? void 0 : profileData.displayName) || "");
    setFullName((profileData == null ? void 0 : profileData.fullName) || "");
    setDisplayNameError("");
    setEditing(true);
  }
  function handleCancel() {
    setEditing(false);
    setDisplayNameError("");
  }
  function validateDisplayName(value) {
    if (!value.trim()) {
      setDisplayNameError("Display name cannot be empty");
      return false;
    }
    setDisplayNameError("");
    return true;
  }
  async function handleSave() {
    if (!validateDisplayName(displayName)) return;
    try {
      const updated = await updateMutation.mutateAsync({
        displayName: displayName.trim(),
        fullName: fullName.trim()
      });
      setUserProfile(updated);
      setEditing(false);
      actor == null ? void 0 : actor.logActivity(
        ActivityEventType.ProfileUpdate,
        "Profile updated: name or location"
      ).catch(() => {
      });
      ue.success("Profile updated successfully!", {
        description: "Your changes have been saved.",
        duration: 4e3
      });
    } catch {
      ue.error("Failed to update profile", {
        description: "Please try again.",
        duration: 5e3
      });
    }
  }
  async function copyPrincipal() {
    if (!principal) return;
    await navigator.clipboard.writeText(principal);
    setCopiedPrincipal(true);
    ue.success("Principal ID copied!");
    setTimeout(() => setCopiedPrincipal(false), 2e3);
  }
  const joinedDate = (profileData == null ? void 0 : profileData.createdAt) ? new Date(Number(profileData.createdAt) / 1e6).toLocaleDateString(
    "en-IN",
    { year: "numeric", month: "long", day: "numeric" }
  ) : null;
  const truncatedPrincipal = principal ? `${principal.slice(0, 12)}...${principal.slice(-8)}` : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen gradient-bg flex", "data-ocid": "profile-page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 md:ml-64 px-4 sm:px-6 lg:px-8 py-8 pt-16 md:pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "welcome-banner", "data-ocid": "profile-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/20 border-2 border-primary/30 flex items-center justify-center shrink-0 shadow-lg", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "w-7 h-7 rounded-full bg-white/10" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sprout, { className: "w-7 h-7 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "welcome-text", children: "My Profile" }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-40 bg-white/10 mt-1" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "welcome-subtitle", children: [
            "Welcome back,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent font-semibold", children: (profileData == null ? void 0 : profileData.displayName) || "Farmer" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card space-y-4", "data-ocid": "account-info-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground uppercase tracking-wider", children: "Account Information" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "ml-auto border-primary/30 text-primary text-[10px] px-2 py-0.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-2.5 h-2.5 mr-1" }),
                "Verified"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Fingerprint, { className: "w-3.5 h-3.5" }),
            "Principal ID"
          ] }),
          isLoading || !principal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full bg-white/10 rounded-lg" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-3 bg-white/5 rounded-lg border border-white/10 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "flex-1 text-xs font-mono text-foreground truncate min-w-0", children: truncatedPrincipal }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: copyPrincipal,
                "aria-label": "Copy Principal ID",
                className: "shrink-0 p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-foreground transition-smooth",
                "data-ocid": "btn-copy-principal",
                children: copiedPrincipal ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "w-3.5 h-3.5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "w-3.5 h-3.5" }),
            "Member Since"
          ] }),
          isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-48 bg-white/10 rounded-lg" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 py-3 bg-white/5 rounded-lg border border-white/10 text-sm text-foreground font-medium", children: joinedDate ?? "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-xs text-muted-foreground font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5" }),
            "Authentication"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-4 py-3 bg-white/5 rounded-lg border border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-6 rounded-full bg-primary/30 border border-primary/40 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3 h-3 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium", children: "Internet Identity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-semibold", children: "SECURE" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card space-y-4", "data-ocid": "edit-profile-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold text-foreground uppercase tracking-wider", children: "Profile Details" }),
          !editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "sm",
              variant: "outline",
              onClick: startEditing,
              className: "ml-auto border-white/20 text-foreground hover:bg-white/10 bg-transparent gap-1.5",
              "data-ocid": "btn-edit-profile",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PenLine, { className: "w-3.5 h-3.5" }),
                "Edit"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "bg-white/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Label,
              {
                htmlFor: "display-name",
                className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                children: [
                  "Display Name ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ]
              }
            ),
            editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "display-name",
                  className: "auth-input",
                  value: displayName,
                  onChange: (e) => {
                    setDisplayName(e.target.value);
                    if (displayNameError)
                      validateDisplayName(e.target.value);
                  },
                  onBlur: (e) => validateDisplayName(e.target.value),
                  placeholder: "Your display name",
                  maxLength: 50,
                  "aria-describedby": displayNameError ? "display-name-error" : void 0,
                  "aria-invalid": !!displayNameError,
                  "data-ocid": "input-display-name"
                }
              ),
              displayNameError && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  id: "display-name-error",
                  className: "text-xs text-destructive px-1",
                  children: displayNameError
                }
              )
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 bg-white/5 rounded-lg border border-white/10", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-32 bg-white/10" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: (profileData == null ? void 0 : profileData.displayName) || "—" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Label,
              {
                htmlFor: "full-name",
                className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                children: "Full Name"
              }
            ),
            editing ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "full-name",
                className: "auth-input",
                value: fullName,
                onChange: (e) => setFullName(e.target.value),
                placeholder: "Your full name",
                maxLength: 100,
                "data-ocid": "input-full-name"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 bg-white/5 rounded-lg border border-white/10", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-40 bg-white/10" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground font-medium", children: (profileData == null ? void 0 : profileData.fullName) || "—" }) })
          ] })
        ] }),
        editing && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex gap-3 pt-2",
            "data-ocid": "profile-edit-actions",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  className: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2",
                  onClick: handleSave,
                  disabled: updateMutation.isPending,
                  "data-ocid": "btn-save-profile",
                  children: updateMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 animate-spin" }),
                    "Saving…"
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-4 h-4" }),
                    "Save Changes"
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  className: "border-white/20 text-foreground hover:bg-white/10 bg-transparent gap-2",
                  onClick: handleCancel,
                  disabled: updateMutation.isPending,
                  "data-ocid": "btn-cancel-edit",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" }),
                    "Cancel"
                  ]
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass p-4 flex items-start gap-3",
          "data-ocid": "ii-note",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-4 h-4 text-accent" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Secured by Internet Identity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: "Your email and password are managed by Internet Identity — a privacy-preserving, password-free authentication system. Only your display name and full name can be edited here." })
            ] })
          ]
        }
      )
    ] }) })
  ] }) });
}
export {
  Profile as default
};
