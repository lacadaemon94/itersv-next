import type { Metadata } from "next";
import { Source_Sans_3, Ubuntu, Ubuntu_Mono } from "next/font/google";
import { headers } from "next/headers";

import { HashScrollController } from "@/components/hash-scroll-controller";
import { baseMetadata } from "@/lib/seo";

import "./globals.css";

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const displayFont = Ubuntu({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
});

const monoFont = Ubuntu_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
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
    <html
      lang={locale}
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-[var(--bg)] font-[family:var(--font-body)] text-[var(--text)] antialiased"
      >
        <HashScrollController />
        {children}
      </body>
    </html>
  );
}
