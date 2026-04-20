import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomCursor } from "./CustomCursor";

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <CustomCursor />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
