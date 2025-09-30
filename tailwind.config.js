  module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'], // Pode ser útil, mas não obrigatório
      },
    },
  },
  plugins: [],
  };