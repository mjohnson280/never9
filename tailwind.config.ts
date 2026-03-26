import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#101114',
        sand: '#f3eee5',
        ember: '#d96c3d',
      },
      boxShadow: {
        glow: '0 24px 80px rgba(16, 17, 20, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
