import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

export default function Slide12Conclusion({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      variant="dark"
      centered
      notesVisible={notesVisible}
      notesContent="Close with the vision: AgriCare is not just a website — it's a movement to empower India's 100M farmers with the technology they deserve."
    >
      <div className="flex flex-col items-center text-center gap-8 max-w-3xl">
        <div className="animate-stagger-1">
          <p className="text-foreground/60 font-body text-sm uppercase tracking-widest">
            Our Vision
          </p>
        </div>

        <div className="animate-stagger-2">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight">
            AgriCare is not just a website —
          </h2>
          <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mt-2 text-accent">
            it's a smart farming assistant.
          </h2>
        </div>

        <div className="animate-stagger-3 glass-card px-10 py-6 w-full">
          <p className="font-display text-2xl font-semibold text-foreground/90">
            Better Data → <span className="text-accent">Better Decisions</span>{" "}
            → Better Income
          </p>
        </div>

        <div className="animate-stagger-4 flex flex-col items-center gap-3">
          <p className="text-foreground/60 font-body text-lg">
            Empowering every farmer with the technology they deserve.
          </p>
          <span className="font-display font-bold text-3xl text-accent tracking-wide">
            AgriCare: Cultivating the Future
          </span>
        </div>

        <div
          className="flex items-center gap-8 text-sm text-foreground/40 font-body animate-stagger-4"
          style={{ animationDelay: "0.5s" }}
        >
          <span>📧 agricare@example.com</span>
          <span>📞 +91 98765 43210</span>
          <span>🌐 agricare.app</span>
        </div>
      </div>
    </SlideLayout>
  );
}
