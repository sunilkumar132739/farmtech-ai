import { useCallback, useEffect, useState } from "react";
import type { SensorReading, WeatherData } from "../types";

function clamp(val: number, min: number, max: number) {
  return Math.max(min, Math.min(max, val));
}

function jitter(value: number, range: number): number {
  return +(value + (Math.random() - 0.5) * 2 * range).toFixed(2);
}

const INITIAL_READING: SensorReading = {
  id: "s1",
  timestamp: Date.now(),
  moisture: 62,
  nitrogen: 38,
  phosphorus: 25,
  potassium: 47,
  ph: 6.8,
  temperature: 28,
  fieldId: "field-a",
  fieldName: "Field A",
};

const INITIAL_WEATHER: WeatherData = {
  temperature: 28,
  humidity: 65,
  rainfall: 0,
  windSpeed: 12,
  forecast: "sunny",
  location: "Pune, Maharashtra",
  updatedAt: Date.now(),
};

export function useSensorSimulator(fieldId: string) {
  const [reading, setReading] = useState<SensorReading>({
    ...INITIAL_READING,
    fieldId,
    fieldName:
      fieldId === "field-a"
        ? "Field A"
        : fieldId === "field-b"
          ? "Field B"
          : "Field C",
  });
  const [previousReading, setPreviousReading] =
    useState<SensorReading>(reading);
  const [isLive, setIsLive] = useState(true);

  const tick = useCallback(() => {
    setReading((prev) => {
      setPreviousReading(prev);
      return {
        ...prev,
        timestamp: Date.now(),
        moisture: clamp(jitter(prev.moisture, 1.5), 20, 95),
        nitrogen: clamp(jitter(prev.nitrogen, 1.2), 5, 80),
        phosphorus: clamp(jitter(prev.phosphorus, 0.8), 5, 60),
        potassium: clamp(jitter(prev.potassium, 1.0), 10, 90),
        ph: clamp(jitter(prev.ph, 0.1), 4.5, 8.5),
        temperature: clamp(jitter(prev.temperature, 0.3), 15, 45),
      };
    });
  }, []);

  useEffect(() => {
    if (!isLive) return;
    const id = setInterval(tick, 2500);
    return () => clearInterval(id);
  }, [isLive, tick]);

  return { reading, previousReading, isLive, setIsLive };
}

export function useWeatherSimulator() {
  const [weather] = useState<WeatherData>(INITIAL_WEATHER);
  const forecasts: WeatherData["forecast"][] = ["sunny", "cloudy", "rainy"];

  const forecast3Day = [
    { day: "Today", temp: weather.temperature, condition: "sunny" as const },
    {
      day: "Tomorrow",
      temp: weather.temperature - 2,
      condition: "cloudy" as const,
    },
    { day: "Sat", temp: weather.temperature + 1, condition: "rainy" as const },
  ];

  return { weather, forecast3Day, forecasts };
}
