import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DRC Advogados | Advocacia Empresarial Premium em São Paulo",
  description: "Soluções jurídicas sofisticadas em Direito Empresarial. Estratégia, técnica e compromisso com resultados para empresas nacionais e internacionais.",
  keywords: "advocacia empresarial, direito empresarial, advogados são paulo, consultoria jurídica, direito tributário, compliance, direito societário",
  authors: [{ name: "DRC Advogados" }],
  openGraph: {
    title: "DRC Advogados | Advocacia Empresarial",
    description: "Excelência jurídica que impulsiona resultados e fortalece negócios.",
    type: "website",
    locale: "pt_BR",
    siteName: "DRC Advogados",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F8F4EC",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-ink antialiased">{children}</body>
    </html>
  );
}
