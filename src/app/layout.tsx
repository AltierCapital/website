import { Navbar } from "@/components/layout/navbar";
import { fonts } from "@/fonts/google";
import "@/styles/globals.css";
import { cn } from "@/utils/classnames";
import type { Metadata } from "next";
import Image from "next/image";
import SkyBackground from "~/images/sky-background.svg";

const title = "Altier Capital";
const description = "Exclusive self-help group serving the community.";

export const metadata: Metadata = {
  description,
  openGraph: {
    description,
    locale: "fr-FR",
    siteName: title,
    title,
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
    <body className="flex min-h-screen flex-1 flex-col font-sans antialiased">
      <Navbar />

      <Image
        src={SkyBackground}
        alt="Sky Background"
        className="object-cover w-full h-full absolute top-0 left-0"
      />

      <main className="flex min-w-0 flex-auto flex-col">{children}</main>
    </body>
  </html>
);

export default RootLayout;
