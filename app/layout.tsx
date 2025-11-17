import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patiharn Liangkobkit | Data Scientist & AI Engineer | Thailand",
  description: "Data Scientist & AI Engineer specialized in Artificial Intelligence with international experience in USA and Canada. Currently studying at KMUTT and University of Toronto. GPA 3.72",
  keywords: ["Patiharn Liangkobkit", "Data Scientist", "AI Engineer", "Machine Learning", "Computer Engineer", "Thailand", "University of Toronto", "KMUTT"],
  authors: [{ name: "Patiharn Liangkobkit" }],
  openGraph: {
    title: "Patiharn Liangkobkit - Data Scientist & AI Engineer",
    description: "Data Scientist & AI Engineer with international experience seeking opportunities in Thailand",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
