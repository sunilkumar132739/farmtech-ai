import {
  Cloud,
  CloudRain,
  Droplets,
  MapPin,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";
import type { WeatherData } from "../types";

interface ForecastDay {
  day: string;
  temp: number;
  condition: WeatherData["forecast"];
}

const WEATHER: WeatherData = {
  temperature: 28,
  humidity: 65,
  rainfall: 0,
  windSpeed: 12,
  forecast: "sunny",
  location: "Pune, Maharashtra",
  updatedAt: Date.now(),
};

const FORECAST_3DAY: ForecastDay[] = [
  { day: "Today", temp: 28, condition: "sunny" },
  { day: "Fri", temp: 26, condition: "cloudy" },
  { day: "Sat", temp: 23, condition: "rainy" },
];

function WeatherIcon({
  condition,
  size = 24,
}: { condition: WeatherData["forecast"]; size?: number }) {
  const props = { size, strokeWidth: 1.5 };
  if (condition === "sunny")
    return (
      <Sun
        {...props}
        className="text-yellow-400"
        style={{ filter: "drop-shadow(0 0 8px #fbbf2480)" }}
      />
    );
  if (condition === "cloudy")
    return <Cloud {...props} className="text-blue-300" />;
  if (condition === "rainy")
    return <CloudRain {...props} className="text-blue-400" />;
  return <Cloud {...props} className="text-white/60" />;
}

function ConditionLabel({ condition }: { condition: WeatherData["forecast"] }) {
  const map: Record<WeatherData["forecast"], string> = {
    sunny: "Sunny",
    cloudy: "Partly Cloudy",
    rainy: "Rainy",
    stormy: "Stormy",
  };
  return <span>{map[condition]}</span>;
}

export function WeatherWidget() {
  return (
    <div className="glass-card h-full" data-ocid="weather-widget">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Sun className="w-4 h-4 text-yellow-400" />
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          Weather
        </span>
        <div className="ml-auto flex items-center gap-1 text-xs text-white/40">
          <MapPin className="w-3 h-3" />
          <span>{WEATHER.location}</span>
        </div>
      </div>

      {/* Current conditions */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-5xl font-bold text-white font-display">
            {WEATHER.temperature}°
            <span className="text-2xl text-white/50">C</span>
          </div>
          <div className="text-sm text-white/60 mt-1">
            <ConditionLabel condition={WEATHER.forecast} />
          </div>
        </div>
        <WeatherIcon condition={WEATHER.forecast} size={56} />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
          <Droplets className="w-4 h-4 text-blue-400 mx-auto mb-1" />
          <div className="text-sm font-bold text-white">
            {WEATHER.humidity}%
          </div>
          <div className="text-[10px] text-white/40">Humidity</div>
        </div>
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
          <Wind className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
          <div className="text-sm font-bold text-white">
            {WEATHER.windSpeed}
          </div>
          <div className="text-[10px] text-white/40">km/h</div>
        </div>
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
          <Thermometer className="w-4 h-4 text-orange-400 mx-auto mb-1" />
          <div className="text-sm font-bold text-white">28°</div>
          <div className="text-[10px] text-white/40">Feels Like</div>
        </div>
      </div>

      {/* 3-day forecast */}
      <div>
        <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-2">
          3-Day Forecast
        </p>
        <div className="grid grid-cols-3 gap-2">
          {FORECAST_3DAY.map((day) => (
            <div
              key={day.day}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-[10px] text-white/50 mb-1.5 font-medium">
                {day.day}
              </div>
              <WeatherIcon condition={day.condition} size={18} />
              <div className="text-xs font-bold text-white mt-1.5">
                {day.temp}°
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
