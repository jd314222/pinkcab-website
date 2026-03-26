import type { Metadata } from "next";
import { Teachers } from "next/font/google";
import "./globals.css";

const teachers = Teachers({
  variable: "--font-teachers",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PinkCab | Safe Rides for Bobcats",
  description: "A women-run ride-sharing application for female-identifying Ohio University students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${teachers.variable} antialiased`}>
      <body className="min-h-screen bg-white dark:bg-slate-950 font-teachers">
        {children}
      </body>
    </html>
  );
}
