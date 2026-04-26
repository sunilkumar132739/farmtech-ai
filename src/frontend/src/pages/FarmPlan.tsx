import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bell,
  CheckCircle2,
  Circle,
  CloudRain,
  Droplets,
  Mic,
  Scissors,
  Sprout,
  Sun,
  Volume2,
} from "lucide-react";
import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types";

interface Task {
  id: string;
  icon: React.ElementType;
  time: string;
  labelKey: "taskIrrigation" | "taskSpray" | "taskHarvest";
  voiceHi: string;
  voicePa: string;
  priority: "high" | "medium" | "low";
  profit?: string;
}

const TASKS: Task[] = [
  {
    id: "t1",
    icon: Droplets,
    time: "6:00 AM",
    labelKey: "taskIrrigation",
    voiceHi:
      "Kal paani dena hai. Khet mein pani do. Paidavar das pratishat badhegi.",
    voicePa: "Khet vich paani deo. Paidavar das pratishat vadhegi.",
    priority: "high",
    profit: "Yield +10% (≈ ₹2,500)",
  },
  {
    id: "t2",
    icon: Sprout,
    time: "8:30 AM",
    labelKey: "taskSpray",
    voiceHi:
      "Aaj fertilizer spray karna hai. Teen aur chaar kataaron mein khaad ka chhidakaav karo.",
    voicePa: "Aaj khad da chhidkaav karo. Kaataaran teen te chaar.",
    priority: "medium",
  },
  {
    id: "t3",
    icon: Scissors,
    time: "11:00 AM",
    labelKey: "taskHarvest",
    voiceHi: "Section bee mein gehoon kaato. Phasal taiyaar hai.",
    voicePa: "Section bee vich kaanak vado. Fasal taiyaar hai.",
    priority: "low",
    profit: "Income +₹18,000",
  },
];

const WEEKLY_PLAN = [
  { day: "Mon", tasks: ["Irrigation"], today: false, done: true },
  { day: "Tue", tasks: ["Spray"], today: true, done: false },
  { day: "Wed", tasks: ["Soil Test"], today: false, done: false },
  { day: "Thu", tasks: ["Harvest"], today: false, done: false },
  { day: "Fri", tasks: ["Market Visit"], today: false, done: false },
  { day: "Sat", tasks: ["Rest 🙏"], today: false, done: false },
  { day: "Sun", tasks: ["Planning"], today: false, done: false },
];

const WEATHER = [
  { day: "Today", icon: Sun, label: "Sunny 34°C", color: "text-accent" },
  {
    day: "Tomorrow",
    icon: CloudRain,
    label: "Rain 28°C",
    color: "text-blue-300",
  },
  { day: "Day 3", icon: Sun, label: "Sunny 32°C", color: "text-accent" },
];

const priorityColors: Record<string, string> = {
  high: "bg-red-500/20 text-red-400",
  medium: "bg-accent/20 text-accent",
  low: "bg-primary/20 text-primary",
};

const langMap: Record<Language, string> = {
  hi: "hi-IN",
  pa: "pa-IN",
  en: "en-IN",
  mr: "mr-IN",
  kn: "kn-IN",
  te: "te-IN",
};

function speakText(text: string, lang: Language) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = langMap[lang] ?? "hi-IN";
  window.speechSynthesis.speak(u);
}

export default function FarmPlan() {
  const { t, language } = useLanguage();
  const [done, setDone] = useState<Set<string>>(new Set());
  const [speaking, setSpeaking] = useState<string | null>(null);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function toggle(id: string) {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function handleSpeak(task: Task) {
    const text = language === "pa" ? task.voicePa : task.voiceHi;
    speakText(text, language);
    setSpeaking(task.id);
    setTimeout(() => setSpeaking(null), 4000);
  }

  function handleVoiceAssistant() {
    const text =
      language === "pa"
        ? "Kal paani dena hai. Aaj fertilizer spray karna hai."
        : "Kal paani dena hai. Aaj fertilizer spray karna hai.";
    speakText(text, language);
    setSpeaking("assistant");
    setTimeout(() => setSpeaking(null), 5000);
  }

  const completedCount = done.size;

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-4">
            <Sun className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              {t.goodMorning}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
            {t.farmPlanTitle}
          </h1>
          <p className="text-muted-foreground mb-4">{today}</p>
          {/* Advice banner */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent/20 border border-accent/40 text-accent font-semibold text-base">
            💰 {t.todayAdvice}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {/* Morning Tasks */}
          <Card
            className="glass border-white/10 md:col-span-2"
            data-ocid="tasks-card"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Bell className="w-4 h-4 text-accent" />
                  {t.morningTasks}
                </CardTitle>
                <Badge className="bg-primary/20 text-primary border border-primary/30">
                  {completedCount}/{TASKS.length} done
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {TASKS.map((task) => {
                const isDone = done.has(task.id);
                const isSpeaking = speaking === task.id;
                return (
                  <div
                    key={task.id}
                    className={`rounded-xl p-4 border transition-smooth ${isDone ? "border-primary/30 bg-primary/5 opacity-70" : "border-white/15 bg-white/5"}`}
                    data-ocid={`task-${task.id}`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        onClick={() => toggle(task.id)}
                        aria-label={
                          isDone ? "Mark incomplete" : "Mark complete"
                        }
                        className="mt-0.5 shrink-0"
                        data-ocid={`task-check-${task.id}`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        ) : (
                          <Circle className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <task.icon className="w-4 h-4 text-accent shrink-0" />
                          <p
                            className={`font-medium text-sm ${isDone ? "line-through text-muted-foreground" : "text-foreground"}`}
                          >
                            {t[task.labelKey]}
                          </p>
                          <Badge
                            className={`text-xs ${priorityColors[task.priority]}`}
                          >
                            {task.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Bell className="w-3 h-3" />
                            {task.time}
                          </span>
                          {task.profit && (
                            <span className="text-xs text-accent font-medium">
                              💰 {task.profit}
                            </span>
                          )}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`shrink-0 p-2 h-auto rounded-lg transition-smooth ${isSpeaking ? "text-accent bg-accent/10" : "text-muted-foreground hover:text-accent hover:bg-accent/10"}`}
                        onClick={() => handleSpeak(task)}
                        aria-label={t.listenInstruction}
                        data-ocid={`listen-task-${task.id}`}
                      >
                        <Volume2 className="w-4 h-4" />
                        <span className="text-xs ml-1">
                          {isSpeaking ? "..." : t.listenInstruction}
                        </span>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Weather */}
          <Card className="glass border-white/10" data-ocid="weather-mini-card">
            <CardHeader>
              <CardTitle className="text-foreground text-sm flex items-center gap-2">
                <Sun className="w-4 h-4 text-accent" />
                3-Day Weather
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {WEATHER.map((w) => (
                <div
                  key={w.day}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-muted-foreground">{w.day}</span>
                  <div className="flex items-center gap-2">
                    <w.icon className={`w-4 h-4 ${w.color}`} />
                    <span className="text-foreground">{w.label}</span>
                  </div>
                </div>
              ))}
              <div className="mt-2 pt-3 border-t border-white/10">
                <div className="rounded-lg bg-white/5 border border-white/15 p-3">
                  <p className="text-xs text-blue-300 font-medium">
                    🌧 Rain expected tomorrow 2–4 PM. Delay spraying to Day 3.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Plan Grid */}
        <Card
          className="glass border-white/10 mb-6"
          data-ocid="weekly-plan-card"
        >
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Bell className="w-4 h-4 text-accent" />
              This Week's Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {WEEKLY_PLAN.map((day) => (
                <div
                  key={day.day}
                  className={`rounded-xl p-3 text-center border transition-smooth ${
                    day.today
                      ? "bg-accent/20 border-accent/40"
                      : day.done
                        ? "bg-primary/10 border-primary/30"
                        : "bg-white/5 border-white/10"
                  }`}
                  data-ocid={`week-day-${day.day.toLowerCase()}`}
                >
                  <p
                    className={`text-xs font-bold mb-2 ${day.today ? "text-accent" : day.done ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {day.day}
                  </p>
                  {day.tasks.map((task) => (
                    <p
                      key={task}
                      className="text-xs text-foreground/80 leading-snug"
                    >
                      {task}
                    </p>
                  ))}
                  {day.done && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary mx-auto mt-1.5" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Voice Assistant */}
        <Card
          className="glass border-accent/30"
          data-ocid="voice-assistant-card"
        >
          <CardContent className="py-8">
            <div className="flex flex-col items-center text-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                <Volume2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-1">
                  {t.voiceAssistant}
                </h3>
                <p className="text-muted-foreground text-sm">{t.tapToListen}</p>
              </div>
              <button
                type="button"
                onClick={handleVoiceAssistant}
                className={`w-20 h-20 rounded-full flex items-center justify-center transition-smooth border-2 ${
                  speaking === "assistant"
                    ? "bg-accent border-accent animate-pulse"
                    : "bg-accent/20 border-accent/40 hover:bg-accent/30 hover:border-accent/60"
                }`}
                aria-label="Tap to hear today's advice"
                data-ocid="voice-assistant-btn"
              >
                <Mic
                  className={`w-8 h-8 ${speaking === "assistant" ? "text-accent-foreground" : "text-accent"}`}
                />
              </button>
              <div className="rounded-xl bg-white/5 border border-white/15 px-5 py-3 max-w-sm">
                <p className="text-sm text-foreground/80 italic">
                  {language === "pa"
                    ? '"Kal paani dena hai. Aaj fertilizer spray karna hai."'
                    : '"Kal paani dena hai. Aaj fertilizer spray karna hai."'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {speaking === "assistant"
                    ? "🔊 Speaking..."
                    : "Tap button to play"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
