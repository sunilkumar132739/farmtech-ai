import { Badge } from "@/components/ui/badge";
import { Cpu, IndianRupee, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const bigStats = [
  {
    icon: TrendingUp,
    value: "25–35%",
    label: "Yield Increase",
    description:
      "Farmers using FarmTech AI's precision irrigation and NPK guidance consistently harvest 25 to 35% more per acre than regional averages.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
    gradient: "from-primary/8 to-transparent",
    ocid: "metric-yield",
  },
  {
    icon: IndianRupee,
    value: "128%",
    label: "Income Growth",
    description:
      "By combining better yields, AI-driven market timing, and reduced input costs, enrolled farmers have more than doubled their net income.",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/30",
    gradient: "from-accent/8 to-transparent",
    ocid: "metric-income",
  },
];

const supportingStats = [
  {
    icon: Cpu,
    value: "95%",
    label: "Disease Detection Accuracy",
    color: "text-sky-400",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Active Farmers",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "₹4,200 Cr",
    label: "Farm Value Monitored",
    color: "text-accent",
  },
  {
    icon: IndianRupee,
    value: "30 Days",
    label: "Sensor Battery Backup",
    color: "text-orange-400",
  },
];

export function MetricsSection() {
  return (
    <section
      id="impact"
      className="py-24 relative overflow-hidden"
      data-ocid="metrics-section"
    >
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      {/* Decorative glow orbs */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="glass border-accent/30 text-accent mb-4 px-4 py-1.5 font-medium gap-2">
            <TrendingUp className="w-3.5 h-3.5" />
            Proven Impact at Scale
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Real Numbers, <span className="text-primary">Real Farmers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Our impact data comes from 10,000+ farmers across 8 Indian states,
            independently verified by partner organizations.
          </p>
        </motion.div>

        {/* Big stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {bigStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: i === 0 ? -32 : 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`glass-card rounded-3xl border ${stat.border} bg-gradient-to-br ${stat.gradient} group hover:scale-[1.02] transition-smooth`}
                data-ocid={stat.ocid}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`w-16 h-16 rounded-3xl ${stat.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth`}
                  >
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">
                      {stat.label}
                    </p>
                    <p
                      className={`font-display text-6xl font-bold ${stat.color} leading-none mb-3`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>

                {/* Progress visual */}
                <div className="mt-6 h-2 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: i === 0 ? "30%" : "78%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.4 + i * 0.1,
                      ease: "easeOut",
                    }}
                    className={`h-full rounded-full bg-gradient-to-r ${i === 0 ? "from-primary/60 to-primary" : "from-accent/60 to-accent"}`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Supporting stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="glass-card rounded-3xl border border-white/15"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {supportingStats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex flex-col items-center text-center p-6 gap-2"
                >
                  <Icon className={`w-6 h-6 ${s.color} mb-1`} />
                  <p className={`font-display text-3xl font-bold ${s.color}`}>
                    {s.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
