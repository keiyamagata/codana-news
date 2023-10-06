import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "10rem 1fr",
        mainMobile: "5rem 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
export default config;
