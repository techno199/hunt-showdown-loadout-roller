import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gt-sectra-fine': ['GT Sectra Fine'],
        'crimson-text': ['Crimson Text']
      },
      colors: {
        'col-1': 'rgb(65 74 75)',
        'col-2': 'rgb(171 171 171)',
        'col-3': 'rgb(133 133 133)',
        'col-4': 'rgb(27 27 27)',
        'col-5': 'rgb(215 38 61)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
