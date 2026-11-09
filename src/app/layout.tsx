import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { BgTexture } from "@/components/bg-texture";
import { Footer } from "@/components/footer";
import { Shero } from "@/components/shero";
import { PATH } from "@/constants";
import { metaData } from "@/content/meta";
import { cn } from "@/lib/utils";
import "./globals.css";

const mono = Space_Grotesk({
  display: "swap",
  variable: "--font-heading",
  subsets: ["latin"],
  fallback: ["monospace"],
  adjustFontFallback: false,
});

const sans = Inter({
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
  fallback: ["sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: PATH.home.origin,
  alternates: {
    canonical: PATH.home.href,
  },
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  authors: [{ name: metaData.author.name, url: metaData.author.website }],
  formatDetection: {
    telephone: false,
  },
  category: "music",
};

export const viewport: Viewport = {
  themeColor: "#000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={cn(sans.variable, mono.variable)}
      data-scroll-behavior="smooth"
      lang="en"
      dir="ltr"
    >
      <body>
        <BgTexture />
        <Shero />
        <main className="pbs-4 pbe-52">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
