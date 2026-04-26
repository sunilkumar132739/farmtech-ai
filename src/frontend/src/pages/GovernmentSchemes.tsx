import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  BadgeCheck,
  Building2,
  CreditCard,
  ExternalLink,
  ScrollText,
  Search,
  Shield,
  ShoppingCart,
  Sprout,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

interface Scheme {
  id: string;
  name: string;
  nameHi: string;
  description: string;
  benefit: string;
  category: "subsidy" | "insurance" | "loan" | "income" | "market";
  icon: React.ElementType;
  color: string;
  deadline?: string;
  eligibility: string;
  cta: string;
  url: string;
}

const SCHEMES: Scheme[] = [
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana",
    nameHi: "प्रधानमंत्री फसल बीमा योजना",
    description:
      "Crop insurance at low premium — protect your crop from drought, flood, and disease.",
    benefit: "Coverage up to ₹2,00,000 per season",
    category: "insurance",
    icon: Shield,
    color: "border-blue-500/30",
    deadline: "Last date: June 30, 2026",
    eligibility: "All farmers growing notified crops",
    cta: "Apply Now",
    url: "https://pmfby.gov.in",
  },
  {
    id: "kcc",
    name: "Kisan Credit Card (KCC)",
    nameHi: "किसान क्रेडिट कार्ड",
    description:
      "Get instant funds for seeds, fertilizer, and equipment at lowest interest rates.",
    benefit: "Credit up to ₹3 lakh at 4% per year",
    category: "loan",
    icon: CreditCard,
    color: "border-accent/30",
    eligibility: "All farmers, sharecroppers, tenant farmers",
    cta: "Apply Now",
    url: "https://www.nabard.org",
  },
  {
    id: "pmksy",
    name: "PM Krishi Sinchai Yojana",
    nameHi: "प्रधानमंत्री कृषि सिंचाई योजना",
    description:
      "Save 50% water, increase yield by 40% with subsidized drip/sprinkler irrigation.",
    benefit: "55–90% subsidy on irrigation systems",
    category: "subsidy",
    icon: Sprout,
    color: "border-primary/30",
    eligibility: "All farmers with land documents",
    cta: "Apply Now",
    url: "https://pmksy.gov.in",
  },
  {
    id: "nfsm",
    name: "National Food Security Mission",
    nameHi: "राष्ट्रीय खाद्य सुरक्षा मिशन",
    description:
      "Free quality seeds distribution and training on modern farming techniques.",
    benefit: "Free certified seeds + expert training",
    category: "subsidy",
    icon: BadgeCheck,
    color: "border-primary/30",
    eligibility: "Small and marginal farmers",
    cta: "Check Eligibility",
    url: "https://nfsm.gov.in",
  },
  {
    id: "shc",
    name: "Soil Health Card Scheme",
    nameHi: "मृदा स्वास्थ्य कार्ड योजना",
    description:
      "Get your soil health card FREE — detailed fertilizer recommendations included.",
    benefit: "Free soil testing + card every 2 years",
    category: "subsidy",
    icon: Building2,
    color: "border-white/15",
    eligibility: "All farmers across India",
    cta: "Apply Now",
    url: "https://soilhealth.dac.gov.in",
  },
  {
    id: "enam",
    name: "eNAM — Electronic Market",
    nameHi: "ई-नाम — इलेक्ट्रॉनिक राष्ट्रीय कृषि बाजार",
    description:
      "Sell crops online at best prices — direct mandi access from your phone.",
    benefit: "Best price guarantee + instant payment",
    category: "market",
    icon: ShoppingCart,
    color: "border-accent/30",
    eligibility: "Any farmer with Aadhaar + bank account",
    cta: "Register Now",
    url: "https://enam.gov.in",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  subsidy: "bg-primary/20 text-primary",
  insurance: "bg-white/10 text-blue-300",
  loan: "bg-accent/20 text-accent",
  income: "bg-primary/20 text-primary",
  market: "bg-accent/20 text-accent",
};

const CATEGORY_LABELS: Record<string, string> = {
  subsidy: "Subsidy",
  insurance: "Insurance",
  loan: "Loan",
  income: "Income",
  market: "Market",
};

const STATES = [
  "Select State",
  "Punjab",
  "Haryana",
  "Uttar Pradesh",
  "Maharashtra",
  "Karnataka",
  "Andhra Pradesh",
  "Telangana",
  "Rajasthan",
  "Bihar",
  "West Bengal",
  "Gujarat",
  "Madhya Pradesh",
  "Tamil Nadu",
];

type FilterType =
  | "all"
  | "subsidy"
  | "insurance"
  | "loan"
  | "income"
  | "market";

export default function GovernmentSchemes() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>("all");
  const [landSize, setLandSize] = useState("");
  const [state, setState] = useState("Select State");
  const [eligibleSchemes, setEligibleSchemes] = useState<string[] | null>(null);

  const filtered =
    filter === "all" ? SCHEMES : SCHEMES.filter((s) => s.category === filter);

  const filters: { key: FilterType; label: string }[] = [
    { key: "all", label: "All Schemes" },
    { key: "income", label: "Income" },
    { key: "subsidy", label: "Subsidy" },
    { key: "insurance", label: "Insurance" },
    { key: "loan", label: "Loan" },
    { key: "market", label: "Market" },
  ];

  function handleApply(schemeName: string) {
    toast.info(
      `Redirecting to official government portal for ${schemeName}...`,
    );
  }

  function checkEligibility() {
    if (!landSize || state === "Select State") {
      toast.error("Please enter land size and select your state.");
      return;
    }
    const acres = Number(landSize);
    const qualified: string[] = ["PM-KISAN", "Soil Health Card Scheme", "eNAM"];
    if (acres <= 5) qualified.push("Kisan Credit Card (KCC)");
    if (acres >= 1) qualified.push("PM Fasal Bima Yojana");
    setEligibleSchemes(qualified);
    toast.success(`Found ${qualified.length} schemes for you!`);
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-4">
            <ScrollText className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Free money waiting for you
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            {t.schemesTitle}
          </h1>
          <p className="text-muted-foreground text-lg">
            Free money and support from the government — made easy
          </p>
        </div>

        {/* PM-KISAN Featured Banner */}
        <div
          className="mb-8 rounded-2xl p-6 md:p-8 border border-accent/40 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.28 0.08 40 / 0.85), oklch(0.35 0.13 118 / 0.7))",
          }}
          data-ocid="pmkisan-banner"
        >
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-primary/30 text-primary-foreground border border-primary/40 font-semibold">
                  ✓ ACTIVE SCHEME
                </Badge>
                <Badge className="bg-accent/20 text-accent border border-accent/30">
                  Featured
                </Badge>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                PM-KISAN Samman Nidhi
              </h2>
              <p className="text-accent text-xl font-bold mb-2">
                ₹6,000 per year — directly to your bank account
              </p>
              <p className="text-muted-foreground text-sm">
                Eligibility: All small and marginal farmers with less than 2
                hectares land
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6"
                onClick={() => handleApply("PM-KISAN")}
                data-ocid="pmkisan-apply-btn"
              >
                {t.applyNow}
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-foreground hover:bg-white/10 px-6"
                onClick={() => toast.info("Checking PM-KISAN status...")}
                data-ocid="pmkisan-status-btn"
              >
                Check Status
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6" data-ocid="scheme-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                filter === f.key
                  ? "bg-primary text-primary-foreground"
                  : "glass border border-white/15 text-muted-foreground hover:text-foreground"
              }`}
              data-ocid={`filter-${f.key}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Scheme Cards Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
          data-ocid="schemes-grid"
        >
          {filtered.map((scheme) => (
            <Card
              key={scheme.id}
              className={`glass border transition-smooth hover:border-primary/40 ${scheme.color}`}
              data-ocid={`scheme-card-${scheme.id}`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <scheme.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-foreground text-sm leading-tight line-clamp-2">
                        {scheme.name}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {scheme.nameHi}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={`${CATEGORY_COLORS[scheme.category]} shrink-0 text-xs`}
                  >
                    {CATEGORY_LABELS[scheme.category]}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {scheme.description}
                </p>

                <div className="rounded-lg bg-white/5 px-3 py-2 border border-white/10">
                  <p className="text-xs text-muted-foreground mb-0.5">
                    Benefit
                  </p>
                  <p className="text-sm font-semibold text-primary">
                    {scheme.benefit}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-muted-foreground mb-1">
                    Eligibility
                  </p>
                  <p className="text-xs text-foreground/80">
                    {scheme.eligibility}
                  </p>
                </div>

                {scheme.deadline && (
                  <p className="text-xs text-accent font-medium">
                    ⏰ {scheme.deadline}
                  </p>
                )}

                <div className="flex gap-2 pt-1">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm"
                    onClick={() => handleApply(scheme.name)}
                    data-ocid={`apply-btn-${scheme.id}`}
                  >
                    {scheme.cta}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-white/20 text-muted-foreground hover:text-foreground hover:bg-white/10 shrink-0"
                    onClick={() => window.open(scheme.url, "_blank")}
                    aria-label="Open official website"
                    data-ocid={`external-btn-${scheme.id}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Eligibility Checker */}
        <Card className="glass border-white/10" data-ocid="eligibility-checker">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Search className="w-4 h-4 text-accent" />
              Check Schemes I Qualify For
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div>
                <Label className="text-muted-foreground text-sm mb-2 block">
                  Land Size (acres)
                </Label>
                <Input
                  type="number"
                  placeholder="e.g. 2.5"
                  className="bg-white/5 border-white/15 text-foreground placeholder:text-muted-foreground"
                  value={landSize}
                  onChange={(e) => setLandSize(e.target.value)}
                  data-ocid="land-size-input"
                />
              </div>
              <div>
                <Label className="text-muted-foreground text-sm mb-2 block">
                  State
                </Label>
                <select
                  className="w-full h-10 px-3 rounded-lg bg-white/5 border border-white/15 text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-accent"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  data-ocid="state-select"
                >
                  {STATES.map((s) => (
                    <option
                      key={s}
                      value={s}
                      className="bg-card text-foreground"
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end">
                <Button
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  onClick={checkEligibility}
                  data-ocid="check-eligibility-btn"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {t.checkEligibility}
                </Button>
              </div>
            </div>

            {eligibleSchemes && (
              <div className="mt-2 space-y-2" data-ocid="eligible-schemes-list">
                <p className="text-sm font-semibold text-foreground mb-3">
                  ✅ You qualify for {eligibleSchemes.length} schemes:
                </p>
                {eligibleSchemes.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 border border-primary/30"
                  >
                    <BadgeCheck className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground font-medium">
                      {name}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="ml-auto text-primary hover:bg-primary/10 text-xs h-7 px-3"
                      onClick={() => handleApply(name)}
                    >
                      {t.applyNow}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
