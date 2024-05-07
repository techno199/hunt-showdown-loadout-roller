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
        'col-5': 'rgb(215 38 61)',
        'col-6': 'rgb(59 61 62)',
        'col-7': 'rgb(228 155 45)',
        'col-8': 'rgb(148 134 107)'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        glow: {
          '0%': {textShadow: '0px 0px 15px rgb(228 155 45), 0px 0px 15px rgb(228 155 45), 0px 0px 15px rgb(228 155 45)'},
          '15%': {textShadow: '0px 0px 15px rgb(228 155 45), 0px 0px 15px rgb(228 155 45)'},
          '20%': {textShadow: '0px 0px 15px rgb(228 155 45), 0px 0px 15px rgb(228 155 45)'},
          '21%': {textShadow: '0px 0px 15px rgb(228 155 45), 0px 0px 15px rgb(228 155 45), 0px 0px 15px rgb(228 155 45)'},
          '46%': {textShadow: '0px 0px 15px rgb(228 155 45), 0px 0px 15px rgb(228 155 45)'},
          '100%': {textShadow: '0px 0px 15px rgb(228 155 45), 0px 0px 15px rgb(228 155 45)'},
        }
      },
      animation: {
        glow: 'glow 5s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
export default config;
