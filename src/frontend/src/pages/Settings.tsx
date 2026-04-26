import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Link } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  Copy,
  Globe,
  Moon,
  Smartphone,
  Sun,
  User,
  Volume2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../hooks/useAuth";
import { languageNames } from "../i18n/translations";
import type { Language } from "../types";

const LANGUAGES: Language[] = ["en", "hi", "mr", "kn", "te", "pa"];

const LANGUAGE_FLAG: Record<Language, string> = {
  en: "🇬🇧",
  hi: "🇮🇳",
  mr: "🇮🇳",
  kn: "🇮🇳",
  te: "🇮🇳",
  pa: "🇮🇳",
};

function readDarkMode(): boolean {
  try {
    return localStorage.getItem("theme") === "dark";
  } catch {
    return false;
  }
}

function applyDarkMode(dark: boolean) {
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

interface NotifSetting {
  id: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  storageKey: string;
}

const NOTIF_SETTINGS: NotifSetting[] = [
  {
    id: "notifications",
    label: "Push Notifications",
    description: "Receive alerts for soil and weather events",
    icon: Bell,
    storageKey: "farmtech_notifications",
  },
  {
    id: "voiceAssist",
    label: "Voice Assistant",
    description: "Enable audio guidance for farm tasks",
    icon: Volume2,
    storageKey: "farmtech_voice_assist",
  },
  {
    id: "mobileOptimized",
    label: "Mobile Optimized View",
    description: "Simplified layout for smaller screens",
    icon: Smartphone,
    storageKey: "farmtech_mobile_optimized",
  },
];

function readStorageBoolean(key: string, fallback: boolean): boolean {
  try {
    const val = localStorage.getItem(key);
    if (val === null) return fallback;
    return val === "true";
  } catch {
    return fallback;
  }
}

export default function Settings() {
  const { language, setLanguage } = useLanguage();
  const { userProfile, principal } = useAuth();

  const [darkMode, setDarkMode] = useState<boolean>(readDarkMode);

  const [toggles, setToggles] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      NOTIF_SETTINGS.map((s) => [
        s.id,
        readStorageBoolean(s.storageKey, false),
      ]),
    ),
  );

  // Sync dark mode on mount
  useEffect(() => {
    applyDarkMode(darkMode);
  }, [darkMode]);

  function handleDarkModeToggle(checked: boolean) {
    setDarkMode(checked);
    applyDarkMode(checked);
    toast.success(`Switched to ${checked ? "Dark" : "Light"} mode`);
  }

  function handleToggle(id: string, key: string) {
    setToggles((prev) => {
      const next = !prev[id];
      try {
        localStorage.setItem(key, String(next));
      } catch {
        // ignore
      }
      return { ...prev, [id]: next };
    });
    toast.success("Setting saved");
  }

  function handleCopyPrincipal() {
    if (principal) {
      navigator.clipboard.writeText(principal).then(() => {
        toast.success("Principal ID copied");
      });
    }
  }

  const truncatedPrincipal = principal
    ? `${principal.slice(0, 12)}...${principal.slice(-6)}`
    : "Not connected";

  const displayName =
    userProfile?.displayName || userProfile?.fullName || "Farmer";

  return (
    <Layout>
      <div className="min-h-screen gradient-bg flex" data-ocid="settings-page">
        <Sidebar />

        <main className="flex-1 md:ml-64 px-4 sm:px-6 lg:px-8 py-8">
          {/* Mobile top spacing for menu button */}
          <div className="h-12 md:hidden" />

          {/* Header */}
          <div className="welcome-banner mb-6" data-ocid="settings-header">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <Sun className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="welcome-text">Settings</h1>
                <p className="welcome-subtitle">
                  Customize your FarmTech AI experience
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl space-y-5">
            {/* ── Appearance ── */}
            <section
              className="glass-card"
              data-ocid="settings-appearance"
              aria-labelledby="appearance-heading"
            >
              <div className="flex items-center gap-2 mb-5">
                <Moon className="w-4 h-4 text-accent" />
                <h2
                  id="appearance-heading"
                  className="text-sm font-semibold text-foreground"
                >
                  Appearance
                </h2>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                    {darkMode ? (
                      <Moon className="w-5 h-5 text-primary" />
                    ) : (
                      <Sun className="w-5 h-5 text-accent" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <Label
                      htmlFor="dark-mode-toggle"
                      className="text-sm font-semibold text-foreground cursor-pointer block"
                    >
                      Dark Mode
                    </Label>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {darkMode ? "Dark theme active" : "Light theme active"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Badge
                    variant="outline"
                    className={`text-xs font-semibold px-3 py-1 transition-smooth border ${
                      darkMode
                        ? "bg-primary/20 border-primary/40 text-primary"
                        : "bg-accent/20 border-accent/40 text-accent"
                    }`}
                    data-ocid="dark-mode-status"
                  >
                    {darkMode ? "Dark" : "Light"}
                  </Badge>
                  <Switch
                    id="dark-mode-toggle"
                    checked={darkMode}
                    onCheckedChange={handleDarkModeToggle}
                    className="shrink-0"
                    data-ocid="toggle-dark-mode"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10">
                <span className="text-xs text-muted-foreground">
                  💾 Preference is saved in your browser — persists across
                  sessions.
                </span>
              </div>
            </section>

            {/* ── Language ── */}
            <section
              className="glass-card"
              data-ocid="settings-language"
              aria-labelledby="language-heading"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-accent" />
                  <h2
                    id="language-heading"
                    className="text-sm font-semibold text-foreground"
                  >
                    Language
                  </h2>
                </div>
                <Badge
                  variant="outline"
                  className="text-xs border-primary/40 text-primary bg-primary/10"
                >
                  {LANGUAGE_FLAG[language]} {languageNames[language]}
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                Select your preferred language. All pages will update
                immediately.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => {
                      setLanguage(lang);
                      toast.success(
                        `Language changed to ${languageNames[lang]}`,
                      );
                    }}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth border flex items-center gap-2 ${
                      language === lang
                        ? "bg-primary/30 border-primary/50 text-primary shadow-sm"
                        : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                    }`}
                    data-ocid={`settings-lang-${lang}`}
                  >
                    <span>{LANGUAGE_FLAG[lang]}</span>
                    <span>{languageNames[lang]}</span>
                    {language === lang && (
                      <span className="ml-auto text-[10px] font-bold text-primary">
                        ✓
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* ── Account ── */}
            <section
              className="glass-card"
              data-ocid="settings-account"
              aria-labelledby="account-heading"
            >
              <div className="flex items-center gap-2 mb-5">
                <User className="w-4 h-4 text-accent" />
                <h2
                  id="account-heading"
                  className="text-sm font-semibold text-foreground"
                >
                  Account
                </h2>
              </div>

              <div className="space-y-3">
                {/* Display name row */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
                      Display Name
                    </p>
                    <p className="text-sm font-semibold text-foreground truncate mt-0.5">
                      {displayName}
                    </p>
                  </div>
                  <Link
                    to="/profile"
                    className="ml-3 flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-smooth shrink-0"
                    data-ocid="settings-edit-name"
                  >
                    Edit <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Principal row */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">
                      Principal ID
                    </p>
                    <p className="text-sm font-mono text-foreground truncate mt-0.5">
                      {truncatedPrincipal}
                    </p>
                  </div>
                  {principal && (
                    <button
                      type="button"
                      onClick={handleCopyPrincipal}
                      className="ml-3 flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-smooth shrink-0"
                      aria-label="Copy principal ID"
                      data-ocid="settings-copy-principal"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Profile link */}
                <Link
                  to="/profile"
                  className="flex items-center justify-between w-full p-3 rounded-xl bg-primary/10 border border-primary/25 hover:bg-primary/20 transition-smooth group"
                  data-ocid="settings-goto-profile"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        Edit Profile
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Update your display name and details
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-smooth" />
                </Link>
              </div>
            </section>

            {/* ── Notifications & Preferences ── */}
            <section
              className="glass-card"
              data-ocid="settings-preferences"
              aria-labelledby="preferences-heading"
            >
              <h2
                id="preferences-heading"
                className="text-sm font-semibold text-foreground mb-5"
              >
                Notifications & Preferences
              </h2>

              <div className="space-y-1">
                {NOTIF_SETTINGS.map((setting, index) => (
                  <div key={setting.id}>
                    <div className="flex items-center justify-between py-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                          <setting.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <Label
                            htmlFor={`toggle-${setting.id}`}
                            className="text-sm font-medium text-foreground cursor-pointer"
                          >
                            {setting.label}
                          </Label>
                          <p className="text-xs text-muted-foreground mt-0.5 truncate">
                            {setting.description}
                          </p>
                        </div>
                      </div>
                      <Switch
                        id={`toggle-${setting.id}`}
                        checked={toggles[setting.id] ?? false}
                        onCheckedChange={() =>
                          handleToggle(setting.id, setting.storageKey)
                        }
                        className="shrink-0 ml-4"
                        data-ocid={`toggle-${setting.id}`}
                      />
                    </div>
                    {index < NOTIF_SETTINGS.length - 1 && (
                      <div className="border-t border-white/5" />
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
}
