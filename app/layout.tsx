import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://renout-studio.pages.dev"),
  title: "Renout Studio | Barbearia em Belo Horizonte",
  description: "Cortes com precisão e atendimento com hora marcada em Cidade Nova, Belo Horizonte. Agende pelo WhatsApp.",
  openGraph: {
    title: "Renout Studio | Barbearia em Belo Horizonte",
    description: "Cortes com precisão. Estilo com identidade.",
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Renout Studio" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og-v2.png"] },
  icons: { icon: "/images/logo-transparent.png", shortcut: "/images/logo-transparent.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
