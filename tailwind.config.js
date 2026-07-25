/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fffde0',
          100: '#fff9b3',
          200: '#fff380',
          300: '#ffed4d',
          400: '#FFD700',
          500: '#e6c200',
          600: '#b89a00',
          700: '#8a7300',
          800: '#5c4d00',
          900: '#2e2600',
        },
        sky: {
          400: '#00BFFF',
          500: '#00a8e6',
          600: '#0099cc',
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #0a0a1a 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFD700, #FFA500)',
        'sky-gradient': 'linear-gradient(135deg, #00BFFF, #0099cc)',
      },
      boxShadow: {
        'gold': '0 8px 24px rgba(255, 215, 0, 0.4)',
        'sky': '0 8px 24px rgba(0, 191, 255, 0.35)',
      },
    },
  },
  plugins: [],
};
