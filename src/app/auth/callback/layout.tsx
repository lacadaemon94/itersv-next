import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Iter Admin Login",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AuthCallbackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
