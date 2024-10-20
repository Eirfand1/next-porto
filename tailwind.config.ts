import type { Config } from "tailwindcss";
import daisyui from 'daisyui'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'steel': 'rgb(229 231 235)'
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["cupcake", "dark", "garden", "dim"],
  }, 
};
export default config;
