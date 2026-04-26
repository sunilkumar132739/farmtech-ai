import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const roadmap = [
  {
    quarter: "Q3 2025",
    items: [
      "Pilot launch with 50 farmers",
      "IoT sensor deployment",
      "AI Crop Doctor beta",
    ],
    status: "upcoming",
  },
  {
    quarter: "Q4 2025",
    items: [
      "Mobile app launch",
      "Voice assistant Hindi/Punjabi",
      "Smart irrigation automation",
    ],
    status: "upcoming",
  },
  {
    quarter: "Q1 2026",
    items: [
      "Marketplace launch",
      "Govt scheme integration",
      "PM Kisan API link",
    ],
    status: "future",
  },
  {
    quarter: "2026+",
    items: [
      "Pan-India expansion",
      "Full IoT automation",
      "500K+ farmers on platform",
    ],
    status: "future",
  },
];

export default function Slide11FutureScope({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="Future Scope"
      subtitle="Roadmap to scale across India"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="We have a clear 18-month roadmap. The pilot with 50 farmers will validate our core metrics before we pursue Series A funding."
    >
      <div className="grid grid-cols-4 gap-4 animate-stagger-2">
        {roadmap.map((r) => (
          <div
            key={r.quarter}
            className={`glass border rounded-2xl p-5 ${
              r.status === "upcoming"
                ? "border-accent/30 bg-accent/5"
                : "border-white/15"
            }`}
          >
            <div
              className={`text-xs font-mono font-bold mb-3 ${
                r.status === "upcoming" ? "text-accent" : "text-foreground/50"
              }`}
            >
              {r.quarter}
            </div>
            <ul className="space-y-2">
              {r.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm font-body text-foreground/80"
                >
                  <span
                    className={`mt-0.5 text-xs ${
                      r.status === "upcoming"
                        ? "text-accent"
                        : "text-foreground/30"
                    }`}
                  >
                    ▸
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-5 glass-card animate-stagger-3 text-center">
        <p className="text-foreground/70 font-body">
          Target:{" "}
          <span className="text-accent font-semibold">
            500,000 farmers by 2026
          </span>{" "}
          across 5 Indian states.
        </p>
      </div>
    </SlideLayout>
  );
}
