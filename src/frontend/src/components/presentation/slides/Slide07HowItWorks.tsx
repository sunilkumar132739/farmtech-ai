import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const steps = [
  {
    icon: "🌱",
    label: "Sensors in the Field",
    desc: "Collect soil & weather data",
  },
  { icon: "☁️", label: "Cloud / Database", desc: "Data sent securely to cloud" },
  {
    icon: "🧠",
    label: "AI Processing",
    desc: "Analyze patterns & predict needs",
  },
  { icon: "📱", label: "Farmer's App", desc: "Simple instructions delivered" },
];

export default function Slide07HowItWorks({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="How It Works"
      subtitle="From field to phone in seconds"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="The pipeline is: sensor → cloud → AI → farmer. Each step reduces complexity for the end user. The farmer sees one clear action."
    >
      <div className="flex items-center justify-between gap-2 animate-stagger-2 mt-4">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2 flex-1">
            <div className="flex flex-col items-center text-center flex-1 glass-card py-8">
              <span className="text-5xl mb-3">{step.icon}</span>
              <span className="font-display font-semibold text-foreground text-base leading-snug">
                {step.label}
              </span>
              <span className="text-sm text-foreground/60 mt-1 font-body">
                {step.desc}
              </span>
              <div className="mt-3 text-xs font-mono text-accent font-bold">
                Step {i + 1}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div className="text-2xl text-accent/60 font-bold flex-shrink-0">
                →
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 glass-card animate-stagger-3 text-center">
        <p className="text-foreground/70 font-body text-lg">
          Result:{" "}
          <span className="text-accent font-semibold">
            "Kal paani dena hai" — spoken in the farmer's language.
          </span>
        </p>
      </div>
    </SlideLayout>
  );
}
