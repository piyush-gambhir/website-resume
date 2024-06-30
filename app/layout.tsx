import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

const inter = GeistSans;

export const metadata: Metadata = {
  title: "Piyush Gambhir • Computer Science Engineer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full h-efull min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
