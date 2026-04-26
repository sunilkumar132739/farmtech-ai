import SlideCard from "../SlideCard";
import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

export default function Slide02Intro({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="Introduction"
      subtitle="What is AgriCare?"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="AgriCare bridges the gap between complex technology and everyday farming. Built by students, designed for India's 100M+ farmers."
    >
      <div className="grid grid-cols-2 gap-6 animate-stagger-2">
        <div className="col-span-2 glass-card p-8">
          <p className="text-xl text-foreground/80 font-body leading-relaxed">
            AgriCare is a smart agriculture platform that empowers farmers in
            remote areas with{" "}
            <span className="text-accent font-semibold">
              real-time data and actionable guidance
            </span>{" "}
            — designed for teachers, judges, and early-stage investors.
          </p>
        </div>

        <SlideCard
          icon="🎯"
          title="Our Goal"
          description="Help every farmer make better decisions using technology — without needing a tech background."
        />
        <SlideCard
          icon="📱"
          title="The Platform"
          description="A web app connected to smart IoT sensors that translates raw data into simple, money-saving actions."
          variant="highlighted"
        />
      </div>
    </SlideLayout>
  );
}
