import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"] });
const display = Playfair_Display({ variable: "--font-display", subsets: ["latin"] });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(
    basePath
      ? "https://opedrocoellho.github.io"
      : "https://renout-studio-bh.cibelebarbosa8821.chatgpt.site",
  ),
  title: "Renout Studio | Barbearia em Belo Horizonte",
  description: "Cortes com precisão e atendimento com hora marcada em Cidade Nova, Belo Horizonte. Agende pelo WhatsApp.",
  openGraph: {
    title: "Renout Studio | Barbearia em Belo Horizonte",
    description: "Cortes com precisão. Estilo com identidade.",
    images: [{ url: `${basePath}/og-v3.png`, width: 1200, height: 630, alt: "Renout Studio" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: [`${basePath}/og-v3.png`] },
  icons: { icon: `${basePath}/images/logo-transparent.png`, shortcut: `${basePath}/images/logo-transparent.png` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${sans.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
