import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEAT | Blueprint Expansion AI Training",
  description:
    "A practical 12-week recruiting AI bootcamp for learning Claude, ChatGPT, workflows, and agent-building with confidence."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
