import type { Metadata } from "next";
import "./globals.css";
import { geistSans, geistMono } from "./fonts";

export const metadata: Metadata = {
  title: "YouTube Video Summarizer | Recall",
  description: "Summarize YouTube Videos, Articles, Blog Posts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
