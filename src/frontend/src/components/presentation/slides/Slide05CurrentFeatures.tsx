import SlideCard from "../SlideCard";
import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const features = [
  {
    icon: "📊",
    title: "Informational Dashboard",
    description:
      "Farming conditions at a glance — soil, weather, and crop status.",
  },
  {
    icon: "💡",
    title: "Smart Agriculture Concepts",
    description:
      "Integrated smart farming principles to guide everyday decisions.",
  },
  {
    icon: "🖥️",
    title: "User-Friendly Interface",
    description:
      "Clean, minimal design built for users with any level of tech skill.",
  },
  {
    icon: "📋",
    title: "Basic Farmer Guidance",
    description:
      "Step-by-step recommendations for irrigation, fertilizer, and harvest timing.",
  },
];

export default function Slide05CurrentFeatures({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="Current Features"
      subtitle="Live on the platform today"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="These features are fully functional in the current version. The next slide shows the innovation roadmap."
    >
      <div className="grid grid-cols-2 gap-5 animate-stagger-2">
        {features.map((f) => (
          <SlideCard
            key={f.title}
            icon={f.icon}
            title={f.title}
            description={f.description}
          />
        ))}
      </div>
    </SlideLayout>
  );
}
