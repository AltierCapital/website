import typographyPlugin from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import radixPlugin from "tailwindcss-radix";
import { fontFamily } from "tailwindcss/defaultTheme.js";
import plugin from "tailwindcss/plugin";

export default ({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    animatePlugin,
    radixPlugin,
    typographyPlugin,
    plugin(({ addUtilities }) => {
      addUtilities({
        ".no-scrollbar": {
          "& *": {
            "-ms-overflow-style": "none",
            scrollbarWidth: "none",
          },
          "& *::-webkit-scrollbar": {
            background: "transparent",
            display: "none",
            width: "0px",
          },
          "&::-webkit-scrollbar": {
            background: "transparent",
            display: "none",
            width: "0px",
          },
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        },
      });
    }),
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 4s linear infinite",
        "spin-slower": "spin 6s linear infinite",
        "spin-reverse": "spin-reverse 1s linear infinite",
        "spin-reverse-slow": "spin-reverse 4s linear infinite",
        "spin-reverse-slower": "spin-reverse 6s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        background: "hsl(var(--background))",
        border: "hsl(var(--border))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          danger: "hsl(var(--foreground-danger))",
        },
        input: {
          DEFAULT: "hsl(var(--input))",
          invalid: "hsl(var(--input-invalid))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        ring: {
          DEFAULT: "hsl(var(--ring))",
          invalid: "hsl(var(--foreground-danger))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
      fontFamily: {
        clashGrotesk: ["var(--font-clash-grotesk)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
    },
  },
} satisfies Config);
