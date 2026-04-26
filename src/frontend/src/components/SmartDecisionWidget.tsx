import {
  ArrowRight,
  Coins,
  Sprout,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

interface DecisionCard {
  label: string;
  impact: string;
  reason: string;
  positive: boolean;
}

const PRIMARY_DECISION: DecisionCard = {
  label: "Irrigate Field 1 Today",
  impact: "+₹2,500 more yield",
  reason:
    "Soil moisture is at 34% — optimal irrigation now adds 10% to your yield",
  positive: true,
};

const DELAY_WARNING: DecisionCard = {
  label: "If you delay 2 days...",
  impact: "-₹1,200 potential loss",
  reason: "Moisture drops further, stress on crop roots — yield suffers",
  positive: false,
};

const MINI_DECISIONS = [
  {
    icon: Sprout,
    label: "Spray fertilizer tomorrow",
    impact: "+₹800",
    positive: true,
    ocid: "mini-decision-spray",
  },
  {
    icon: Coins,
    label: "Harvest in 5 days",
    impact: "₹42,000 expected",
    positive: true,
    ocid: "mini-decision-harvest",
  },
];

export function SmartDecisionWidget() {
  const [acted, setActed] = useState(false);

  return (
    <div className="glass-card h-full" data-ocid="smart-decision-widget">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Coins className="w-5 h-5 text-accent" />
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          Your Best Move Today
        </span>
        <span className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent/20 text-accent border border-accent/30">
          AI Powered
        </span>
      </div>

      {/* Primary recommendation */}
      <div
        className="relative rounded-2xl overflow-hidden mb-4 p-5 border border-green-500/30"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,197,94,0.12) 0%, rgba(16,185,129,0.08) 100%)",
        }}
        data-ocid="primary-decision-card"
      >
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-white leading-tight">
              {PRIMARY_DECISION.label}
            </p>
            <p className="text-2xl font-bold text-green-400 font-display mt-0.5">
              {PRIMARY_DECISION.impact}
            </p>
          </div>
        </div>
        <p className="text-xs text-white/60 leading-relaxed mb-4">
          {PRIMARY_DECISION.reason}
        </p>
        <button
          type="button"
          onClick={() => setActed(true)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-smooth ${
            acted
              ? "bg-green-600/30 border border-green-500/40 text-green-300 cursor-default"
              : "bg-green-600/80 hover:bg-green-600 text-white border border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]"
          }`}
          disabled={acted}
          data-ocid="btn-do-it-now"
        >
          {acted ? "✓ Marked as done" : "Do It Now"}
          {!acted && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>

      {/* Delay warning */}
      <div
        className="rounded-xl p-4 border border-amber-500/25 mb-4"
        style={{ background: "rgba(245,158,11,0.07)" }}
        data-ocid="delay-warning-card"
      >
        <div className="flex items-center gap-2 mb-1">
          <TrendingDown className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <p className="text-sm font-semibold text-amber-300">
            {DELAY_WARNING.label}
          </p>
          <p className="ml-auto text-base font-bold text-amber-400">
            {DELAY_WARNING.impact}
          </p>
        </div>
        <p className="text-xs text-white/50 leading-relaxed pl-6">
          {DELAY_WARNING.reason}
        </p>
      </div>

      {/* Mini decision row */}
      <div className="grid grid-cols-2 gap-3">
        {MINI_DECISIONS.map((d) => {
          const Icon = d.icon;
          return (
            <div
              key={d.label}
              className="rounded-xl p-3 border border-white/10 bg-white/5 hover:bg-white/8 transition-smooth"
              data-ocid={d.ocid}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-accent" />
                <span className="text-[10px] font-bold text-accent">
                  {d.impact}
                </span>
              </div>
              <p className="text-xs text-white/70 leading-snug">{d.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
