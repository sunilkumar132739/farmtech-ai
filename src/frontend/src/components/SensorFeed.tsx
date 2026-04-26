import { Droplets, FlaskConical, Leaf } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { SensorReading } from "../types";

interface Props {
  reading: SensorReading;
  previousReading: SensorReading;
  isLive: boolean;
}

interface AnimatedValueProps {
  value: number;
  previous: number;
  decimals?: number;
  suffix?: string;
}

function AnimatedValue({
  value,
  previous,
  decimals = 0,
  suffix = "",
}: AnimatedValueProps) {
  const [display, setDisplay] = useState(value);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const start = previous;
    const end = value;
    const duration = 800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = start + (end - start) * eased;
      setDisplay(+current.toFixed(decimals));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [value, previous, decimals]);

  return (
    <span>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function MoistureRing({
  value,
  previous,
}: { value: number; previous: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const start = previous;
    const end = value;
    const duration = 900;
    const startTime = performance.now();
    let frame: number;

    const animate = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setDisplayValue(start + (end - start) * eased);
      if (p < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, previous]);

  const offset = circumference - (displayValue / 100) * circumference;
  const color =
    displayValue > 70 ? "#60a5fa" : displayValue > 40 ? "#34d399" : "#f97316";

  return (
    <div className="relative flex items-center justify-center w-36 h-36 mx-auto">
      <svg
        className="absolute w-full h-full -rotate-90"
        viewBox="0 0 120 120"
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="10"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 0.1s ease, stroke 0.5s ease",
          }}
        />
      </svg>
      <div className="flex flex-col items-center z-10">
        <span className="text-2xl font-bold text-white">
          <AnimatedValue value={value} previous={previous} decimals={1} />%
        </span>
        <span className="text-xs text-white/60 mt-0.5">Moisture</span>
      </div>
    </div>
  );
}

function NPKBar({
  label,
  value,
  previous,
  max,
  color,
}: {
  label: string;
  value: number;
  previous: number;
  max: number;
  color: string;
}) {
  const [displayWidth, setDisplayWidth] = useState((previous / max) * 100);

  useEffect(() => {
    const start = (previous / max) * 100;
    const end = (value / max) * 100;
    const duration = 800;
    const startTime = performance.now();
    let frame: number;

    const animate = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setDisplayWidth(start + (end - start) * eased);
      if (p < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, previous, max]);

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
          {label}
        </span>
        <span className="text-sm font-bold text-white">
          <AnimatedValue value={value} previous={previous} decimals={1} /> mg/kg
        </span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${displayWidth}%`,
            background: color,
            transition: "width 0.1s ease",
          }}
        />
      </div>
    </div>
  );
}

function PHGauge({ value, previous }: { value: number; previous: number }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const start = previous;
    const end = value;
    const duration = 900;
    const startTime = performance.now();
    let frame: number;

    const animate = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setDisplayValue(+(start + (end - start) * eased).toFixed(2));
      if (p < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, previous]);

  const percent = (displayValue / 14) * 100;
  const phColor =
    displayValue < 5.5
      ? "#f97316"
      : displayValue < 7
        ? "#34d399"
        : displayValue < 8
          ? "#ffd700"
          : "#f43f5e";

  const phLabel =
    displayValue < 5.5 ? "Acidic" : displayValue < 7.5 ? "Neutral" : "Alkaline";

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-baseline">
        <span className="text-3xl font-bold text-white">
          {displayValue.toFixed(1)}
        </span>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{ background: `${phColor}30`, color: phColor }}
        >
          {phLabel}
        </span>
      </div>
      <div
        className="h-3 rounded-full overflow-hidden"
        style={{
          background:
            "linear-gradient(to right, #f43f5e, #f97316, #ffd700, #34d399, #60a5fa, #a78bfa)",
        }}
      >
        <div
          className="h-full w-1 rounded-full bg-white shadow-lg"
          style={{
            marginLeft: `calc(${percent}% - 2px)`,
            transition: "margin-left 0.1s ease",
          }}
        />
      </div>
      <div className="flex justify-between text-[10px] text-white/40">
        <span>0</span>
        <span>3.5</span>
        <span>7</span>
        <span>10.5</span>
        <span>14</span>
      </div>
    </div>
  );
}

export function SensorFeed({ reading, previousReading, isLive }: Props) {
  return (
    <div className="space-y-4">
      {/* Section header */}
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: isLive ? "#4ade80" : "#6b7280",
            boxShadow: isLive ? "0 0 8px #4ade80" : "none",
            animation: isLive ? "pulse 2s infinite" : "none",
          }}
        />
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          Live Sensor Feed
        </span>
        {isLive && (
          <span className="text-xs text-green-400 font-mono ml-auto opacity-80">
            LIVE
          </span>
        )}
      </div>

      {/* Soil Moisture Card */}
      <div className="glass-card" data-ocid="sensor-moisture-card">
        <div className="flex items-center gap-2 mb-4">
          <Droplets className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-semibold text-white/80">
            Soil Moisture
          </span>
        </div>
        <MoistureRing
          value={reading.moisture}
          previous={previousReading.moisture}
        />
        <p className="text-center text-xs text-white/50 mt-3">
          Optimal range: 40–75%
        </p>
      </div>

      {/* NPK Card */}
      <div className="glass-card" data-ocid="sensor-npk-card">
        <div className="flex items-center gap-2 mb-4">
          <Leaf className="w-4 h-4 text-emerald-400" />
          <span className="text-sm font-semibold text-white/80">
            NPK Levels
          </span>
        </div>
        <div className="space-y-4">
          <NPKBar
            label="N – Nitrogen"
            value={reading.nitrogen}
            previous={previousReading.nitrogen}
            max={80}
            color="linear-gradient(90deg, #34d399, #10b981)"
          />
          <NPKBar
            label="P – Phosphorus"
            value={reading.phosphorus}
            previous={previousReading.phosphorus}
            max={60}
            color="linear-gradient(90deg, #a78bfa, #7c3aed)"
          />
          <NPKBar
            label="K – Potassium"
            value={reading.potassium}
            previous={previousReading.potassium}
            max={90}
            color="linear-gradient(90deg, #fb923c, #ea580c)"
          />
        </div>
      </div>

      {/* pH Card */}
      <div className="glass-card" data-ocid="sensor-ph-card">
        <div className="flex items-center gap-2 mb-4">
          <FlaskConical className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-semibold text-white/80">pH Level</span>
        </div>
        <PHGauge value={reading.ph} previous={previousReading.ph} />
      </div>
    </div>
  );
}
