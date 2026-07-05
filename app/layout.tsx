import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css";
import { AppShell } from "../components/ui/AppShell";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luma",
  description: "Luma is a premium media platform for Movies, TV Shows, Anime, and Reading.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} bg-black`}>
      <body className="antialiased min-h-screen bg-black text-primary-text">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
