import type { ReactNode } from "react";

type Variant = "dark" | "light" | "accent";

interface SlideLayoutProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: Variant;
  notesContent?: string;
  notesVisible?: boolean;
  centered?: boolean;
}

const bgMap: Record<Variant, string> = {
  dark: "gradient-bg",
  light: "bg-card",
  accent: "bg-primary/10",
};

export default function SlideLayout({
  title,
  subtitle,
  children,
  variant = "dark",
  notesContent,
  notesVisible,
  centered = false,
}: SlideLayoutProps) {
  return (
    <div
      className={`w-full h-full flex flex-col ${bgMap[variant]} relative overflow-hidden`}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />

      <div
        className={`relative z-10 flex-1 flex flex-col ${
          centered ? "items-center justify-center text-center" : "justify-start"
        } px-16 pt-10 pb-4 overflow-y-auto`}
      >
        {title && (
          <div className="mb-6 animate-stagger-1">
            <h1 className="slide-heading">{title}</h1>
            {subtitle && (
              <p className="text-foreground/60 text-xl font-body mt-2">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>

      {/* Speaker notes */}
      {notesVisible && notesContent && (
        <div className="relative z-20 bg-black/60 border-t border-white/10 px-16 py-3 text-sm text-foreground/70 font-body">
          <span className="text-accent font-semibold mr-2">Notes:</span>
          {notesContent}
        </div>
      )}
    </div>
  );
}
