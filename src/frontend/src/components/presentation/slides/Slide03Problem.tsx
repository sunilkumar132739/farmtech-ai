import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const problems = [
  {
    icon: "🎲",
    title: "Farmers rely on guesswork",
    stat: "70%",
    statLabel: "decisions with no data",
  },
  {
    icon: "📡",
    title: "No real-time soil or weather data",
    stat: "0",
    statLabel: "sensor coverage in villages",
  },
  {
    icon: "🦠",
    title: "Crop diseases detected too late",
    stat: "₹1.5L",
    statLabel: "avg annual loss per farmer",
  },
  {
    icon: "📉",
    title: "Farmers miss the best market price",
    stat: "40%",
    statLabel: "below fair price sold",
  },
];

export default function Slide03Problem({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="The Problem"
      subtitle="Why Indian farmers are losing money every season"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="These four problems compound each other — guesswork leads to late disease detection, which leads to poor yields, which forces bad market deals."
    >
      <div className="grid grid-cols-2 gap-5 animate-stagger-2">
        {problems.map((p) => (
          <div key={p.title} className="glass-card flex items-start gap-4">
            <span className="text-3xl mt-1">{p.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="font-body text-foreground/90 font-medium leading-snug">
                {p.title}
              </p>
              <div className="flex items-baseline gap-1.5 mt-2">
                <span className="font-display text-2xl font-bold text-accent">
                  {p.stat}
                </span>
                <span className="text-xs text-foreground/50">
                  {p.statLabel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
