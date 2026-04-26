import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Principal } from "@icp-sdk/core/principal";
import { Navigate } from "@tanstack/react-router";
import {
  Activity,
  Calendar,
  ChevronDown,
  Clock,
  Crown,
  RefreshCw,
  Shield,
  ShieldCheck,
  ShieldX,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Sidebar } from "../components/Sidebar";
import { useAuthContext } from "../context/AuthContext";
import {
  ActivityEventType,
  useGetActivityLog,
  useGetAllUsers,
  usePromoteToAdmin,
  useRemoveAdmin,
} from "../hooks/useAdminQueries";
import { useIsAdmin } from "../hooks/useQueries";
import type { ActivityEntry } from "../types/admin";

// ─── helpers ────────────────────────────────────────────────────────────────

function timeAgo(ns: bigint): string {
  const ms = Number(ns / 1_000_000n);
  const diff = Date.now() - ms;
  const mins = Math.floor(diff / 60_000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(ms).toLocaleDateString();
}

function truncatePrincipal(p: string): string {
  if (p.length <= 16) return p;
  return `${p.slice(0, 8)}…${p.slice(-6)}`;
}

const EVENT_LABELS: Record<ActivityEventType, string> = {
  [ActivityEventType.Login]: "Login",
  [ActivityEventType.FailedLogin]: "Failed Login",
  [ActivityEventType.CropDoctorUpload]: "Crop Doctor",
  [ActivityEventType.IrrigationToggle]: "Irrigation",
  [ActivityEventType.MarketplaceClick]: "Marketplace",
  [ActivityEventType.BestPriceSearch]: "Best Price",
  [ActivityEventType.ProfileUpdate]: "Profile Update",
};

const EVENT_COLORS: Record<ActivityEventType, string> = {
  [ActivityEventType.Login]: "bg-primary/20 text-primary border-primary/30",
  [ActivityEventType.FailedLogin]:
    "bg-destructive/20 text-destructive border-destructive/30",
  [ActivityEventType.CropDoctorUpload]:
    "bg-accent/20 text-accent border-accent/30",
  [ActivityEventType.IrrigationToggle]:
    "bg-blue-500/20 text-blue-400 border-blue-500/30",
  [ActivityEventType.MarketplaceClick]:
    "bg-secondary/30 text-secondary-foreground border-secondary/40",
  [ActivityEventType.BestPriceSearch]:
    "bg-accent/15 text-accent border-accent/25",
  [ActivityEventType.ProfileUpdate]:
    "bg-muted text-muted-foreground border-border",
};

type DateRange = "7d" | "30d" | "all";

const PAGE_SIZE = 200;

// ─── stat card ──────────────────────────────────────────────────────────────

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  sub?: string;
}

function StatCard({ icon, label, value, sub }: StatCardProps) {
  return (
    <div
      className="glass-card flex items-center gap-4"
      data-ocid="admin.stat_card"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-muted-foreground text-xs uppercase tracking-wide font-medium">
          {label}
        </p>
        <p className="text-2xl font-display font-bold text-foreground">
          {value}
        </p>
        {sub && <p className="text-xs text-muted-foreground truncate">{sub}</p>}
      </div>
    </div>
  );
}

// ─── skeleton loader ─────────────────────────────────────────────────────────

function AdminSkeleton() {
  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />
      <div className="flex-1 md:ml-64 p-6 space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-9 w-64 bg-white/10" />
          <Skeleton className="h-4 w-40 bg-white/10" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Skeleton className="h-24 w-full bg-white/10 rounded-2xl" />
          <Skeleton className="h-24 w-full bg-white/10 rounded-2xl" />
          <Skeleton className="h-24 w-full bg-white/10 rounded-2xl" />
        </div>
        <Skeleton className="h-64 w-full bg-white/10 rounded-2xl" />
        <Skeleton className="h-48 w-full bg-white/10 rounded-2xl" />
      </div>
    </div>
  );
}

// ─── activity row ─────────────────────────────────────────────────────────────

interface ActivityRowProps {
  entry: ActivityEntry;
  index: number;
  allUsers: { principal: string; displayName: string }[];
}

function ActivityRow({ entry, index, allUsers }: ActivityRowProps) {
  const user = allUsers.find((u) => u.principal === entry.userId);
  const displayUser = user?.displayName || truncatePrincipal(entry.userId);
  const colorClass =
    EVENT_COLORS[entry.eventType] ??
    "bg-muted text-muted-foreground border-border";
  const label = EVENT_LABELS[entry.eventType] ?? entry.eventType;

  return (
    <tr
      className="border-b border-white/5 hover:bg-white/5 transition-colors"
      data-ocid={`admin.activity_row.${index + 1}`}
    >
      <td className="px-4 py-3">
        <span
          className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full border ${colorClass}`}
        >
          {label}
        </span>
      </td>
      <td className="px-4 py-3 hidden sm:table-cell">
        <span
          className="text-foreground/80 text-sm truncate max-w-[120px] block"
          title={entry.userId}
        >
          {displayUser}
        </span>
      </td>
      <td className="px-4 py-3">
        <span
          className="text-muted-foreground text-xs whitespace-nowrap"
          title={new Date(
            Number(entry.timestamp / 1_000_000n),
          ).toLocaleString()}
        >
          {timeAgo(entry.timestamp)}
        </span>
      </td>
      <td className="px-4 py-3 hidden md:table-cell">
        <span className="text-muted-foreground text-xs truncate max-w-[200px] block">
          {entry.metadata || "—"}
        </span>
      </td>
    </tr>
  );
}

// ─── main page ───────────────────────────────────────────────────────────────

export default function AdminDashboard() {
  const { principal } = useAuthContext();
  const { data: isAdmin, isLoading: checkingAdmin } = useIsAdmin();
  const {
    data: activityLog = [],
    isLoading: loadingActivity,
    refetch: refetchActivity,
  } = useGetActivityLog({});
  const { data: allUsers = [], isLoading: loadingUsers } = useGetAllUsers();
  const promote = usePromoteToAdmin();
  const removeAdminMutation = useRemoveAdmin();

  const [eventFilter, setEventFilter] = useState<ActivityEventType | "all">(
    "all",
  );
  const [dateRange, setDateRange] = useState<DateRange>("7d");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // ── compute stats ────────────────────────────────────────────────────────
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const todayStartNs = BigInt(todayStart.getTime()) * 1_000_000n;
  const eventsToday = activityLog.filter(
    (e) => e.timestamp >= todayStartNs,
  ).length;

  // ── filter activity log ───────────────────────────────────────────────────
  const filteredActivity = useMemo(() => {
    let result = [...activityLog].sort((a, b) =>
      b.timestamp > a.timestamp ? 1 : -1,
    );
    if (eventFilter !== "all") {
      result = result.filter((e) => e.eventType === eventFilter);
    }
    if (dateRange !== "all") {
      const days = dateRange === "7d" ? 7 : 30;
      const cutoff =
        BigInt(Date.now() - days * 24 * 60 * 60 * 1000) * 1_000_000n;
      result = result.filter((e) => e.timestamp >= cutoff);
    }
    return result;
  }, [activityLog, eventFilter, dateRange]);

  const visibleActivity = filteredActivity.slice(0, visibleCount);
  const hasMore = filteredActivity.length > visibleCount;

  // ── redirect if not admin (after all hooks) ───────────────────────────────
  if (checkingAdmin) return <AdminSkeleton />;
  if (!isAdmin) return <Navigate to="/dashboard" />;

  // ── admin toggle handlers ─────────────────────────────────────────────────
  function handlePromote(principalText: string) {
    promote.mutate(Principal.fromText(principalText), {
      onSuccess: (ok) => {
        if (ok) toast.success("User promoted to Admin");
        else toast.error("Could not promote user");
      },
      onError: () => toast.error("Failed to promote user"),
    });
  }

  function handleRemove(principalText: string) {
    removeAdminMutation.mutate(Principal.fromText(principalText), {
      onSuccess: (ok) => {
        if (ok) toast.success("Admin role removed");
        else toast.error("Could not remove admin");
      },
      onError: () => toast.error("Failed to remove admin"),
    });
  }

  return (
    <div className="min-h-screen gradient-bg flex">
      <Sidebar />

      <main
        className="flex-1 md:ml-64 p-4 md:p-8 space-y-8 overflow-x-hidden"
        data-ocid="admin.page"
      >
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-none">
                Admin Dashboard
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                Monitor user activity &amp; manage team
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => refetchActivity()}
            className="glass border-white/20 text-foreground hover:bg-white/10"
            data-ocid="admin.refresh_button"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Stat Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          data-ocid="admin.stats_section"
        >
          <StatCard
            icon={<Users className="w-5 h-5 text-primary" />}
            label="Total Users"
            value={loadingUsers ? "—" : allUsers.length}
            sub={`${allUsers.filter((u) => u.isAdmin).length} admin(s)`}
          />
          <StatCard
            icon={<Activity className="w-5 h-5 text-primary" />}
            label="Total Events"
            value={loadingActivity ? "—" : activityLog.length}
            sub="up to last 2,000 entries"
          />
          <StatCard
            icon={<Clock className="w-5 h-5 text-primary" />}
            label="Events Today"
            value={loadingActivity ? "—" : eventsToday}
            sub={new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          />
        </div>

        {/* Activity Timeline */}
        <section className="space-y-4" data-ocid="admin.activity_section">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
              <Activity className="w-5 h-5 text-accent" />
              Activity Timeline
            </h2>
            <p className="text-xs text-muted-foreground">
              Showing {visibleActivity.length} of {filteredActivity.length}{" "}
              events
            </p>
          </div>

          {/* Filters */}
          <div
            className="glass rounded-xl p-4 flex flex-wrap gap-4"
            data-ocid="admin.filters_panel"
          >
            <div className="flex flex-col gap-1 min-w-[160px]">
              <label
                htmlFor="event-type-filter"
                className="text-xs text-muted-foreground font-medium uppercase tracking-wide"
              >
                Event Type
              </label>
              <select
                id="event-type-filter"
                value={eventFilter}
                onChange={(e) => {
                  setEventFilter(e.target.value as ActivityEventType | "all");
                  setVisibleCount(PAGE_SIZE);
                }}
                className="auth-input py-2 text-sm"
                data-ocid="admin.event_type_select"
              >
                <option value="all">All Events</option>
                {Object.values(ActivityEventType).map((type) => (
                  <option key={type} value={type}>
                    {EVENT_LABELS[type]}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1 min-w-[140px]">
              <label
                htmlFor="date-range-filter"
                className="text-xs text-muted-foreground font-medium uppercase tracking-wide"
              >
                Date Range
              </label>
              <select
                id="date-range-filter"
                value={dateRange}
                onChange={(e) => {
                  setDateRange(e.target.value as DateRange);
                  setVisibleCount(PAGE_SIZE);
                }}
                className="auth-input py-2 text-sm"
                data-ocid="admin.date_range_select"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="all">All time</option>
              </select>
            </div>
          </div>

          {/* Table */}
          {loadingActivity ? (
            <div
              className="glass-card space-y-3"
              data-ocid="admin.activity_loading_state"
            >
              <Skeleton className="h-10 w-full bg-white/10 rounded-lg" />
              <Skeleton className="h-10 w-full bg-white/10 rounded-lg" />
              <Skeleton className="h-10 w-full bg-white/10 rounded-lg" />
              <Skeleton className="h-10 w-full bg-white/10 rounded-lg" />
              <Skeleton className="h-10 w-full bg-white/10 rounded-lg" />
            </div>
          ) : filteredActivity.length === 0 ? (
            <div
              className="glass-card flex flex-col items-center justify-center py-16 text-center space-y-3"
              data-ocid="admin.activity_empty_state"
            >
              <Activity className="w-10 h-10 text-muted-foreground opacity-40" />
              <p className="font-display text-lg font-semibold text-muted-foreground">
                No activity recorded yet
              </p>
              <p className="text-sm text-muted-foreground">
                Activity will appear here as farmers use the platform.
              </p>
            </div>
          ) : (
            <div
              className="glass rounded-xl overflow-hidden"
              data-ocid="admin.activity_table"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Event
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden sm:table-cell">
                        User
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        Time
                      </th>
                      <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wide hidden md:table-cell">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleActivity.map((entry, i) => (
                      <ActivityRow
                        key={String(entry.id)}
                        entry={entry}
                        index={i}
                        allUsers={allUsers}
                      />
                    ))}
                  </tbody>
                </table>
              </div>

              {hasMore && (
                <div className="px-4 py-3 border-t border-white/10 flex justify-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="text-accent hover:text-accent/80 hover:bg-accent/10"
                    data-ocid="admin.load_more_button"
                  >
                    <ChevronDown className="w-4 h-4 mr-2" />
                    Load more ({filteredActivity.length - visibleCount}{" "}
                    remaining)
                  </Button>
                </div>
              )}
            </div>
          )}
        </section>

        {/* User Management */}
        <section className="space-y-4 pb-10" data-ocid="admin.users_section">
          <h2 className="font-display text-xl font-bold text-foreground flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" />
            User Management
          </h2>

          {loadingUsers ? (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              data-ocid="admin.users_loading_state"
            >
              <Skeleton className="h-32 w-full bg-white/10 rounded-2xl" />
              <Skeleton className="h-32 w-full bg-white/10 rounded-2xl" />
              <Skeleton className="h-32 w-full bg-white/10 rounded-2xl" />
            </div>
          ) : allUsers.length === 0 ? (
            <div
              className="glass-card flex flex-col items-center justify-center py-12 text-center"
              data-ocid="admin.users_empty_state"
            >
              <Users className="w-9 h-9 text-muted-foreground opacity-40 mb-3" />
              <p className="text-muted-foreground">No registered users yet.</p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              data-ocid="admin.users_list"
            >
              {allUsers.map((user, i) => {
                const isSelf = user.principal === principal;
                const joined = new Date(
                  Number(user.createdAt / 1_000_000n),
                ).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });

                return (
                  <div
                    key={user.principal}
                    className="glass-card space-y-3"
                    data-ocid={`admin.user_card.${i + 1}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                          {user.isAdmin ? (
                            <Crown className="w-4 h-4 text-accent" />
                          ) : (
                            <Users className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground text-sm truncate">
                            {user.displayName ||
                              truncatePrincipal(user.principal)}
                          </p>
                          {user.fullName && (
                            <p className="text-xs text-muted-foreground truncate">
                              {user.fullName}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="shrink-0 flex flex-col items-end gap-1">
                        {user.isAdmin && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
                            <ShieldCheck className="w-3 h-3" />
                            Admin
                          </span>
                        )}
                        {isSelf && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                            You
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5 shrink-0" />
                      <span>Joined {joined}</span>
                    </div>

                    <p className="text-[10px] text-muted-foreground font-mono break-all opacity-60">
                      {truncatePrincipal(user.principal)}
                    </p>

                    {!isSelf && (
                      <div className="pt-1">
                        {user.isAdmin ? (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full glass border-destructive/30 text-destructive hover:bg-destructive/15 hover:border-destructive/50"
                            onClick={() => handleRemove(user.principal)}
                            disabled={removeAdminMutation.isPending}
                            data-ocid={`admin.remove_admin_button.${i + 1}`}
                          >
                            <ShieldX className="w-3.5 h-3.5 mr-2" />
                            Remove Admin
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full glass border-primary/30 text-primary hover:bg-primary/15 hover:border-primary/50"
                            onClick={() => handlePromote(user.principal)}
                            disabled={promote.isPending}
                            data-ocid={`admin.make_admin_button.${i + 1}`}
                          >
                            <ShieldCheck className="w-3.5 h-3.5 mr-2" />
                            Make Admin
                          </Button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
