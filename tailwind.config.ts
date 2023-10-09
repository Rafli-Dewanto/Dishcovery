import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      colors: {
        core: {
          text: {
            50: "#fef3e6",
            100: "#fee7cd",
            200: "#fdcf9b",
            300: "#fcb769",
            400: "#fba037",
            500: "#fa8805",
            600: "#c86d04",
            700: "#965103",
            800: "#643602",
            900: "#321b01",
            950: "#190e01",
          },
          background: {
            50: "#fff3e5",
            100: "#ffe7cc",
            200: "#ffcf99",
            300: "#ffb866",
            400: "#ffa033",
            500: "#ff8800",
            600: "#cc6d00",
            700: "#995200",
            800: "#663600",
            900: "#331b00",
            950: "#1a0e00",
          },
          primary: {
            50: "#fff3e5",
            100: "#ffe7cc",
            200: "#ffcf99",
            300: "#ffb866",
            400: "#ffa033",
            500: "#ff8800",
            600: "#cc6d00",
            700: "#995200",
            800: "#663600",
            900: "#331b00",
            950: "#1a0e00",
          },
          secondary: {
            50: "#fff3e6",
            100: "#fee8cd",
            200: "#fdd19b",
            300: "#fdba68",
            400: "#fca336",
            500: "#fb8c04",
            600: "#c97003",
            700: "#975402",
            800: "#643802",
            900: "#321c01",
            950: "#190e00",
          },
          accent: {
            50: "#fce8e8",
            100: "#fad1d1",
            200: "#f5a3a3",
            300: "#f07575",
            400: "#eb4747",
            500: "#e61919",
            600: "#b81414",
            700: "#8a0f0f",
            800: "#5c0a0a",
            900: "#2e0505",
            950: "#170303",
          },
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
