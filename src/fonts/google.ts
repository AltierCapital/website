import { Montserrat } from "next/font/google";

const fontMontserrat = Montserrat({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fonts = `${fontMontserrat.variable}`;
