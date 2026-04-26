import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

export default function Slide01Title({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      variant="dark"
      centered
      notesVisible={notesVisible}
      notesContent="Welcome everyone. AgriCare is a smart agriculture platform built to empower farmers with technology that's simple and actionable."
    >
      <div className="flex flex-col items-center text-center gap-6">
        <div className="animate-stagger-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-accent text-sm font-body font-semibold mb-4">
            🌱 Student Innovation Project
          </div>
        </div>

        <div className="animate-stagger-2">
          <h1 className="font-display font-bold text-7xl md:text-8xl leading-none text-accent">
            AgriCare
          </h1>
        </div>

        <div className="animate-stagger-3">
          <p className="font-display text-3xl md:text-4xl text-foreground/80 font-semibold">
            Smart Farming Made Simple
          </p>
        </div>

        <div className="animate-stagger-4">
          <p className="text-xl text-foreground/60 font-body max-w-xl">
            AI + IoT Based Agriculture Solution
          </p>
        </div>

        <div
          className="mt-4 flex items-center gap-8 text-sm text-foreground/50 font-body animate-stagger-4"
          style={{ animationDelay: "0.5s" }}
        >
          <span>🌾 IoT Sensors</span>
          <span>🤖 AI Insights</span>
          <span>📱 Farmer-First</span>
        </div>
      </div>
    </SlideLayout>
  );
}
