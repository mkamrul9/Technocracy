import { Orbitron, Rajdhani } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Technocracy 2026 | ECE Event Portal",
  description:
    "Official one-page website for Technocracy 2026 featuring Code Kachal and HackSpark.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body>
        <a className="skipLink" href="#main-content">
          Skip to content
        </a>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
