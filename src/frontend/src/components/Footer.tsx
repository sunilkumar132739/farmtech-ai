import { Separator } from "@/components/ui/separator";
import { Leaf, Mail, MapPin, Phone, Sprout } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "IoT Sensors", href: "#iot" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Crop AI", href: "#ai" },
  ],
  partners: [
    { label: "HDFC Bank Credit", href: "#partners" },
    { label: "ICICI Lombard Insurance", href: "#partners" },
    { label: "ITC Market Linkage", href: "#partners" },
    { label: "BigBasket Network", href: "#partners" },
  ],
  support: [
    { label: "Help Center", href: "#help" },
    { label: "Contact Us", href: "#contact" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
};

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Brand block */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-md">
                <Sprout className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                FarmTech <span className="text-accent">AI</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering every Indian farmer with precision agriculture
              technology — from soil to sale.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@farmtech.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>1800-FARM-TECH (Toll Free)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {(["product", "partners", "support"] as const).map((section) => (
              <div key={section}>
                <h4 className="font-semibold text-foreground capitalize mb-4 text-sm tracking-wide uppercase">
                  {section}
                </h4>
                <ul className="space-y-2">
                  {footerLinks[section].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Impact bar */}
        <div className="glass rounded-2xl p-4 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: "95%", label: "Disease Detection Accuracy" },
            { value: "25–35%", label: "Yield Increase" },
            { value: "128%", label: "Income Growth" },
            { value: "30 Days", label: "Battery Backup" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-lg font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <Separator className="bg-border/40 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Leaf className="w-3 h-3 text-primary" />
            <span>© {year} FarmTech AI. All rights reserved.</span>
          </div>
          <div>
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline transition-colors"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
