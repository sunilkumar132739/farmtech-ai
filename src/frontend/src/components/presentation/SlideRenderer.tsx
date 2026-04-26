import { useEffect, useState } from "react";
import {
  Slide01Title,
  Slide02Intro,
  Slide03Problem,
  Slide04Solution,
  Slide05CurrentFeatures,
  Slide06AdvancedFeatures,
  Slide07HowItWorks,
  Slide08TechStack,
  Slide09Benefits,
  Slide10CompetitiveAdv,
  Slide11FutureScope,
  Slide12Conclusion,
} from "./slides";

interface SlideRendererProps {
  slideIndex: number;
  totalSlides: number;
  notesVisible: boolean;
}

const SLIDES = [
  Slide01Title,
  Slide02Intro,
  Slide03Problem,
  Slide04Solution,
  Slide05CurrentFeatures,
  Slide06AdvancedFeatures,
  Slide07HowItWorks,
  Slide08TechStack,
  Slide09Benefits,
  Slide10CompetitiveAdv,
  Slide11FutureScope,
  Slide12Conclusion,
];

export default function SlideRenderer({
  slideIndex,
  totalSlides,
  notesVisible,
}: SlideRendererProps) {
  const [visible, setVisible] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(slideIndex);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => {
      setDisplayIndex(slideIndex);
      setVisible(true);
    }, 180);
    return () => clearTimeout(t);
  }, [slideIndex]);

  const SlideComponent = SLIDES[displayIndex] ?? SLIDES[0];

  return (
    <div
      className="absolute inset-0 pt-[56px] pb-10 overflow-hidden"
      data-ocid="slide-renderer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <div className="w-full h-full flex flex-col">
        <SlideComponent
          slideIndex={displayIndex}
          totalSlides={totalSlides}
          notesVisible={notesVisible}
        />
      </div>
    </div>
  );
}
