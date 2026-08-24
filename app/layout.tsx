import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renuka Prasad | Freelance Software Engineer",
  description: "Software engineering for founders, startups and growing businesses. Full-stack products, backend systems, APIs and integrations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
