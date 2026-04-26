import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  Activity,
  CheckCircle2,
  Cpu,
  Droplets,
  Flame,
  ThermometerSun,
} from "lucide-react";
import { useState } from "react";
import { ActivityEventType, createActor } from "../backend";

const SENSOR_STATUS = [
  {
    label: "Soil Moisture",
    icon: Droplets,
    color: "text-blue-400",
    ocid: "sensor-moisture",
  },
  {
    label: "Temperature",
    icon: ThermometerSun,
    color: "text-orange-400",
    ocid: "sensor-temp",
  },
  {
    label: "pH Sensor",
    icon: Flame,
    color: "text-purple-400",
    ocid: "sensor-ph",
  },
];

export function IoTAutomationPanel() {
  const [pumpOn, setPumpOn] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [threshold, setThreshold] = useState(35);
  const { actor } = useActor(createActor);

  function handlePumpToggle(checked: boolean) {
    setPumpOn(checked);
    // Fire-and-forget activity log
    actor
      ?.logActivity(
        ActivityEventType.IrrigationToggle,
        `Irrigation toggled: ${checked ? "ON" : "OFF"}`,
      )
      .catch(() => {});
  }

  return (
    <div className="glass-card h-full" data-ocid="iot-automation-panel">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Cpu className="w-5 h-5 text-primary" />
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          IoT Automation
        </span>
        <span className="ml-auto flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
          <Activity className="w-3 h-3" />
          Live
        </span>
      </div>

      {/* Pump Control */}
      <div
        className={`rounded-2xl p-4 border mb-4 transition-smooth ${
          pumpOn
            ? "border-blue-500/35 bg-blue-500/10"
            : "border-white/10 bg-white/5"
        }`}
        data-ocid="pump-control-row"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-smooth ${
                pumpOn
                  ? "bg-blue-500/25 border-blue-500/40"
                  : "bg-white/5 border-white/15"
              }`}
            >
              <Droplets
                className={`w-5 h-5 transition-smooth ${pumpOn ? "text-blue-400" : "text-white/40"}`}
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Water Pump</p>
              <p
                className={`text-xs font-medium ${pumpOn ? "text-blue-400" : "text-white/40"}`}
              >
                {pumpOn ? "Running" : "Stopped"}
              </p>
            </div>
          </div>
          <Switch
            checked={pumpOn}
            onCheckedChange={handlePumpToggle}
            aria-label="Toggle water pump"
            data-ocid="pump-toggle"
            className="data-[state=checked]:bg-blue-500"
          />
        </div>
        {pumpOn && (
          <p className="text-xs text-blue-300/80 pl-12 leading-relaxed">
            💧 Pump activated — estimated run time:{" "}
            <span className="font-semibold text-blue-300">30 mins</span>
          </p>
        )}
      </div>

      {/* Auto Irrigation */}
      <div
        className="rounded-2xl p-4 border border-white/10 bg-white/5 mb-4"
        data-ocid="auto-irrigation-section"
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-sm font-semibold text-white">Auto-Irrigation</p>
            <p className="text-xs text-white/40">Trigger on moisture drop</p>
          </div>
          <Switch
            checked={autoMode}
            onCheckedChange={setAutoMode}
            aria-label="Toggle auto irrigation"
            data-ocid="auto-mode-toggle"
            className="data-[state=checked]:bg-primary"
          />
        </div>
        {autoMode ? (
          <div className="space-y-3">
            <p className="text-xs text-green-400 leading-relaxed">
              ✓ Auto-irrigation will run when moisture drops below{" "}
              <span className="font-bold">{threshold}%</span>
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] text-white/50">
                <span>Moisture threshold</span>
                <span className="font-semibold text-white/80">
                  {threshold}%
                </span>
              </div>
              <Slider
                min={25}
                max={60}
                step={1}
                value={[threshold]}
                onValueChange={([v]) => setThreshold(v)}
                className="w-full"
                aria-label="Moisture threshold"
                data-ocid="threshold-slider"
              />
              <div className="flex justify-between text-[10px] text-white/30">
                <span>25%</span>
                <span>60%</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-xs text-white/40">
            Enable to set automatic moisture trigger
          </p>
        )}
      </div>

      {/* Sensor Status */}
      <div className="mb-4" data-ocid="sensor-status-section">
        <p className="text-[10px] text-white/40 font-semibold uppercase tracking-wider mb-2">
          Sensor Status
        </p>
        <div className="flex gap-2 flex-wrap">
          {SENSOR_STATUS.map((sensor) => {
            const Icon = sensor.icon;
            return (
              <div
                key={sensor.label}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-green-500/10 border border-green-500/25"
                data-ocid={sensor.ocid}
              >
                <Icon className={`w-3 h-3 ${sensor.color}`} />
                <span className="text-[10px] text-white/70 font-medium">
                  {sensor.label}
                </span>
                <CheckCircle2 className="w-3 h-3 text-green-400" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Last automated action */}
      <div
        className="rounded-xl p-3 bg-white/5 border border-white/8 text-xs text-white/50 leading-relaxed"
        data-ocid="last-action-log"
      >
        <span className="font-semibold text-white/70">Last action: </span>
        Pump ran for 25 mins at 6:00 AM — moisture restored to{" "}
        <span className="text-blue-400 font-semibold">62%</span>
      </div>
    </div>
  );
}
