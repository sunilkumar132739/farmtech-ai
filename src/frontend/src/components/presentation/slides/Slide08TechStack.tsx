import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const stack = [
  {
    layer: "Frontend",
    items: ["React + TypeScript", "Tailwind CSS", "Glassmorphism UI"],
    icon: "🖥️",
    color: "bg-white/5 border-white/10",
  },
  {
    layer: "Hardware",
    items: [
      "ESP32 Microcontroller",
      "Soil Moisture Sensor",
      "DHT11 (Temp/Humidity)",
    ],
    icon: "🔧",
    color: "bg-primary/10 border-primary/30",
  },
  {
    layer: "Backend",
    items: ["Cloud Database", "REST API", "Real-time Sync"],
    icon: "☁️",
    color: "bg-secondary/20 border-secondary/30",
  },
  {
    layer: "AI / ML",
    items: ["Crop Disease Detection", "Yield Prediction", "Price Forecasting"],
    icon: "🧠",
    color: "bg-accent/10 border-accent/30",
  },
];

export default function Slide08TechStack({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="Technology Stack"
      subtitle="Built for scale, designed for simplicity"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="The stack is chosen for rapid iteration and low cost. ESP32 sensors cost under ₹500 each. The AI layer will use open-source models fine-tuned on Indian crop data."
    >
      <div className="grid grid-cols-2 gap-5 animate-stagger-2">
        {stack.map((s) => (
          <div
            key={s.layer}
            className={`glass border rounded-2xl p-6 ${s.color}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-display font-bold text-xl text-foreground">
                {s.layer}
              </h3>
            </div>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground/80 font-body"
                >
                  <span className="text-accent text-xs">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
