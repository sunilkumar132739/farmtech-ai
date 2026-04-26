import SlideLayout from "../SlideLayout";

interface SlideProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const rows = [
  { feature: "Easy to use", agricare: true, fasal: false },
  { feature: "Voice in Hindi/Punjabi", agricare: true, fasal: false },
  { feature: "AI Crop Doctor", agricare: true, fasal: false },
  { feature: "Farmer Marketplace", agricare: true, fasal: true },
  { feature: "IoT Sensor Integration", agricare: true, fasal: true },
  { feature: "Affordable (< ₹500 setup)", agricare: true, fasal: false },
  { feature: "Government Schemes", agricare: true, fasal: false },
  { feature: "Local language first", agricare: true, fasal: false },
];

export default function Slide10CompetitiveAdv({ notesVisible }: SlideProps) {
  return (
    <SlideLayout
      title="Competitive Advantage"
      subtitle="AgriCare vs. Fasal and traditional methods"
      variant="dark"
      notesVisible={notesVisible}
      notesContent="Fasal is the market leader, but they target large farms and English-speaking operators. AgriCare targets the underserved small farmer — 100M+ potential users."
    >
      <div className="glass border border-white/20 rounded-2xl overflow-hidden animate-stagger-2">
        <table className="w-full text-sm font-body">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left px-6 py-3 text-foreground/60 font-semibold">
                Feature
              </th>
              <th className="text-center px-6 py-3">
                <span className="text-accent font-display font-bold text-base">
                  AgriCare ✓
                </span>
              </th>
              <th className="text-center px-6 py-3 text-foreground/50 font-semibold">
                Fasal / Others
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.feature}
                className={`border-b border-white/5 ${
                  i % 2 === 0 ? "bg-white/2" : ""
                }`}
              >
                <td className="px-6 py-3 text-foreground/80">{row.feature}</td>
                <td className="text-center px-6 py-3">
                  {row.agricare ? (
                    <span className="text-accent font-bold text-lg">✓</span>
                  ) : (
                    <span className="text-foreground/30">✗</span>
                  )}
                </td>
                <td className="text-center px-6 py-3">
                  {row.fasal ? (
                    <span className="text-foreground/50">✓</span>
                  ) : (
                    <span className="text-destructive/70 font-bold">✗</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SlideLayout>
  );
}
