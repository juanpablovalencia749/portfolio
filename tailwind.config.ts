import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#5c5ba6",
      },
      backgroundImage: {
        explosion: "url('/assets/bg-explosion.png')",
      },
    },
  },
  plugins: [],
}
export default config
