import "./styles/app.css";
import { SessionProvider } from "./utils/SessionProvider";
import { Topbar } from "./components/topbar/Topbar";
import { Footer } from "./components/footer/Footer";
import Ubuntu from "@/assets/fonts/Ubuntu";

const ubuntu = Ubuntu;

export const metadata = {
  title: "Itersv | Aventuras Digitales - Diseño, Desarrolo y Lanzamiento ",
  description:
    "Lleva tus sueños a la era Digital, con las mejores prácticas en Diseño y Desarrollo de Web Apps en la región.",
  metadataBase: new URL('https://itersv.com/'),
  applicationName: "Itersv",
  generator: "Next.js",
  keywords: [
    "Itersv",
    "Agencia",
    "Digital",
    "Web Apps",
    "Diseño",
    "Desarrollo",
  ],
  authors: [{ name: "Javier Flores", url: "https://zjavier.com" }],
  colorScheme: "dark",
  creator: "Javier Flores",
  openGraph: {
    title: 'Itersv | Aventuras Digitales - Diseño, Desarrolo y Lanzamiento',
    description: 'Lleva tus sueños a la era Digital, con las mejores prácticas en Diseño y Desarrollo de Web Apps en la región.',
    url: 'https://itersv.com',
    siteName: 'Itersv',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Itersv',
    description: 'Lleva tus sueños a la era Digital, con las mejores prácticas en Diseño y Desarrollo de Web Apps en la región.',
    site: '@Iter_sv',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#040415" },
  ],
  manifest: "https://www.itersv.com/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={ubuntu.className}>
        <SessionProvider>
          <Topbar></Topbar>
          {children}
          <Footer></Footer>
        </SessionProvider>
      </body>
    </html>
  );
}
