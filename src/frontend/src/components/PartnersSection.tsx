import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CreditCard,
  Handshake,
  Shield,
  ShoppingCart,
} from "lucide-react";
import { motion } from "motion/react";

const partners = [
  {
    name: "HDFC Bank",
    role: "Credit Partner",
    description:
      "Farmers get instant Kisan Credit Card access and crop-linked microloans with no collateral required — disbursed directly to their accounts.",
    icon: CreditCard,
    feature: "₹50,000 Avg. Loan Size",
    badge: "Banking",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/25",
    ocid: "partner-hdfc",
  },
  {
    name: "ICICI Lombard",
    role: "Insurance Partner",
    description:
      "Parametric crop insurance triggers automatic payouts when IoT sensors detect drought, flooding, or disease events — no claim paperwork needed.",
    icon: Shield,
    feature: "Auto-Payout on Events",
    badge: "Insurance",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/25",
    ocid: "partner-icici",
  },
  {
    name: "ITC / BigBasket",
    role: "Market Linkage",
    description:
      "Verified quality scores from our sensors unlock premium pricing on ITC's e-Choupal network and BigBasket's direct-from-farm sourcing platform.",
    icon: ShoppingCart,
    feature: "18% Better Farm Gate Price",
    badge: "Market",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/25",
    ocid: "partner-itc",
  },
];

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-24 relative overflow-hidden"
      data-ocid="partners-section"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="glass border-primary/30 text-primary mb-4 px-4 py-1.5 font-medium gap-2">
            <Handshake className="w-3.5 h-3.5" />
            Partner Ecosystem
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            From Field to <span className="text-accent">Financial Freedom</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We connect farmers to India's largest financial and agri-commerce
            institutions — turning data into credit, insurance, and market
            access.
          </p>
        </motion.div>

        {/* Partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {partners.map((partner, i) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`glass-card rounded-3xl border ${partner.border} group hover:scale-[1.02] transition-smooth relative overflow-hidden`}
                data-ocid={partner.ocid}
              >
                {/* Subtle background glow */}
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full ${partner.bg} blur-2xl opacity-60 pointer-events-none`}
                />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${partner.bg} flex items-center justify-center group-hover:scale-110 transition-smooth`}
                    >
                      <Icon className={`w-7 h-7 ${partner.color}`} />
                    </div>
                    <Badge
                      className={`glass text-xs font-medium ${partner.color} border-current/30`}
                    >
                      {partner.badge}
                    </Badge>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-foreground mb-0.5">
                    {partner.name}
                  </h3>
                  <p className={`text-sm font-semibold ${partner.color} mb-3`}>
                    {partner.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {partner.description}
                  </p>

                  <div
                    className={`glass rounded-xl px-4 py-3 border ${partner.border} flex items-center justify-between`}
                  >
                    <span className={`font-bold text-sm ${partner.color}`}>
                      {partner.feature}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ${partner.color} group-hover:translate-x-1 transition-transform duration-200`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Full ecosystem callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="glass-card rounded-3xl border border-accent/20 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 text-center"
        >
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Our growing ecosystem spans{" "}
            <span className="text-foreground font-semibold">
              12+ institutional partners
            </span>{" "}
            — from input suppliers and FPOs to state government agri
            departments. Join the network that's rebuilding rural India's value
            chain.
          </p>
          <motion.div className="mt-6 flex flex-wrap justify-center items-center gap-3">
            {[
              "NABARD",
              "e-Choupal",
              "Grameen Bank",
              "APMC Digital",
              "FPO Network",
              "AgriStack",
            ].map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.07 }}
                className="glass rounded-full px-4 py-1.5 text-sm text-muted-foreground border border-white/15 hover:border-primary/30 hover:text-foreground transition-smooth cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
