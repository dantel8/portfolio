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
        "v1-primary": {
          50: "#f2fcf1",
          100: "#e1f9df",
          200: "#c5f0c2",
          300: "#97e493",
          400: "#60ce5a",
          500: "#39b334",
          600: "#2a9425",
          700: "#247421",
          800: "#215c1f",
          900: "#1c4c1b",
          950: "#092a09",
        },
        "v1-neutral": {
          0: "#ffffff",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
        "v1-success": {
          100: "#F1FFF4",
          400: "#41CD84",
          600: "#5D836F",
        },
        "v1-warn": {
          100: "#FFF6E9",
          400: "#FF9A07",
          600: "#92611B",
        },
        "v1-error": {
          100: "#FFF0F0",
          300: "#FFACAC",
          400: "#FF5959",
          600: "#943F3F",
        },
        "v1-info": {
          100: "#F2FAFF",
          400: "#37A6F3",
          600: "#257EBB",
        },
      },
    },
  },
  plugins: [],
};
