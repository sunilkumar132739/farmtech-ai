import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Shield, Wifi, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const headlineLines = t.heroHeadline.split("\n");

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero-section"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-farmtech.dim_1400x800.jpg"
          alt="Indian farmland at golden hour"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent" />
      </div>

      {/* Floating ambient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full bg-accent/15 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          {/* Accuracy badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Badge
              className="glass px-4 py-1.5 text-sm font-semibold border-accent/40 text-accent gap-2"
              data-ocid="accuracy-badge"
            >
              <Shield className="w-3.5 h-3.5" />
              95% Disease Detection Accuracy
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            {headlineLines.map((line) => (
              <span
                key={line}
                className={`block ${headlineLines.indexOf(line) === 1 ? "text-primary" : "text-foreground"}`}
              >
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            {t.heroSubheadline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
          >
            <Link to="/dashboard">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-xl transition-smooth gap-2"
                data-ocid="hero-cta-primary"
              >
                <Zap className="w-4 h-4" />
                {t.heroCTA}
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="glass border-white/20 text-foreground hover:bg-white/15 font-medium px-8 gap-2"
              onClick={scrollToFeatures}
              data-ocid="hero-cta-secondary"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <Wifi className="w-4 h-4 text-primary" />
              <span>{t.heroSecondaryText}</span>
            </div>
            <span className="hidden sm:block text-border">|</span>
            <span className="text-accent font-medium">
              10,000+ Farmers Empowered
            </span>
          </motion.div>
        </div>

        {/* Live sensor preview card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="hidden lg:block"
        >
          <LiveSensorPreview />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10"
      >
        <span className="text-xs tracking-widest uppercase">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-0.5 h-6 bg-gradient-to-b from-accent/60 to-transparent rounded"
        />
      </motion.div>
    </section>
  );
}

function LiveSensorPreview() {
  return (
    <div className="relative">
      <div className="glass-card rounded-3xl p-6 border border-primary/30 shadow-glass-lg">
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Live Sensor Feed
            </p>
            <p className="font-semibold text-foreground mt-0.5">
              Field Block A — North Zone
            </p>
          </div>
          <span className="flex items-center gap-1.5 text-xs bg-primary/20 text-primary px-3 py-1 rounded-full font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Live
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            {
              label: "Soil Moisture",
              value: "68%",
              icon: "💧",
              color: "text-blue-400",
              sub: "Optimal",
            },
            {
              label: "Nitrogen (N)",
              value: "140 mg/kg",
              icon: "🌿",
              color: "text-primary",
              sub: "High",
            },
            {
              label: "pH Level",
              value: "6.8",
              icon: "⚗️",
              color: "text-accent",
              sub: "Neutral",
            },
            {
              label: "Temperature",
              value: "28°C",
              icon: "🌡️",
              color: "text-orange-400",
              sub: "Normal",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl p-3 border border-white/10"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-base">{s.icon}</span>
                <span
                  className={`text-xs font-medium ${s.color} bg-current/10 px-2 py-0.5 rounded-full opacity-90`}
                >
                  {s.sub}
                </span>
              </div>
              <p className={`font-bold text-lg ${s.color}`}>{s.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-xl p-3 border border-accent/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center text-lg">
              ☀️
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">Solar Battery</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: "88%" }}
                  />
                </div>
                <span className="text-xs text-accent font-bold shrink-0">
                  88%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating badge */}
      <div className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl text-xs font-bold text-accent border border-accent/30 shadow-glow-accent">
        ✓ All Systems Nominal
      </div>
    </div>
  );
}
