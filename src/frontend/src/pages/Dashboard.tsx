import { Button } from "@/components/ui/button";
import { ChevronDown, RefreshCw, Wifi, WifiOff } from "lucide-react";
import { useState } from "react";
import { AlertsPanel } from "../components/AlertsPanel";
import { CropHealthPanel } from "../components/CropHealthPanel";
import { HyperLocalWeatherWidget } from "../components/HyperLocalWeatherWidget";
import { IoTAutomationPanel } from "../components/IoTAutomationPanel";
import { Layout } from "../components/Layout";
import { SensorFeed } from "../components/SensorFeed";
import { Sidebar } from "../components/Sidebar";
import { SmartDecisionWidget } from "../components/SmartDecisionWidget";
import { VoiceAssistantWidget } from "../components/VoiceAssistantWidget";
import { WeatherWidget } from "../components/WeatherWidget";
import { useAuth } from "../hooks/useAuth";
import { useSensorSimulator } from "../hooks/useSensorSimulator";

type FieldId = "field-a" | "field-b" | "field-c";

const FIELD_OPTIONS: { id: FieldId; label: string }[] = [
  { id: "field-a", label: "Field A – North Block" },
  { id: "field-b", label: "Field B – South Block" },
  { id: "field-c", label: "Field C – East Plot" },
];

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function formatDate(): string {
  return new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function FieldSelector({
  selected,
  onChange,
}: {
  selected: FieldId;
  onChange: (id: FieldId) => void;
}) {
  return (
    <div className="relative" data-ocid="field-selector">
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value as FieldId)}
        className="glass px-4 py-2 pr-8 text-sm font-semibold text-white bg-transparent appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20 transition-smooth"
        aria-label="Select field"
      >
        {FIELD_OPTIONS.map((field) => (
          <option
            key={field.id}
            value={field.id}
            className="bg-card text-foreground"
            data-ocid={`field-option-${field.id}`}
          >
            {field.label}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-white/60" />
    </div>
  );
}

function WelcomeBanner({ displayName }: { displayName: string }) {
  return (
    <div className="welcome-banner" data-ocid="welcome-banner">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="welcome-text">
            Welcome back, <span className="text-accent">{displayName}</span>!
          </h2>
          <p className="welcome-subtitle text-sm mt-1">
            Here's your farm summary for today, {formatDate()}.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          {(
            [
              { label: "Active Fields", value: "3", color: "text-primary" },
              { label: "Alerts Today", value: "2", color: "text-accent" },
              { label: "Sensors Online", value: "12", color: "text-primary" },
            ] as const
          ).map((stat) => (
            <div
              key={stat.label}
              className="text-center"
              data-ocid={`welcome-stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <p className={`text-xl font-bold font-display ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-[10px] text-white/40 mt-0.5 whitespace-nowrap">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [selectedField, setSelectedField] = useState<FieldId>("field-a");
  const { reading, previousReading, isLive, setIsLive } =
    useSensorSimulator(selectedField);
  const { userProfile, principal } = useAuth();

  const displayName =
    userProfile?.displayName ||
    (principal ? `${principal.slice(0, 8)}...` : "Farmer");

  return (
    <Layout>
      <div className="min-h-screen gradient-bg flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 min-w-0 md:ml-0 flex flex-col">
          {/* Dashboard Header Bar */}
          <div className="border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0 z-30">
            <div className="px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-3">
              {/* Spacer for mobile toggle button */}
              <div className="w-10 md:hidden shrink-0" aria-hidden="true" />

              <div className="mr-auto">
                <h1 className="text-lg font-bold text-white font-display leading-none">
                  FarmTech Dashboard
                </h1>
                <p className="text-xs text-white/40 mt-0.5">
                  IoT Sensor Monitoring
                </p>
              </div>

              <FieldSelector
                selected={selectedField}
                onChange={setSelectedField}
              />

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsLive((l) => !l)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-smooth border ${
                    isLive
                      ? "bg-green-500/15 border-green-500/30 text-green-400 hover:bg-green-500/25"
                      : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                  }`}
                  data-ocid="live-toggle"
                  aria-label={
                    isLive ? "Pause live updates" : "Resume live updates"
                  }
                >
                  {isLive ? (
                    <Wifi className="w-3.5 h-3.5" />
                  ) : (
                    <WifiOff className="w-3.5 h-3.5" />
                  )}
                  {isLive ? "Live" : "Paused"}
                </button>

                <div className="flex items-center gap-1.5 text-xs text-white/40">
                  <RefreshCw
                    className={`w-3 h-3 ${isLive ? "animate-spin" : ""}`}
                    style={{ animationDuration: "3s" }}
                  />
                  <span className="hidden sm:inline">Synced </span>
                  <span className="font-mono">
                    {formatTime(reading.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable dashboard content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Welcome Banner */}
            <WelcomeBanner displayName={displayName} />

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* LEFT — Sensor Feed */}
              <div className="lg:col-span-3">
                <SensorFeed
                  reading={reading}
                  previousReading={previousReading}
                  isLive={isLive}
                />
              </div>

              {/* CENTER — Crop Health + Weather */}
              <div className="lg:col-span-6 flex flex-col gap-5">
                <CropHealthPanel fieldId={selectedField} />
                <WeatherWidget />
              </div>

              {/* RIGHT — Alerts */}
              <div className="lg:col-span-3">
                <AlertsPanel />
              </div>
            </div>

            {/* Row 2 — Smart Decisions + Voice Assistant */}
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <SmartDecisionWidget />
              <VoiceAssistantWidget />
            </div>

            {/* Row 3 — Hyperlocal Weather + IoT Automation */}
            <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
              <HyperLocalWeatherWidget />
              <IoTAutomationPanel />
            </div>

            {/* Stats bar */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {(
                [
                  {
                    label: "Active Sensors",
                    value: "12",
                    sub: "All online",
                    color: "text-primary",
                  },
                  {
                    label: "Disease Detection",
                    value: "95%",
                    sub: "Accuracy rate",
                    color: "text-accent",
                  },
                  {
                    label: "Yield Forecast",
                    value: "+32%",
                    sub: "vs last season",
                    color: "text-primary",
                  },
                  {
                    label: "Battery Status",
                    value: "94%",
                    sub: "Solar charged",
                    color: "text-secondary-foreground",
                  },
                ] as const
              ).map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card text-center py-4"
                  data-ocid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <div
                    className={`text-2xl font-bold font-display ${stat.color}`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white/70 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-white/40 mt-0.5">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick actions */}
            <div className="mt-5 glass-card flex flex-wrap gap-3 items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">
                  Ready to act on your data?
                </p>
                <p className="text-xs text-white/50 mt-0.5">
                  Generate AI-powered recommendations for your fields
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white/80 hover:bg-white/10 bg-transparent"
                  data-ocid="btn-generate-report"
                >
                  Generate Report
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-ocid="btn-get-recommendations"
                >
                  Get AI Recommendations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
