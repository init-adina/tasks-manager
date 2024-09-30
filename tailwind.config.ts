import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "test-color": generateHSLColors(0, 0),
      },
    },
  },

  plugins: [],
};

function generateHSLColors(hue: number, saturation: number) {
  const result: Record<number, string> = {};

  result[50] = `hsl(${hue}, ${saturation}%, 95%)`;

  for (let i = 1; i <= 9; i++) {
    result[100 * i] = `hsl(${hue}, ${saturation}%, ${90 - 10 * (i - 1)}%)`;
  }

  return result;
}

export default config;
