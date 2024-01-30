import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const fontMontserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontClashGrotesk = localFont({
  src: "./clash-grotesk.ttf",
  variable: "--font-clash-grotesk",
  display: "swap",
});

export const fontLinearGrotesk = localFont({
  src: "./linear-grotesk-bold.otf",
  variable: "--font-linear-grotesk",
  display: "swap",
});
export const fonts = `${fontMontserrat.variable} ${fontClashGrotesk.variable} ${fontLinearGrotesk.variable}`;
