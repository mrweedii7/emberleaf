import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#10261d',
        moss: '#6f7f52',
        copper: '#c47a4a',
        cream: '#f6efe3',
        ink: '#1a1714'
      },
      fontFamily: { sans: ['Inter', 'sans-serif'], serif: ['Georgia', 'serif'] }
    }
  },
  plugins: []
};
export default config;
