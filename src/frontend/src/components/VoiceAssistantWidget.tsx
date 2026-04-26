import { Mic, MicOff, Volume2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../types";

interface VoiceScript {
  lang: string;
  greeting: string;
  water: string;
  weather: string;
  market: string;
}

const VOICE_SCRIPTS: Record<Language, VoiceScript> = {
  hi: {
    lang: "hi-IN",
    greeting:
      "Kal paani dena hai. Aaj fertilizer spray karna hai. Mausam achha rahega.",
    water:
      "Aaj sham se pehle khait mein paani dena hai. Mitti ki nami 34% hai.",
    weather: "Aaj dopahar 2:30 baje barish hogi. Kaati hui fasal ko dhak do.",
    market:
      "Aaj gehu ka sabse achha daam 2200 rupaye per quintal hai. Abhi becho.",
  },
  pa: {
    lang: "pa-IN",
    greeting:
      "Kal pani dena hai. Aj fertilizer spray karna hai. Mausam changa rahega.",
    water:
      "Aj sham ton pehlan khait wich pani dena hai. Mitti di nami 34% hai.",
    weather: "Aj dopahar 2:30 waje menh padega. Kati hoi fasal nu dhak lo.",
    market:
      "Aj gehun da sabh ton changa bhaav 2200 rupaye per quintal hai. Hune vecho.",
  },
  en: {
    lang: "en-IN",
    greeting:
      "Tomorrow water your field. Today spray fertilizer. Weather will be good.",
    water:
      "Water your field today before evening. Soil moisture is at 34 percent.",
    weather: "Rain expected today at 2:30 PM. Cover your harvested grain now.",
    market: "Best wheat price today is 2200 rupees per quintal. Sell now.",
  },
  mr: {
    lang: "mr-IN",
    greeting:
      "Udya pani dya. Aaj fertilizer phavara karaa. Havaaman changale rahil.",
    water: "Aaj saayankaala pani dya. Maatitil olta 34% aahe.",
    weather: "Aaj duparhi 2:30 la paaoos yeil. Katlelya dhanyaala zaaka.",
    market: "Aaj ghevdyacha best bhaav 2200 rupaye pratee quintal aahe.",
  },
  kn: {
    lang: "kn-IN",
    greeting:
      "Naale neeru haki. Indu fertilizer spray madi. Havamana olledagiruttade.",
    water: "Indu saayanakala neeru haki. Bhumi teneta 34% ide.",
    weather:
      "Indu madyahna 2:30 ge maleya nirikshe ide. Kasidha dhanyava muri.",
    market: "Indu godhi uttama bele 2200 rupai pratee quintal ide.",
  },
  te: {
    lang: "te-IN",
    greeting:
      "Repu neellu ivvaali. Ee roju fertilizer spray cheyyali. Vaatagalam bagundutundi.",
    water: "Ee roju sandhya vela neellu ivvaali. Nela taarupu 34% undi.",
    weather:
      "Ee roju madhyaahnam 2:30 ki varsha raavachu. Kattu cheyyabadina panti kaapaadinchu.",
    market: "Ee roju godhuma vallabha dhara 2200 rupaayalu per quintal.",
  },
};

const LANG_LABELS: Record<Language, string> = {
  en: "English",
  hi: "हिन्दी",
  mr: "मराठी",
  kn: "ಕನ್ನಡ",
  te: "తెలుగు",
  pa: "ਪੰਜਾਬੀ",
};

interface QuickButton {
  id: "water" | "weather" | "market";
  emoji: string;
  label: string;
  ocid: string;
}

const QUICK_BUTTONS: QuickButton[] = [
  {
    id: "water",
    emoji: "💧",
    label: "Water advice",
    ocid: "voice-quick-water",
  },
  { id: "weather", emoji: "🌦", label: "Weather", ocid: "voice-quick-weather" },
  {
    id: "market",
    emoji: "💰",
    label: "Market price",
    ocid: "voice-quick-market",
  },
];

function speak(text: string, lang: string, onEnd: () => void) {
  if (!("speechSynthesis" in window)) {
    onEnd();
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.9;
  utter.onend = onEnd;
  utter.onerror = onEnd;
  window.speechSynthesis.speak(utter);
}

export function VoiceAssistantWidget() {
  const { language } = useLanguage();
  const [speaking, setSpeaking] = useState(false);
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  const script = VOICE_SCRIPTS[language] ?? VOICE_SCRIPTS.en;

  function handleMainTap() {
    if (speaking) {
      window.speechSynthesis?.cancel();
      setSpeaking(false);
      setActiveBtn(null);
      return;
    }
    setSpeaking(true);
    setActiveBtn("main");
    speak(script.greeting, script.lang, () => {
      setSpeaking(false);
      setActiveBtn(null);
    });
  }

  function handleQuick(btn: QuickButton) {
    if (speaking) {
      window.speechSynthesis?.cancel();
      setSpeaking(false);
      setActiveBtn(null);
      return;
    }
    const text =
      btn.id === "water"
        ? script.water
        : btn.id === "weather"
          ? script.weather
          : script.market;
    setSpeaking(true);
    setActiveBtn(btn.id);
    speak(text, script.lang, () => {
      setSpeaking(false);
      setActiveBtn(null);
    });
  }

  const isSpeakingMain = speaking && activeBtn === "main";

  return (
    <div className="glass-card h-full" data-ocid="voice-assistant-widget">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Volume2 className="w-5 h-5 text-accent" />
        <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">
          Voice Assistant
        </span>
        <span className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/20 text-accent border border-accent/30">
          {LANG_LABELS[language]}
        </span>
      </div>

      {/* Main mic button */}
      <div className="flex flex-col items-center py-5">
        <button
          type="button"
          onClick={handleMainTap}
          aria-label={
            isSpeakingMain ? "Stop speaking" : "Tap to hear today's farm advice"
          }
          data-ocid="voice-main-mic"
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
            isSpeakingMain
              ? "bg-accent/30 border-2 border-accent/60 shadow-[0_0_30px_rgba(var(--accent)/0.4)]"
              : "bg-primary/30 border-2 border-primary/50 hover:bg-primary/45 hover:shadow-[0_0_24px_rgba(var(--primary)/0.35)]"
          }`}
        >
          {isSpeakingMain ? (
            <MicOff className="w-8 h-8 text-accent" />
          ) : (
            <Mic className="w-8 h-8 text-primary" />
          )}
          {isSpeakingMain && (
            <span className="absolute inset-0 rounded-full animate-ping border-2 border-accent opacity-50" />
          )}
        </button>
        <p className="mt-3 text-sm font-semibold text-white/80">
          {isSpeakingMain ? "Speaking..." : "Tap to hear today's advice"}
        </p>
        <p className="text-xs text-white/40 mt-0.5">
          Hear daily farm advice in your language
        </p>
      </div>

      {/* Quick listen buttons */}
      <div
        className="grid grid-cols-3 gap-2 mb-4"
        data-ocid="voice-quick-buttons"
      >
        {QUICK_BUTTONS.map((btn) => {
          const isActive = speaking && activeBtn === btn.id;
          return (
            <button
              key={btn.id}
              type="button"
              onClick={() => handleQuick(btn)}
              aria-label={btn.label}
              data-ocid={btn.ocid}
              className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border transition-smooth text-center ${
                isActive
                  ? "border-accent/50 bg-accent/15 text-accent"
                  : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <span className="text-xl leading-none">{btn.emoji}</span>
              <span className="text-[10px] font-medium leading-tight">
                {isActive ? "Speaking…" : btn.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Note */}
      <p className="text-center text-[10px] text-white/35 border-t border-white/8 pt-3">
        Works in Hindi &amp; Punjabi — Tap to listen
      </p>
    </div>
  );
}
