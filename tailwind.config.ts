import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ECBA82',
          secondary: '#4F7CAC',
          accent: '#A24936',
          neutral: '#22333B',
          'base-100': '#272727',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
