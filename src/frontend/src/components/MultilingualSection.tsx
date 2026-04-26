import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { languageNames } from "../i18n/translations";
import type { Language } from "../types";

interface LangCardData {
  lang: Language;
  flag: string;
  nativeName: string;
  sampleTitle: string;
  sampleSub: string;
  sampleCta: string;
  soilLabel: string;
  soilValue: string;
  phLabel: string;
  phValue: string;
  stateLabel: string;
}

const langCards: LangCardData[] = [
  {
    lang: "hi",
    flag: "🇮🇳",
    nativeName: "हिंदी",
    sampleTitle: "मिट्टी की नमी",
    sampleSub: "खेत A · उत्तर क्षेत्र",
    sampleCta: "विश्लेषण देखें",
    soilLabel: "नमी स्तर",
    soilValue: "68%",
    phLabel: "pH स्तर",
    phValue: "6.8",
    stateLabel: "उत्तर प्रदेश · बिहार · राजस्थान",
  },
  {
    lang: "mr",
    flag: "🇮🇳",
    nativeName: "मराठी",
    sampleTitle: "मातीतील ओलावा",
    sampleSub: "शेत अ · उत्तर भाग",
    sampleCta: "विश्लेषण पहा",
    soilLabel: "ओलावा पातळी",
    soilValue: "68%",
    phLabel: "pH पातळी",
    phValue: "6.8",
    stateLabel: "महाराष्ट्र · गोवा",
  },
  {
    lang: "kn",
    flag: "🇮🇳",
    nativeName: "ಕನ್ನಡ",
    sampleTitle: "ಮಣ್ಣಿನ ತೇವಾಂಶ",
    sampleSub: "ಜಮೀನು ಎ · ಉತ್ತರ ವಲಯ",
    sampleCta: "ವಿಶ್ಲೇಷಣೆ ನೋಡಿ",
    soilLabel: "ತೇವಾಂಶ ಮಟ್ಟ",
    soilValue: "68%",
    phLabel: "pH ಮಟ್ಟ",
    phValue: "6.8",
    stateLabel: "ಕರ್ನಾಟಕ · ತಮಿಳುನಾಡು",
  },
  {
    lang: "te",
    flag: "🇮🇳",
    nativeName: "తెలుగు",
    sampleTitle: "మట్టి తేమ",
    sampleSub: "పొలం A · ఉత్తర జోన్",
    sampleCta: "విశ్లేషణ చూడండి",
    soilLabel: "తేమ స్థాయి",
    soilValue: "68%",
    phLabel: "pH స్థాయి",
    phValue: "6.8",
    stateLabel: "తెలంగాణ · ఆంధ్ర ప్రదేశ్",
  },
];

export function MultilingualSection() {
  const { setLanguage, language } = useLanguage();

  return (
    <section
      id="multilingual"
      className="py-24 relative overflow-hidden"
      data-ocid="multilingual-section"
    >
      <div className="absolute inset-0 bg-background" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="glass border-accent/30 text-accent mb-4 px-4 py-1.5 font-medium gap-2">
            <Globe className="w-3.5 h-3.5" />
            Multilingual Accessibility
          </Badge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Built for <span className="text-accent">Every</span> Farmer
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Agriculture crosses every language barrier. Our platform speaks the
            farmer's mother tongue — from the Gangetic plains to the Deccan
            plateau.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {langCards.map((card, i) => (
            <motion.div
              key={card.lang}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <button
                type="button"
                onClick={() => setLanguage(card.lang)}
                className={`w-full text-left glass-card rounded-3xl border transition-smooth hover:scale-[1.02] group ${
                  language === card.lang
                    ? "border-accent/50 shadow-glow-accent bg-accent/5"
                    : "border-white/15 hover:border-primary/30"
                }`}
                data-ocid={`lang-card-${card.lang}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{card.flag}</span>
                    <div>
                      <p className="font-bold text-foreground leading-none">
                        {card.nativeName}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {languageNames[card.lang]}
                      </p>
                    </div>
                  </div>
                  {language === card.lang && (
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  )}
                </div>

                {/* Mock UI in native language */}
                <div className="glass rounded-2xl p-3 border border-white/10 mb-3">
                  <p className="font-semibold text-foreground text-sm mb-0.5">
                    {card.sampleTitle}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {card.sampleSub}
                  </p>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-primary/15 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">
                        {card.soilLabel}
                      </p>
                      <p className="font-bold text-primary text-sm">
                        {card.soilValue}
                      </p>
                    </div>
                    <div className="flex-1 bg-accent/15 rounded-lg p-2">
                      <p className="text-xs text-muted-foreground">
                        {card.phLabel}
                      </p>
                      <p className="font-bold text-accent text-sm">
                        {card.phValue}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`text-center py-2 rounded-xl text-xs font-semibold transition-smooth ${
                    language === card.lang
                      ? "bg-accent/20 text-accent"
                      : "bg-primary/15 text-primary group-hover:bg-primary/25"
                  }`}
                >
                  {card.sampleCta}
                </div>

                <p className="text-xs text-muted-foreground mt-3 text-center">
                  {card.stateLabel}
                </p>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 glass-card rounded-3xl border border-primary/20 text-center"
        >
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">
              Click any language card
            </span>{" "}
            above to switch the entire interface. Currently displaying in{" "}
            <span className="text-accent font-semibold">
              {languageNames[language]}
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
