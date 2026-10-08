// Theirs
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

// Ours
import { BgTexture } from "@/components/bg-texture";
import { Footer } from "@/components/footer";
import { Shero } from "@/components/shero";
import { Path } from "@/constants";
import { metaData } from "@/content/meta";
import { cn } from "@/lib/utils";
import "./globals.css";

const mono = Space_Grotesk({
  display: "swap",
  variable: "--font-heading",
  subsets: ["latin"],
  fallback: ["serif"],
  adjustFontFallback: false,
});

const sans = Inter({
  display: "swap",
  variable: "--font-sans",
  subsets: ["latin"],
  fallback: ["serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: Path.HOME.origin,
  title: metaData.title,
  description: metaData.description,
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
