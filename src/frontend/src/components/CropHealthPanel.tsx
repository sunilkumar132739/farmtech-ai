import { Badge } from "@/components/ui/badge";
import { Clock, Sprout, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface CropHealthData {
  cropName: string;
  fieldLabel: string;
  healthScore: number;
  status: "Excellent" | "Good" | "Fair" | "Poor";
  lastUpdated: string;
  issues: string[];
  recommendation: string;
}

interface Props {
  fieldId: string;
}

const FIELD_DATA: Record<string, CropHealthData> = {
  "field-a": {
    cropName: "Wheat",
    fieldLabel: "Field A – North Block",
    healthScore: 87,
    status: "Excellent",
    lastUpdated: "2 min ago",
    issues: [],
    recommendation:
      "Optimal growing conditions. Continue current irrigation schedule.",
  },
  "field-b": {
    cropName: "Rice",
    fieldLabel: "Field B – South Block",
    healthScore: 63,
    status: "Fair",
    lastUpdated: "5 min ago",
    issues: ["Mild nitrogen deficiency"],
    recommendation: "Apply 20 kg/acre urea within 3 days for best results.",
  },
  "field-c": {
    cropName: "Sugarcane",
    fieldLabel: "Field C – East Plot",
    healthScore: 41,
    status: "Poor",
    lastUpdated: "8 min ago",
    issues: ["pH imbalance", "Low potassium"],
    recommendation:
      "Immediate soil amendment required. Apply lime and MOP fertilizer.",
  },
};

function ScoreRing({ score, status }: { score: number; status: string }) {
  const [displayScore, setDisplayScore] = useState(0);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const target = score;
    const duration = 1200;
    const startTime = performance.now();
    let frame: number;

    const animate = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setDisplayScore(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [score]);

  const offset = circumference - (displayScore / 100) * circumference;
  const color = score >= 80 ? "#4ade80" : score >= 50 ? "#fbbf24" : "#f87171";

  const statusColor =
    status === "Excellent"
      ? "bg-green-500/20 text-green-400 border-green-500/30"
      : status === "Good"
        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
        : status === "Fair"
          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
          : "bg-red-500/20 text-red-400 border-red-500/30";

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex items-center justify-center w-32 h-32">
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
              transition: "stroke-dashoffset 0.05s linear, stroke 0.6s ease",
              filter: `drop-shadow(0 0 8px ${color}60)`,
            }}
          />
        </svg>
        <div className="z-10 text-center">
          <div className="text-3xl font-bold text-white">{displayScore}%</div>
          <div className="text-xs text-white/50">Health</div>
        </div>
      </div>
      <Badge
        className={`border text-xs font-semibold px-3 py-1 ${statusColor}`}
      >
        {status}
      </Badge>
    </div>
  );
}

export function CropHealthPanel({ fieldId }: Props) {
  const data = FIELD_DATA[fieldId] ?? FIELD_DATA["field-a"];

  return (
    <div className="glass-card h-full" data-ocid="crop-health-panel">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Sprout className="w-4 h-4 text-green-400" />
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          Crop Health
        </span>
      </div>

      <div className="flex gap-6 items-start">
        <ScoreRing score={data.healthScore} status={data.status} />

        <div className="flex-1 min-w-0 space-y-3">
          <div>
            <div className="text-xl font-bold text-white font-display">
              {data.cropName}
            </div>
            <div className="text-xs text-white/50 mt-0.5">
              {data.fieldLabel}
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-white/40">
            <Clock className="w-3 h-3" />
            <span>Updated {data.lastUpdated}</span>
          </div>

          {data.issues.length > 0 ? (
            <div className="space-y-1">
              <p className="text-xs text-white/50 font-semibold uppercase tracking-wider">
                Issues
              </p>
              {data.issues.map((issue) => (
                <div
                  key={issue}
                  className="flex items-center gap-1.5 text-xs text-amber-400"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400 flex-shrink-0" />
                  {issue}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs text-green-400">
              <TrendingUp className="w-3 h-3" />
              <span>All parameters optimal</span>
            </div>
          )}
        </div>
      </div>

      {/* Recommendation */}
      <div className="mt-5 p-3 rounded-xl bg-white/5 border border-white/10">
        <p className="text-xs text-white/40 font-semibold uppercase tracking-wider mb-1">
          AI Recommendation
        </p>
        <p className="text-sm text-white/75 leading-relaxed">
          {data.recommendation}
        </p>
      </div>
    </div>
  );
}
