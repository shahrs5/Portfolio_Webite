/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-bg': '#FFFDF5',
        'neo-fg': '#000000',
        'neo-accent': '#FF6B6B',
        'neo-secondary': '#FFD93D',
        'neo-muted': '#C4B5FD',
      },
      fontFamily: {
        'grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'none': 'none',
        'neo-sm': '4px 4px 0px 0px #000',
        'neo-md': '8px 8px 0px 0px #000',
        'neo-lg': '12px 12px 0px 0px #000',
        'neo-xl': '16px 16px 0px 0px #000',
        'neo-white': '8px 8px 0px 0px #fff',
      },
      animation: {
        'spin-slow': 'spin-slow 10s linear infinite',
      },
      keyframes: {
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
