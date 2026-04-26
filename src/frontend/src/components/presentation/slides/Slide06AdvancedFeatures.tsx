import SlideCard from "../SlideCard";
import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const features = [
  {
    icon: "📡",
    title: "IoT Sensor Integration",
    description:
      "Soil moisture, temperature & humidity sensors — real-time cloud sync.",
    variant: "highlighted" as const,
  },
  {
    icon: "💧",
    title: "Smart Irrigation Alerts",
    description: "Auto alerts when soil is dry. Controls water pump remotely.",
    variant: "default" as const,
  },
  {
    icon: "🩺",
    title: "AI Crop Doctor",
    description:
      "Upload a photo → instant disease detection with medicine & dosage.",
    variant: "highlighted" as const,
  },
  {
    icon: "🌦️",
    title: "Hyperlocal Weather Alerts",
    description: "Rain, frost, and heat stress warnings 2–3 hours in advance.",
    variant: "default" as const,
  },
  {
    icon: "🗣️",
    title: "Voice in Hindi/Punjabi",
    description: "Tap & listen instructions in the farmer's native language.",
    variant: "default" as const,
  },
  {
    icon: "🛒",
    title: "Farmer Marketplace",
    description:
      "Sell crops directly to buyers. Live mandi vs. buyer price comparison.",
    variant: "highlighted" as const,
  },
];

export default function Slide06AdvancedFeatures({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="Advanced Features"
      subtitle="Planned Innovation — What sets AgriCare apart"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="These six features represent our innovation thesis. Each addresses a specific failure point in the current market — Fasal doesn't do all of these."
    >
      <div className="grid grid-cols-3 gap-4 animate-stagger-2">
        {features.map((f) => (
          <SlideCard
            key={f.title}
            icon={f.icon}
            title={f.title}
            description={f.description}
            variant={f.variant}
          />
        ))}
      </div>
    </SlideLayout>
  );
}
