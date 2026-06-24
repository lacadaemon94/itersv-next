import type { Metadata } from "next";
import { Source_Sans_3, Ubuntu, Ubuntu_Mono } from "next/font/google";
import { headers } from "next/headers";

import { HashScrollController } from "@/components/hash-scroll-controller";
import { baseMetadata } from "@/lib/seo";

import "./globals.css";

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Ubuntu({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const monoFont = Ubuntu_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = baseMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const pathname = requestHeaders.get("x-iter-pathname") || "/";
  const locale = pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} bg-[var(--bg)] font-[family:var(--font-body)] text-[var(--text)] antialiased`}
      >
        <HashScrollController />
        {children}
      </body>
    </html>
  );
}
