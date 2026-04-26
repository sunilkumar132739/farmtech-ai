import {
  AlertCircle,
  AlertTriangle,
  Bell,
  CheckCircle,
  Info,
  X,
} from "lucide-react";
import { useState } from "react";
import type { Alert } from "../types";

const DEMO_ALERTS: Alert[] = [
  {
    id: "a1",
    type: "critical",
    title: "Nitrogen Deficiency",
    message:
      "Nitrogen levels critically low in Field A. Immediate fertilization recommended.",
    fieldId: "field-a",
    timestamp: Date.now() - 1000 * 60 * 8,
    read: false,
  },
  {
    id: "a2",
    type: "warning",
    title: "pH Imbalance Detected",
    message:
      "Soil pH in Field B has risen to 7.9, outside optimal range (6.0–7.0).",
    fieldId: "field-b",
    timestamp: Date.now() - 1000 * 60 * 25,
    read: false,
  },
  {
    id: "a3",
    type: "info",
    title: "Irrigation Scheduled",
    message:
      "Automated drip irrigation for Field C scheduled at 6:00 AM tomorrow.",
    fieldId: "field-c",
    timestamp: Date.now() - 1000 * 60 * 60,
    read: true,
  },
];

function timeAgo(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

const SEVERITY_CONFIG = {
  critical: {
    icon: AlertCircle,
    iconClass: "text-red-400",
    badgeClass: "bg-red-500/20 text-red-400 border-red-500/30",
    barClass: "bg-red-500",
    label: "Critical",
  },
  warning: {
    icon: AlertTriangle,
    iconClass: "text-amber-400",
    badgeClass: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    barClass: "bg-amber-500",
    label: "Warning",
  },
  info: {
    icon: Info,
    iconClass: "text-blue-400",
    badgeClass: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    barClass: "bg-blue-500",
    label: "Info",
  },
  success: {
    icon: CheckCircle,
    iconClass: "text-green-400",
    badgeClass: "bg-green-500/20 text-green-400 border-green-500/30",
    barClass: "bg-green-500",
    label: "Success",
  },
};

export function AlertsPanel() {
  const [alerts, setAlerts] = useState<Alert[]>(DEMO_ALERTS);

  const dismiss = (id: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  const unreadCount = alerts.filter((a) => !a.read).length;

  return (
    <div className="glass-card h-full" data-ocid="alerts-panel">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Bell className="w-4 h-4 text-yellow-400" />
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          Alerts
        </span>
        {unreadCount > 0 && (
          <span className="ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold">
            {unreadCount}
          </span>
        )}
      </div>

      {/* Alert list */}
      <div className="space-y-3">
        {alerts.length === 0 && (
          <div
            className="flex flex-col items-center py-8 text-center"
            data-ocid="alerts-empty"
          >
            <CheckCircle className="w-10 h-10 text-green-400 mb-2 opacity-60" />
            <p className="text-sm text-white/50">
              All clear — no active alerts
            </p>
          </div>
        )}

        {alerts.map((alert) => {
          const cfg = SEVERITY_CONFIG[alert.type];
          const Icon = cfg.icon;

          return (
            <div
              key={alert.id}
              className={`relative flex gap-3 p-3 rounded-xl border bg-white/5 transition-smooth hover:bg-white/10 cursor-default ${
                !alert.read ? "border-white/15" : "border-white/5 opacity-70"
              }`}
              data-ocid={`alert-item-${alert.id}`}
            >
              {/* Severity bar */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full ${cfg.barClass}`}
                style={{ borderRadius: "4px 0 0 4px" }}
              />

              <Icon
                className={`w-4 h-4 mt-0.5 flex-shrink-0 ${cfg.iconClass}`}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span
                      className={`inline-block text-[10px] font-semibold px-1.5 py-0.5 rounded border mr-2 ${cfg.badgeClass}`}
                    >
                      {cfg.label}
                    </span>
                    <span className="text-xs font-semibold text-white">
                      {alert.title}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => dismiss(alert.id)}
                    className="flex-shrink-0 text-white/30 hover:text-white/70 transition-smooth rounded p-0.5"
                    aria-label="Dismiss alert"
                    data-ocid={`alert-dismiss-${alert.id}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-xs text-white/55 mt-1 leading-relaxed">
                  {alert.message}
                </p>
                <p className="text-[10px] text-white/30 mt-1.5">
                  {timeAgo(alert.timestamp)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
