import { fonts } from "@/app/fonts";
import { Navbar } from "@/components/layout/navbar";
import "@/styles/globals.css";
import { cn } from "@/utils/classnames";
import type { Metadata } from "next";
import Image from "next/image";
import SkyBackground from "~/images/sky-background.svg";

const title = "Altier Capital";
const description = "Exclusive self-help group serving the community.";
const url = "https://www.altiercapital.com";

export const metadata: Metadata = {
  description,
  metadataBase: new URL(url),
  alternates: {
    canonical: url,
  },
  openGraph: {
    description,
    locale: "fr-FR",
    siteName: title,
    title,
    url,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: {
    default: title,
    template: `%s | ${title}`,
  },
};

const RootLayout = ({ children }: { readonly children: React.ReactNode }) => (
  <html lang="fr" className={cn("min-w-[360px] scroll-smooth bg-black", fonts)}>
    <body className="flex !h-[unset] min-h-screen flex-1 flex-col font-sans antialiased">
      <Navbar />

      <Image
        src={SkyBackground}
        alt="Sky Background"
        className="object-cover w-full h-full absolute top-0 left-0 z-0"
      />

      <main className="flex w-full max-w-[100vw] flex-col">{children}</main>
    </body>
  </html>
);

export default RootLayout;
