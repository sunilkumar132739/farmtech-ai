import SlideNav from "@/components/presentation/SlideNav";
import SlideRenderer from "@/components/presentation/SlideRenderer";
import { useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

const TOTAL_SLIDES = 12;
const AUTO_ADVANCE_INTERVAL = 5000;

export default function Presentation() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [notesVisible, setNotesVisible] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(
    () => setCurrentSlide((s) => Math.min(s + 1, TOTAL_SLIDES - 1)),
    [],
  );
  const goPrev = useCallback(
    () => setCurrentSlide((s) => Math.max(s - 1, 0)),
    [],
  );
  const goExit = useCallback(() => navigate({ to: "/" }), [navigate]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "Escape") {
        goExit();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, goExit]);

  // Auto-advance
  useEffect(() => {
    if (autoAdvance) {
      autoRef.current = setInterval(() => {
        setCurrentSlide((s) => {
          if (s >= TOTAL_SLIDES - 1) {
            setAutoAdvance(false);
            return s;
          }
          return s + 1;
        });
      }, AUTO_ADVANCE_INTERVAL);
    }
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [autoAdvance]);

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="w-screen h-screen overflow-hidden relative bg-background"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      data-ocid="presentation-root"
    >
      <SlideNav
        currentSlide={currentSlide}
        totalSlides={TOTAL_SLIDES}
        autoAdvance={autoAdvance}
        notesVisible={notesVisible}
        onPrev={goPrev}
        onNext={goNext}
        onExit={goExit}
        onToggleAuto={() => setAutoAdvance((v) => !v)}
        onToggleNotes={() => setNotesVisible((v) => !v)}
        onGoToSlide={setCurrentSlide}
      />
      <SlideRenderer
        slideIndex={currentSlide}
        totalSlides={TOTAL_SLIDES}
        notesVisible={notesVisible}
      />
    </div>
  );
}
