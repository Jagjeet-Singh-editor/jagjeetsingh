import type { Metadata } from "next";
import "./globals.css";
import FilmGrain from "@/components/FilmGrain";
import Timecode from "@/components/Timecode";

export const metadata: Metadata = {
  title: "Jagjeet Singh — Video Editor",
  description:
    "Short-Form · Long-Form · AI Video · Music Videos · Wedding Films. Based in New Delhi.",
  openGraph: {
    title: "Jagjeet Singh — Video Editor",
    description:
      "From 30-second reels to full-length music videos — every frame with intention.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        <FilmGrain />
        <Timecode />
        {children}
      </body>
    </html>
  );
}
