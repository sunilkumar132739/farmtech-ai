import { ArrowLeft, ArrowRight, FileText, Pause, Play, X } from "lucide-react";

interface SlideNavProps {
  currentSlide: number;
  totalSlides: number;
  autoAdvance: boolean;
  notesVisible: boolean;
  onPrev: () => void;
  onNext: () => void;
  onExit: () => void;
  onToggleAuto: () => void;
  onToggleNotes: () => void;
  onGoToSlide: (index: number) => void;
}

export default function SlideNav({
  currentSlide,
  totalSlides,
  autoAdvance,
  notesVisible,
  onPrev,
  onNext,
  onExit,
  onToggleAuto,
  onToggleNotes,
  onGoToSlide,
}: SlideNavProps) {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 glass border-b border-white/10"
        data-ocid="slide-nav-top"
      >
        <span className="font-display font-bold text-lg text-accent tracking-wide select-none">
          AgriCare
        </span>
        <span className="text-sm font-body text-foreground/70 tabular-nums select-none">
          {currentSlide + 1} / {totalSlides}
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleNotes}
            aria-label="Toggle speaker notes"
            data-ocid="notes-toggle"
            className={`p-2 rounded-lg transition-smooth hover:bg-white/10 ${
              notesVisible ? "text-accent" : "text-foreground/60"
            }`}
          >
            <FileText size={16} />
          </button>
          <button
            type="button"
            onClick={onToggleAuto}
            aria-label={
              autoAdvance ? "Pause auto-advance" : "Start auto-advance"
            }
            data-ocid="auto-advance-toggle"
            className={`p-2 rounded-lg transition-smooth hover:bg-white/10 ${
              autoAdvance ? "text-accent" : "text-foreground/60"
            }`}
          >
            {autoAdvance ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button
            type="button"
            onClick={onExit}
            aria-label="Exit presentation"
            data-ocid="exit-presentation"
            className="p-2 rounded-lg text-foreground/60 hover:text-foreground hover:bg-white/10 transition-smooth"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute top-[52px] left-0 right-0 z-50 h-0.5 bg-white/10">
        <div
          className="h-full bg-accent transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
          data-ocid="progress-bar"
        />
      </div>

      {/* Prev arrow */}
      <button
        type="button"
        onClick={onPrev}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
        data-ocid="prev-slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 glass rounded-full text-foreground/70 hover:text-foreground hover:bg-white/20 transition-smooth disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ArrowLeft size={20} />
      </button>

      {/* Next arrow */}
      <button
        type="button"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next slide"
        data-ocid="next-slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 glass rounded-full text-foreground/70 hover:text-foreground hover:bg-white/20 transition-smooth disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ArrowRight size={20} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5">
        {Array.from(
          { length: totalSlides },
          (_, i) => `slide-dot-${i + 1}`,
        ).map((dotId, i) => (
          <button
            key={dotId}
            type="button"
            onClick={() => onGoToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            data-ocid={`dot-${i}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentSlide
                ? "bg-accent w-4"
                : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </>
  );
}
