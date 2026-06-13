import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nadim Mahmud Shuvo | Software Engineer Portfolio",
  description:
    "Full-stack Software Engineer specializing in accessible, pixel-perfect, and performant web experiences using React, Next.js, and modern technologies.",
  keywords: [
    "Nadim Mahmud Shuvo",
    "Software Engineer",
    "Full-stack Developer",
    "React",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Nadim Mahmud Shuvo" }],
  openGraph: {
    title: "Nadim Mahmud Shuvo | Software Engineer Portfolio",
    description:
      "I build accessible, pixel-perfect, and performant web experiences using modern technologies.",
    type: "website",
    url: "https://nadimshuvo.netlify.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#06080f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#06080f] antialiased">{children}</body>
    </html>
  );
}
