import type { ReactNode } from "react";

type Variant = "default" | "highlighted";

interface SlideCardProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  variant?: Variant;
  className?: string;
}

export default function SlideCard({
  icon,
  title,
  description,
  variant = "default",
  className = "",
}: SlideCardProps) {
  return (
    <div
      className={`slide-card flex flex-col gap-3 ${
        variant === "highlighted"
          ? "border-accent/40 bg-accent/5"
          : "border-white/20"
      } ${className}`}
      data-ocid="slide-card"
    >
      {icon && (
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
            variant === "highlighted"
              ? "bg-accent/20 text-accent"
              : "bg-primary/20 text-primary-foreground"
          }`}
        >
          {icon}
        </div>
      )}
      <h3
        className={`font-display font-semibold text-lg leading-snug ${
          variant === "highlighted" ? "text-accent" : "text-foreground"
        }`}
      >
        {title}
      </h3>
      {description && (
        <p className="text-sm text-foreground/70 font-body leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
