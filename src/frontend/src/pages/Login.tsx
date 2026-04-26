import { useNavigate } from "@tanstack/react-router";
import { Leaf, Loader2, ShieldCheck, Sprout, Wifi, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    desc: "Decentralized identity — no passwords, no data leaks",
  },
  {
    icon: Wifi,
    title: "Real-time Data",
    desc: "Live IoT sensor readings from your farm, anywhere",
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    desc: "Smart recommendations that save water and boost yield",
  },
  {
    icon: Leaf,
    title: "Multi-language",
    desc: "Full support in Hindi, Punjabi, Marathi, Kannada, Telugu",
  },
];

export default function Login() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate({ to: "/dashboard" });
    }
  }, [isAuthenticated, navigate]);

  async function handleLogin() {
    setIsSigningIn(true);
    try {
      await login();
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Authentication failed. Please try again.";
      toast.error("Login failed", {
        description: msg,
        duration: 5000,
      });
    } finally {
      setIsSigningIn(false);
    }
  }

  const busy = isLoading || isSigningIn;

  return (
    <div
      className="auth-container relative overflow-hidden"
      data-ocid="login-page"
    >
      {/* Decorative background blobs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-secondary/10 blur-3xl" />
        {/* Leaf pattern overlay */}
        <svg
          className="absolute bottom-0 left-0 w-80 h-80 opacity-5 text-primary"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M100 10 C60 10, 10 50, 10 100 C10 150, 60 190, 100 190 C140 190, 190 150, 190 100 C190 50, 140 10, 100 10Z M100 30 C130 30, 170 60, 170 100 C170 140, 130 170, 100 170 C70 170, 30 140, 30 100 C30 60, 70 30, 100 30Z" />
          <path d="M100 50 C100 50, 50 80, 50 100 C50 120, 80 140, 100 140 C100 140, 100 100, 100 50Z" />
          <path d="M100 50 C100 50, 150 80, 150 100 C150 120, 120 140, 100 140 C100 140, 100 100, 100 50Z" />
        </svg>
        <svg
          className="absolute top-0 right-0 w-64 h-64 opacity-5 text-accent rotate-180"
          viewBox="0 0 200 200"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M100 10 C60 10, 10 50, 10 100 C10 150, 60 190, 100 190 C140 190, 190 150, 190 100 C190 50, 140 10, 100 10Z M100 50 C100 50, 50 80, 50 100 C50 120, 80 140, 100 140 C100 140, 100 100, 100 50Z" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: branding + features (desktop only) */}
        <div className="hidden md:flex flex-col gap-6 animate-slide-in-left">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-glass-md">
              <Sprout className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                FarmTech <span className="text-accent">AI</span>
              </h1>
              <p className="text-xs text-muted-foreground tracking-wide uppercase">
                Smart Agriculture Platform
              </p>
            </div>
          </div>

          {/* Hero text */}
          <div>
            <h2 className="font-display text-4xl font-bold text-foreground leading-tight">
              Your farm's <span className="text-accent">digital brain</span>,
              <br />
              always with you.
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Monitor soil moisture, temperature, crop health, and get
              AI-powered recommendations — all in your language.
            </p>
          </div>

          {/* Feature list */}
          <div className="grid grid-cols-1 gap-3 mt-2">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className="flex items-start gap-3 animate-slide-in-left"
                style={{
                  animationDelay: `${0.1 + i * 0.08}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 mt-0.5">
                  <f.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {f.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2 mt-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 w-fit">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            <p className="text-xs text-muted-foreground">
              Trusted by{" "}
              <span className="text-foreground font-semibold">2,400+</span>{" "}
              farmers across India
            </p>
          </div>
        </div>

        {/* Right: login card */}
        <div
          className="auth-card animate-slide-up shadow-glass-lg"
          data-ocid="login-card"
        >
          {/* Mobile logo */}
          <div className="flex items-center gap-3 md:hidden">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-md">
              <Sprout className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-foreground">
                FarmTech <span className="text-accent">AI</span>
              </p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">
                Smart Agriculture Platform
              </p>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Welcome to FarmTech AI
            </h2>
            <p className="text-muted-foreground text-sm mt-1">
              Log in securely to manage your smart farm
            </p>
          </div>

          {/* Internet Identity CTA */}
          <div className="space-y-4">
            {/* II Button — solar yellow CTA */}
            <button
              type="button"
              className="auth-button-ii"
              onClick={handleLogin}
              disabled={busy}
              data-ocid="btn-login-ii"
              aria-label="Sign in with Internet Identity"
            >
              {busy ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <div className="w-6 h-6 rounded-full bg-black/15 flex items-center justify-center">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              )}
              {busy ? "Signing in…" : "Sign in with Internet Identity"}
            </button>

            {/* Sub-text — exact requirement */}
            <div className="flex items-start gap-2.5 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Secure, passwordless login powered by the Internet Computer
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-transparent text-muted-foreground">
                What you get
              </span>
            </div>
          </div>

          {/* Feature highlights grid */}
          <div className="grid grid-cols-2 gap-2">
            {[
              { emoji: "🌱", label: "Soil Analytics" },
              { emoji: "🌡️", label: "IoT Monitoring" },
              { emoji: "💧", label: "Smart Irrigation" },
              { emoji: "📈", label: "Income Tracker" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-smooth"
              >
                <span className="text-sm">{item.emoji}</span>
                <span className="text-xs text-foreground font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground">
            By continuing, you agree to FarmTech AI's{" "}
            <button type="button" className="text-primary hover:underline">
              terms of service
            </button>{" "}
            and{" "}
            <button type="button" className="text-primary hover:underline">
              privacy policy
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
