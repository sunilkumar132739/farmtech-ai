import SlideCard from "../SlideCard";
import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

export default function Slide04Solution({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="Our Solution"
      subtitle="AgriCare — one platform, all the answers"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="AgriCare doesn't give farmers charts — it gives them instructions. That's the key difference from every other solution."
    >
      <div className="grid grid-cols-3 gap-5 animate-stagger-2">
        <SlideCard
          icon="📡"
          title="IoT Sensors"
          description="Soil moisture, temperature, and humidity — live from the field."
          variant="highlighted"
        />
        <SlideCard
          icon="🤖"
          title="AI Brain Insights"
          description="Converts raw sensor data into plain language: 'Water your crops tomorrow morning.'"
          variant="highlighted"
        />
        <SlideCard
          icon="🌐"
          title="Simple Web Platform"
          description="Works on any phone. No app install needed. Designed for non-technical farmers."
          variant="highlighted"
        />
      </div>
      <div className="mt-6 glass-card animate-stagger-3">
        <p className="text-center text-lg font-body text-foreground/80">
          Designed for ease of use —{" "}
          <span className="text-accent font-semibold">
            even for non-technical farmers in rural India.
          </span>
        </p>
      </div>
    </SlideLayout>
  );
}
