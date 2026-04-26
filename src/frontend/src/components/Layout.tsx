import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

export function Layout({ children, fullWidth = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col gradient-bg">
      <Navbar />
      <main className={`flex-1 pt-16 ${fullWidth ? "" : ""}`}>{children}</main>
      <Footer />
    </div>
  );
}
