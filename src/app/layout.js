import { Chakra_Petch, Share_Tech_Mono } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const orbitron = Chakra_Petch({
  variable: "--font-orbitron",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const rajdhani = Share_Tech_Mono({
  variable: "--font-rajdhani",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://technocracy2026.vercel.app"),
  title: {
    default: "Technocracy 2026 | ECE Event Portal",
    template: "%s | Technocracy 2026",
  },
  description:
    "Official one-page website for Technocracy 2026 featuring Code Kachal and HackSpark.",
  keywords: [
    "Technocracy",
    "RUET",
    "ECE",
    "Code Kachal",
    "HackSpark",
    "Programming Contest",
    "Hackathon",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Technocracy 2026 | ECE Event Portal",
    description:
      "Join Code Kachal and HackSpark at Technocracy 2026. Registration, schedule, rulebooks, and event details in one place.",
    url: "/",
    siteName: "Technocracy 2026",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Technocracy 2026 event poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technocracy 2026 | ECE Event Portal",
    description:
      "Code Kachal + HackSpark event portal with registration links, timeline, and participation details.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
