import "./globals.css";

import type { Metadata } from "next";

import { Inter } from "@/fonts/fonts";

export const metadata: Metadata = {
  title: "Next.JS Boilerplate",
  description: "Next.JS Boilerplate with TypeScript and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Inter.className}>{children}</body>
    </html>
  );
}
