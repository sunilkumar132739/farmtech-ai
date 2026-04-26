import { g as useQuery, h as useQueryClient, a as useActor, b as createActor, i as useAuthContext, r as reactExports, j as jsxRuntimeExports, N as Navigate, A as ActivityEventType, S as Skeleton, P as Principal } from "./index-ib-RthyM.js";
import { B as Button, C as ChevronDown } from "./user-DZs1hiW7.js";
import { u as ue } from "./index-C47K-RDy.js";
import { b as useMutation, c as useIsAdmin, S as Sidebar } from "./Sidebar-Dg-WUZ3p.js";
import { S as Shield } from "./shield-wG7DL4C6.js";
import { R as RefreshCw, A as Activity, C as Clock } from "./refresh-cw-WAPbbkGg.js";
import { U as Users } from "./users-BakEaiv0.js";
import { c as createLucideIcon } from "./createLucideIcon-DsIAFFRl.js";
import { S as ShieldCheck } from "./shield-check-mqMsWIkE.js";
import "./x-IzlvJscY.js";
import "./sprout-CuTJBTyQ.js";
import "./cpu-Bvvu7u4w.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
      key: "1vdc57"
    }
  ],
  ["path", { d: "M5 21h14", key: "11awu3" }]
];
const Crown = createLucideIcon("crown", __iconNode$1);
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
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ],
  ["path", { d: "m14.5 9.5-5 5", key: "17q4r4" }],
  ["path", { d: "m9.5 9.5 5 5", key: "18nt4w" }]
];
const ShieldX = createLucideIcon("shield-x", __iconNode);
function useBackendActor() {
  return useActor(createActor);
}
function useGetActivityLog(filter) {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["activityLog", filter],
    queryFn: async () => {
      if (!actor) return [];
      const entries = await actor.getActivityLog(filter);
      return entries.map((e) => ({
        ...e,
        userId: e.userId.toText()
      }));
    },
    enabled: !!actor && !isFetching
  });
}
function useGetAllUsers() {
  const { actor, isFetching } = useBackendActor();
  return useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      if (!actor) return [];
      const users = await actor.getAllUsers();
      return users.map((u) => ({
        ...u,
        principal: u.principal.toText()
      }));
    },
    enabled: !!actor && !isFetching
  });
}
function usePromoteToAdmin() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (principal) => {
      if (!actor) throw new Error("Actor not available");
      return actor.promoteToAdmin(principal);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      queryClient.invalidateQueries({ queryKey: ["isAdmin"] });
    }
  });
}
function useRemoveAdmin() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (principal) => {
      if (!actor) throw new Error("Actor not available");
      return actor.removeAdmin(principal);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allUsers"] });
      queryClient.invalidateQueries({ queryKey: ["isAdmin"] });
    }
  });
}
function timeAgo(ns) {
  const ms = Number(ns / 1000000n);
  const diff = Date.now() - ms;
  const mins = Math.floor(diff / 6e4);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(ms).toLocaleDateString();
}
function truncatePrincipal(p) {
  if (p.length <= 16) return p;
  return `${p.slice(0, 8)}…${p.slice(-6)}`;
}
const EVENT_LABELS = {
  [ActivityEventType.Login]: "Login",
  [ActivityEventType.FailedLogin]: "Failed Login",
  [ActivityEventType.CropDoctorUpload]: "Crop Doctor",
  [ActivityEventType.IrrigationToggle]: "Irrigation",
  [ActivityEventType.MarketplaceClick]: "Marketplace",
  [ActivityEventType.BestPriceSearch]: "Best Price",
  [ActivityEventType.ProfileUpdate]: "Profile Update"
};
const EVENT_COLORS = {
  [ActivityEventType.Login]: "bg-primary/20 text-primary border-primary/30",
  [ActivityEventType.FailedLogin]: "bg-destructive/20 text-destructive border-destructive/30",
  [ActivityEventType.CropDoctorUpload]: "bg-accent/20 text-accent border-accent/30",
  [ActivityEventType.IrrigationToggle]: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  [ActivityEventType.MarketplaceClick]: "bg-secondary/30 text-secondary-foreground border-secondary/40",
  [ActivityEventType.BestPriceSearch]: "bg-accent/15 text-accent border-accent/25",
  [ActivityEventType.ProfileUpdate]: "bg-muted text-muted-foreground border-border"
};
const PAGE_SIZE = 200;
function StatCard({ icon, label, value, sub }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "glass-card flex items-center gap-4",
      "data-ocid": "admin.stat_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0", children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs uppercase tracking-wide font-medium", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-foreground", children: value }),
          sub && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: sub })
        ] })
      ]
    }
  );
}
function AdminSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen gradient-bg flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 md:ml-64 p-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-9 w-64 bg-white/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-40 bg-white/10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full bg-white/10 rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full bg-white/10 rounded-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full bg-white/10 rounded-2xl" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 w-full bg-white/10 rounded-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-48 w-full bg-white/10 rounded-2xl" })
    ] })
  ] });
}
function ActivityRow({ entry, index, allUsers }) {
  const user = allUsers.find((u) => u.principal === entry.userId);
  const displayUser = (user == null ? void 0 : user.displayName) || truncatePrincipal(entry.userId);
  const colorClass = EVENT_COLORS[entry.eventType] ?? "bg-muted text-muted-foreground border-border";
  const label = EVENT_LABELS[entry.eventType] ?? entry.eventType;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "tr",
    {
      className: "border-b border-white/5 hover:bg-white/5 transition-colors",
      "data-ocid": `admin.activity_row.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: `inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full border ${colorClass}`,
            children: label
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden sm:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-foreground/80 text-sm truncate max-w-[120px] block",
            title: entry.userId,
            children: displayUser
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text-muted-foreground text-xs whitespace-nowrap",
            title: new Date(
              Number(entry.timestamp / 1000000n)
            ).toLocaleString(),
            children: timeAgo(entry.timestamp)
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 hidden md:table-cell", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs truncate max-w-[200px] block", children: entry.metadata || "—" }) })
      ]
    }
  );
}
function AdminDashboard() {
  const { principal } = useAuthContext();
  const { data: isAdmin, isLoading: checkingAdmin } = useIsAdmin();
  const {
    data: activityLog = [],
    isLoading: loadingActivity,
    refetch: refetchActivity
  } = useGetActivityLog({});
  const { data: allUsers = [], isLoading: loadingUsers } = useGetAllUsers();
  const promote = usePromoteToAdmin();
  const removeAdminMutation = useRemoveAdmin();
  const [eventFilter, setEventFilter] = reactExports.useState(
    "all"
  );
  const [dateRange, setDateRange] = reactExports.useState("7d");
  const [visibleCount, setVisibleCount] = reactExports.useState(PAGE_SIZE);
  const todayStart = /* @__PURE__ */ new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayStartNs = BigInt(todayStart.getTime()) * 1000000n;
  const eventsToday = activityLog.filter(
    (e) => e.timestamp >= todayStartNs
  ).length;
  const filteredActivity = reactExports.useMemo(() => {
    let result = [...activityLog].sort(
      (a, b) => b.timestamp > a.timestamp ? 1 : -1
    );
    if (eventFilter !== "all") {
      result = result.filter((e) => e.eventType === eventFilter);
    }
    if (dateRange !== "all") {
      const days = dateRange === "7d" ? 7 : 30;
      const cutoff = BigInt(Date.now() - days * 24 * 60 * 60 * 1e3) * 1000000n;
      result = result.filter((e) => e.timestamp >= cutoff);
    }
    return result;
  }, [activityLog, eventFilter, dateRange]);
  const visibleActivity = filteredActivity.slice(0, visibleCount);
  const hasMore = filteredActivity.length > visibleCount;
  if (checkingAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminSkeleton, {});
  if (!isAdmin) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/dashboard" });
  function handlePromote(principalText) {
    promote.mutate(Principal.fromText(principalText), {
      onSuccess: (ok) => {
        if (ok) ue.success("User promoted to Admin");
        else ue.error("Could not promote user");
      },
      onError: () => ue.error("Failed to promote user")
    });
  }
  function handleRemove(principalText) {
    removeAdminMutation.mutate(Principal.fromText(principalText), {
      onSuccess: (ok) => {
        if (ok) ue.success("Admin role removed");
        else ue.error("Could not remove admin");
      },
      onError: () => ue.error("Failed to remove admin")
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen gradient-bg flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "main",
      {
        className: "flex-1 md:ml-64 p-4 md:p-8 space-y-8 overflow-x-hidden",
        "data-ocid": "admin.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-accent" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold text-foreground leading-none", children: "Admin Dashboard" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Monitor user activity & manage team" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => refetchActivity(),
                className: "glass border-white/20 text-foreground hover:bg-white/10",
                "data-ocid": "admin.refresh_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 mr-2" }),
                  "Refresh"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
              "data-ocid": "admin.stats_section",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-primary" }),
                    label: "Total Users",
                    value: loadingUsers ? "—" : allUsers.length,
                    sub: `${allUsers.filter((u) => u.isAdmin).length} admin(s)`
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5 text-primary" }),
                    label: "Total Events",
                    value: loadingActivity ? "—" : activityLog.length,
                    sub: "up to last 2,000 entries"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  StatCard,
                  {
                    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }),
                    label: "Events Today",
                    value: loadingActivity ? "—" : eventsToday,
                    sub: (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
                      weekday: "long",
                      month: "short",
                      day: "numeric"
                    })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4", "data-ocid": "admin.activity_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-5 h-5 text-accent" }),
                "Activity Timeline"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                "Showing ",
                visibleActivity.length,
                " of ",
                filteredActivity.length,
                " ",
                "events"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "glass rounded-xl p-4 flex flex-wrap gap-4",
                "data-ocid": "admin.filters_panel",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 min-w-[160px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "event-type-filter",
                        className: "text-xs text-muted-foreground font-medium uppercase tracking-wide",
                        children: "Event Type"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "event-type-filter",
                        value: eventFilter,
                        onChange: (e) => {
                          setEventFilter(e.target.value);
                          setVisibleCount(PAGE_SIZE);
                        },
                        className: "auth-input py-2 text-sm",
                        "data-ocid": "admin.event_type_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All Events" }),
                          Object.values(ActivityEventType).map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: type, children: EVENT_LABELS[type] }, type))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 min-w-[140px]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "date-range-filter",
                        className: "text-xs text-muted-foreground font-medium uppercase tracking-wide",
                        children: "Date Range"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "date-range-filter",
                        value: dateRange,
                        onChange: (e) => {
                          setDateRange(e.target.value);
                          setVisibleCount(PAGE_SIZE);
                        },
                        className: "auth-input py-2 text-sm",
                        "data-ocid": "admin.date_range_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "7d", children: "Last 7 days" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "30d", children: "Last 30 days" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "all", children: "All time" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            loadingActivity ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "glass-card space-y-3",
                "data-ocid": "admin.activity_loading_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full bg-white/10 rounded-lg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full bg-white/10 rounded-lg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full bg-white/10 rounded-lg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full bg-white/10 rounded-lg" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-full bg-white/10 rounded-lg" })
                ]
              }
            ) : filteredActivity.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "glass-card flex flex-col items-center justify-center py-16 text-center space-y-3",
                "data-ocid": "admin.activity_empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-10 h-10 text-muted-foreground opacity-40" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold text-muted-foreground", children: "No activity recorded yet" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Activity will appear here as farmers use the platform." })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "glass rounded-xl overflow-hidden",
                "data-ocid": "admin.activity_table",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-white/10 bg-white/5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Event" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden sm:table-cell", children: "User" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: "Time" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell", children: "Details" })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: visibleActivity.map((entry, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ActivityRow,
                      {
                        entry,
                        index: i,
                        allUsers
                      },
                      String(entry.id)
                    )) })
                  ] }) }),
                  hasMore && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-3 border-t border-white/10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => setVisibleCount((c) => c + PAGE_SIZE),
                      className: "text-accent hover:text-accent/80 hover:bg-accent/10",
                      "data-ocid": "admin.load_more_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 mr-2" }),
                        "Load more (",
                        filteredActivity.length - visibleCount,
                        " ",
                        "remaining)"
                      ]
                    }
                  ) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "space-y-4 pb-10", "data-ocid": "admin.users_section", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-foreground flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5 text-accent" }),
              "User Management"
            ] }),
            loadingUsers ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                "data-ocid": "admin.users_loading_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full bg-white/10 rounded-2xl" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full bg-white/10 rounded-2xl" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32 w-full bg-white/10 rounded-2xl" })
                ]
              }
            ) : allUsers.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "glass-card flex flex-col items-center justify-center py-12 text-center",
                "data-ocid": "admin.users_empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-9 h-9 text-muted-foreground opacity-40 mb-3" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "No registered users yet." })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                "data-ocid": "admin.users_list",
                children: allUsers.map((user, i) => {
                  const isSelf = user.principal === principal;
                  const joined = new Date(
                    Number(user.createdAt / 1000000n)
                  ).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                  });
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "glass-card space-y-3",
                      "data-ocid": `admin.user_card.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0", children: user.isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(Crown, { className: "w-4 h-4 text-accent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-primary" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm truncate", children: user.displayName || truncatePrincipal(user.principal) }),
                              user.fullName && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: user.fullName })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex flex-col items-end gap-1", children: [
                            user.isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3 h-3" }),
                              "Admin"
                            ] }),
                            isSelf && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30", children: "You" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 shrink-0" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                            "Joined ",
                            joined
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground font-mono break-all opacity-60", children: truncatePrincipal(user.principal) }),
                        !isSelf && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-1", children: user.isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "outline",
                            size: "sm",
                            className: "w-full glass border-destructive/30 text-destructive hover:bg-destructive/15 hover:border-destructive/50",
                            onClick: () => handleRemove(user.principal),
                            disabled: removeAdminMutation.isPending,
                            "data-ocid": `admin.remove_admin_button.${i + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldX, { className: "w-3.5 h-3.5 mr-2" }),
                              "Remove Admin"
                            ]
                          }
                        ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Button,
                          {
                            variant: "outline",
                            size: "sm",
                            className: "w-full glass border-primary/30 text-primary hover:bg-primary/15 hover:border-primary/50",
                            onClick: () => handlePromote(user.principal),
                            disabled: promote.isPending,
                            "data-ocid": `admin.make_admin_button.${i + 1}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "w-3.5 h-3.5 mr-2" }),
                              "Make Admin"
                            ]
                          }
                        ) })
                      ]
                    },
                    user.principal
                  );
                })
              }
            )
          ] })
        ]
      }
    )
  ] });
}
export {
  AdminDashboard as default
};
