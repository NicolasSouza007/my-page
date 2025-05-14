// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
        sans: ['var(--font-nunito)', 'sans-serif'], // sobrescreve padrão do Tailwind
      },
    },
  },
  plugins: [],
};



