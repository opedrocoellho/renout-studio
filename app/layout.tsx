import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://renout-studio.pages.dev"),
  title: "Renout Studio | Barbearia em Belo Horizonte",
  description: "Cortes com precisão e atendimento com hora marcada em Cidade Nova, Belo Horizonte. Agende pelo WhatsApp.",
  openGraph: {
    title: "Renout Studio | Barbearia em Belo Horizonte",
    description: "Cortes com precisão. Estilo com identidade.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Renout Studio" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: { icon: "/images/logo.png", shortcut: "/images/logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
