/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Navy - brand primary
        primary: {
          DEFAULT: "#1a2236",
          50: "#f1f3f8",
          100: "#dde2ee",
          200: "#b8c2d8",
          300: "#8d9bbe",
          400: "#5f719f",
          500: "#3a4d7e",
          600: "#2a3a63",
          700: "#1a2236",
          800: "#101627",
          900: "#070b18",
        },
        // Orange - CTA / accent
        accent: {
          DEFAULT: "#FF6B35",
          light: "#FF8A5C",
          dark: "#E84F1C",
          50: "#fff5f0",
          100: "#ffe6d8",
          200: "#ffc7a8",
          300: "#ffa478",
          400: "#ff8350",
          500: "#FF6B35",
          600: "#E84F1C",
          700: "#bf3a0e",
          800: "#8c2a09",
          900: "#561904",
        },
        dark: "#111827",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "Noto Sans KR",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        heading: ["Montserrat", "Pretendard", "sans-serif"],
      },
    },
  },
  plugins: [],
};
