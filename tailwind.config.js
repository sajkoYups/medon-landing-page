/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      colors: {
        primary: {
          DEFAULT: "#6200e2",
          light: "#b6a6dd",
          dark: "#330068",
          contrast: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ff7f00",
          light: "#ffbe83",
          dark: "#ef6c00",
          contrast: "#ffffff",
        },
        gray: {
          DEFAULT: "#e2e2e2",
          light: "#f4f4f4",
          dark: "#b5b5b5",
          darker: "#7a7a7a",
          darkest: "#555555",
        },
        departmentsCardColor: {
          DEFAULT: "#B5DBFF",
        },
        content: [
          "./src/app/**/*.{js,ts,jsx,tsx}",
          "./src/components/**/*.{js,ts,jsx,tsx}",
        ],
      },
    },
  },
  plugins: [],
};
