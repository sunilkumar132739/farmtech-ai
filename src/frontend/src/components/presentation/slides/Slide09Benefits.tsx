import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const benefits = [
  {
    icon: "💧",
    title: "Saves Water",
    metric: "30%",
    detail: "reduction in irrigation waste",
    color: "border-primary/30 bg-primary/5",
  },
  {
    icon: "🌾",
    title: "Increases Yield",
    metric: "25–35%",
    detail: "higher crop output per season",
    color: "border-primary/40 bg-primary/5",
  },
  {
    icon: "🦠",
    title: "Reduces Disease Loss",
    metric: "60%",
    detail: "fewer losses from late detection",
    color: "border-destructive/30 bg-destructive/5",
  },
  {
    icon: "💰",
    title: "Improves Income",
    metric: "128%",
    detail: "average income growth reported",
    color: "border-accent/40 bg-accent/5",
  },
  {
    icon: "📱",
    title: "Easy to Use",
    metric: "< 2 min",
    detail: "to get first actionable insight",
    color: "border-secondary/40 bg-secondary/5",
  },
];

export default function Slide09Benefits({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="Benefits to Farmers"
      subtitle="Real impact, measurable results"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="These metrics are based on comparable smart farming deployments in India and Maharashtra pilot studies. Our target is to validate these with our own pilot."
    >
      <div className="grid grid-cols-5 gap-4 animate-stagger-2">
        {benefits.map((b) => (
          <div
            key={b.title}
            className={`glass border rounded-2xl p-5 flex flex-col items-center text-center ${b.color}`}
          >
            <span className="text-4xl mb-3">{b.icon}</span>
            <div className="font-display text-3xl font-bold text-accent mb-1">
              {b.metric}
            </div>
            <div className="font-display font-semibold text-foreground text-sm mb-1">
              {b.title}
            </div>
            <div className="text-xs text-foreground/50 font-body">
              {b.detail}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
