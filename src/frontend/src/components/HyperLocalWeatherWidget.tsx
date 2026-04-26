import {
  AlertTriangle,
  Cloud,
  CloudRain,
  Droplets,
  MapPin,
  Sun,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";

interface WeatherAlert {
  icon: string;
  label: string;
  severity: "danger" | "warning" | "caution";
  time: string;
  action: string;
  ocid: string;
}

const ALERTS: WeatherAlert[] = [
  {
    icon: "🌧️",
    label: "Rain Expected 2:30 PM – 4:00 PM",
    severity: "warning",
    time: "RAIN ALERT",
    action: "Cover harvested grain NOW",
    ocid: "alert-rain",
  },
  {
    icon: "❄️",
    label: "Frost Warning Tonight 11 PM — 2°C",
    severity: "danger",
    time: "FROST WARNING",
    action: "Protect sensitive crops",
    ocid: "alert-frost",
  },
  {
    icon: "🔥",
    label: "Heat Stress 12 PM–3 PM, Max 41°C",
    severity: "caution",
    time: "HEAT ALERT",
    action: "Avoid spraying in this window",
    ocid: "alert-heat",
  },
];

const SEVERITY_STYLES = {
  danger: "border-red-500/40 bg-red-500/10 text-red-300",
  warning: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  caution: "border-orange-500/40 bg-orange-500/10 text-orange-300",
};

const BADGE_STYLES = {
  danger: "bg-red-500/25 text-red-300 border border-red-500/40",
  warning: "bg-amber-500/25 text-amber-300 border border-amber-500/40",
  caution: "bg-orange-500/25 text-orange-300 border border-orange-500/40",
};

interface ForecastDay {
  day: string;
  emoji: string;
  high: number;
  low: number;
  label: string;
}

const FORECAST: ForecastDay[] = [
  { day: "Today", emoji: "🌧️", high: 28, low: 18, label: "Rain" },
  { day: "Tomorrow", emoji: "⛅", high: 32, low: 20, label: "Cloudy" },
  { day: "Day 3", emoji: "☀️", high: 35, low: 22, label: "Sunny" },
];

export function HyperLocalWeatherWidget() {
  return (
    <div className="glass-card h-full" data-ocid="hyperlocal-weather-widget">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-4 h-4 text-accent" />
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          Hyperlocal Weather
        </span>
        <div className="ml-auto flex items-center gap-1 text-[10px] text-white/40">
          <MapPin className="w-3 h-3" />
          <span>Ludhiana, Punjab</span>
        </div>
      </div>

      {/* Current conditions */}
      <div className="flex items-center justify-between mb-5 p-4 rounded-2xl bg-white/5 border border-white/10">
        <div>
          <div className="text-4xl font-bold text-white font-display">
            28°<span className="text-xl text-white/40">C</span>
          </div>
          <div className="text-xs text-white/60 mt-1">Partly Cloudy</div>
        </div>
        <Cloud className="w-12 h-12 text-blue-300" strokeWidth={1} />
        <div className="space-y-2 text-right">
          <div className="flex items-center gap-1.5 justify-end text-xs text-white/60">
            <Droplets className="w-3.5 h-3.5 text-blue-400" />
            <span>65% humidity</span>
          </div>
          <div className="flex items-center gap-1.5 justify-end text-xs text-white/60">
            <Wind className="w-3.5 h-3.5 text-cyan-400" />
            <span>12 km/h wind</span>
          </div>
          <div className="flex items-center gap-1.5 justify-end text-xs text-white/60">
            <Thermometer className="w-3.5 h-3.5 text-orange-400" />
            <span>Feels 30°C</span>
          </div>
        </div>
      </div>

      {/* Urgent alerts */}
      <div className="mb-5" data-ocid="weather-urgent-alerts">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            Urgent Alerts
          </p>
        </div>
        <div className="space-y-2">
          {ALERTS.map((alert) => (
            <div
              key={alert.ocid}
              className={`rounded-xl p-3 border ${SEVERITY_STYLES[alert.severity]} transition-smooth`}
              data-ocid={alert.ocid}
            >
              <div className="flex items-center gap-2">
                <span className="text-base leading-none">{alert.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${BADGE_STYLES[alert.severity]}`}
                    >
                      {alert.time}
                    </span>
                    <span className="text-xs font-medium truncate">
                      {alert.label}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white/90">
                    👉 {alert.action}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Day Forecast */}
      <div className="mb-5" data-ocid="weather-forecast">
        <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wider mb-2">
          3-Day Forecast
        </p>
        <div className="grid grid-cols-3 gap-2">
          {FORECAST.map((day) => (
            <div
              key={day.day}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-center"
              data-ocid={`forecast-${day.day.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="text-[10px] text-white/50 mb-1.5 font-medium">
                {day.day}
              </div>
              <div className="text-xl mb-1">{day.emoji}</div>
              <div className="text-xs font-bold text-white">
                {day.high}°
                <span className="text-white/40 font-normal">/{day.low}°</span>
              </div>
              <div className="text-[10px] text-white/40 mt-0.5">
                {day.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best spray time tip */}
      <div
        className="flex items-start gap-3 p-3 rounded-xl border border-green-500/30 bg-green-500/10"
        data-ocid="spray-time-tip"
      >
        <Sun className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold text-green-400">
            Best time to spray today
          </p>
          <p className="text-xs text-white/60 mt-0.5">
            6 AM – 9 AM — before heat stress. Avoid 12–3 PM window.
          </p>
        </div>
      </div>
    </div>
  );
}
