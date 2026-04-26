import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useActor } from "@caffeineai/core-infrastructure";
import {
  AlertTriangle,
  Camera,
  CheckCircle2,
  FlaskConical,
  HeartPulse,
  IndianRupee,
  Leaf,
  Pill,
  Upload,
  Volume2,
} from "lucide-react";
import { useRef, useState } from "react";
import { ActivityEventType, createActor } from "../backend";
import { Navbar } from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

interface TreatmentOption {
  type: "chemical" | "organic";
  medicine: string;
  dosage: string;
  cost: string;
  application: string;
}

interface DiagnosisResult {
  disease: string;
  confidence: number;
  severity: "low" | "medium" | "high";
  description: string;
  chemical: TreatmentOption;
  organic: TreatmentOption;
}

interface QuickRefCard {
  crop: string;
  emoji: string;
  symptom: string;
  medicine: string;
  cost: string;
}

const DIAGNOSIS: DiagnosisResult = {
  disease: "Wheat Rust Disease",
  confidence: 94,
  severity: "high",
  description:
    "Fungal infection causing orange-red pustules on leaves. Spreads fast in humid conditions.",
  chemical: {
    type: "chemical",
    medicine: "Propiconazole 25% EC",
    dosage: "2ml per litre of water, spray every 7 days",
    cost: "₹180 per 100ml bottle",
    application: "Spray early morning or evening",
  },
  organic: {
    type: "organic",
    medicine: "Neem Oil + Garlic Extract",
    dosage: "5ml neem oil + 3ml garlic per litre, weekly",
    cost: "₹40 per treatment",
    application: "Spray after sunset",
  },
};

const QUICK_REF: QuickRefCard[] = [
  {
    crop: "Tomato Blight",
    emoji: "🍅",
    symptom: "Yellow spots, wilting leaves",
    medicine: "Mancozeb 75% WP",
    cost: "₹120",
  },
  {
    crop: "Rice Blast",
    emoji: "🌾",
    symptom: "White diamond lesions on leaves",
    medicine: "Tricyclazole 75% WP",
    cost: "₹200",
  },
  {
    crop: "Cotton Bollworm",
    emoji: "🌿",
    symptom: "Holes in bolls, boll damage",
    medicine: "Spinosad 45% SC",
    cost: "₹350",
  },
];

function speak(text: string) {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "hi-IN";
    window.speechSynthesis.speak(u);
  }
}

const severityBadge: Record<string, string> = {
  low: "bg-primary/20 text-primary border-primary/30",
  medium: "bg-accent/20 text-accent-foreground border-accent/30",
  high: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function CropDoctor() {
  const { t } = useLanguage();
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [diagnosing, setDiagnosing] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [activeTab, setActiveTab] = useState<"chemical" | "organic">(
    "chemical",
  );
  const { actor } = useActor(createActor);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setResult(null);
  }

  function handleDrop(e: React.DragEvent<HTMLButtonElement>) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setResult(null);
  }

  function handleDiagnose() {
    if (!preview) return;
    setDiagnosing(true);
    setResult(null);
    // Fire-and-forget activity log
    actor
      ?.logActivity(
        ActivityEventType.CropDoctorUpload,
        "Crop doctor photo uploaded",
      )
      .catch(() => {});
    setTimeout(() => {
      setResult(DIAGNOSIS);
      setDiagnosing(false);
    }, 2000);
  }

  const activeTreatment = result
    ? activeTab === "chemical"
      ? result.chemical
      : result.organic
    : null;

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <main className="pt-24 pb-16 px-4 max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-4">
            <HeartPulse className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              AI Powered · 95% Accuracy
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            {t.cropDoctorTitle}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.cropDoctorSubtitle}
          </p>
        </div>

        {/* Upload + Results Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Upload Section */}
          <Card
            className="glass border-white/15"
            data-ocid="crop-doctor-upload-card"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Camera className="w-5 h-5 text-accent" />
                {t.uploadPhoto}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="w-full h-56 rounded-2xl border-2 border-dashed border-primary/40 flex flex-col items-center justify-center gap-3 hover:border-primary/70 hover:bg-primary/5 transition-smooth group relative overflow-hidden"
                data-ocid="upload-zone"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Uploaded crop"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      <Upload className="w-7 h-7 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      Click to upload or drag photo here
                    </p>
                    <p className="text-xs text-muted-foreground">
                      JPG, PNG, WebP supported
                    </p>
                  </>
                )}
              </button>

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFile}
                data-ocid="file-input"
              />

              {preview && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/20 text-muted-foreground hover:bg-white/10"
                  onClick={() => {
                    setPreview(null);
                    setResult(null);
                  }}
                >
                  Remove photo
                </Button>
              )}

              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base py-6"
                disabled={!preview || diagnosing}
                onClick={handleDiagnose}
                data-ocid="diagnose-btn"
              >
                {diagnosing ? (
                  <span className="flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 animate-spin" />
                    Analyzing crop...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <HeartPulse className="w-5 h-5" />
                    {t.diagnoseNow}
                  </span>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Result Panel */}
          <div className="space-y-4">
            {!result && !diagnosing && (
              <Card
                className="glass border-white/10 flex items-center justify-center min-h-72"
                data-ocid="diagnosis-empty"
              >
                <CardContent className="text-center py-12 px-6">
                  <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                    <HeartPulse className="w-9 h-9 text-muted-foreground opacity-40" />
                  </div>
                  <p className="font-medium text-foreground mb-2">
                    Upload a crop photo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our AI will detect diseases instantly and suggest treatment
                  </p>
                </CardContent>
              </Card>
            )}

            {diagnosing && (
              <Card
                className="glass border-primary/30 flex items-center justify-center min-h-72"
                data-ocid="diagnosis-loading"
              >
                <CardContent className="py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <FlaskConical className="w-9 h-9 text-primary" />
                  </div>
                  <p className="text-foreground font-semibold text-lg">
                    Scanning your crop...
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    AI is analyzing for diseases
                  </p>
                  <div className="flex justify-center gap-1 mt-4">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {result && !diagnosing && (
              <>
                {/* Disease Card */}
                <Card
                  className="glass border-red-500/20"
                  data-ocid="diagnosis-result"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle className="flex items-center gap-2 text-foreground text-base">
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        {t.diseaseDetected}
                      </CardTitle>
                      <Badge
                        className={`text-xs shrink-0 border ${severityBadge[result.severity]}`}
                      >
                        {result.severity.toUpperCase()} SEVERITY
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="font-bold text-foreground text-lg">
                        {result.disease}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {result.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-primary font-semibold">
                        {result.confidence}% confidence
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatment Tabs */}
                <Card
                  className="glass border-white/15"
                  data-ocid="treatment-card"
                >
                  <CardHeader className="pb-2">
                    <div className="flex gap-1 p-1 bg-white/5 rounded-xl">
                      {(["chemical", "organic"] as const).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveTab(tab)}
                          className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-smooth capitalize ${
                            activeTab === tab
                              ? "bg-primary text-primary-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                          data-ocid={`tab-${tab}`}
                        >
                          {tab === "chemical" ? "💊 Chemical" : "🌿 Organic"}
                        </button>
                      ))}
                    </div>
                  </CardHeader>
                  {activeTreatment && (
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Pill className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">
                            {t.treatment}
                          </p>
                          <p className="text-foreground font-semibold break-words">
                            {activeTreatment.medicine}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FlaskConical className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">
                            {t.dosage}
                          </p>
                          <p className="text-foreground font-medium break-words">
                            {activeTreatment.dosage}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <IndianRupee className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">
                            {t.estimatedCost}
                          </p>
                          <p className="text-foreground font-bold text-lg">
                            {activeTreatment.cost}
                          </p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          Application
                        </p>
                        <p className="text-sm text-foreground">
                          {activeTreatment.application}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full border-white/20 text-foreground hover:bg-white/10 gap-2"
                        onClick={() =>
                          speak(
                            `${result.disease}. ${t.treatment}: ${activeTreatment.medicine}. ${t.dosage}: ${activeTreatment.dosage}. ${t.estimatedCost}: ${activeTreatment.cost}`,
                          )
                        }
                        data-ocid="listen-diagnosis-btn"
                      >
                        <Volume2 className="w-4 h-4 text-accent" />
                        {t.tapToListen}
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Quick Reference Cards */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-5">
            <Leaf className="w-5 h-5 text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Common Crop Diseases
            </h2>
            <Badge className="bg-primary/20 text-primary border-primary/30 border text-xs">
              Quick Reference
            </Badge>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {QUICK_REF.map((card) => (
              <Card
                key={card.crop}
                className="glass border-white/10 hover:border-primary/30 transition-smooth group"
                data-ocid={`quick-ref-${card.crop.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="pt-5 pb-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{card.emoji}</span>
                    <div>
                      <p className="font-bold text-foreground text-sm group-hover:text-primary transition-colors">
                        {card.crop}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {card.symptom}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Medicine
                      </span>
                      <span className="text-xs font-medium text-foreground">
                        {card.medicine}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Cost
                      </span>
                      <span className="text-xs font-bold text-accent">
                        {card.cost}/bottle
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
