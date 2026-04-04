/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        forge: {
          'primary': '#1a1a1a',
          'primary-content': '#faf9f6',
          'secondary': '#8b7355',
          'secondary-content': '#faf9f6',
          'accent': '#c4a97d',
          'accent-content': '#1a1a1a',
          'neutral': '#1a1a1a',
          'neutral-content': '#faf9f6',
          'base-100': '#faf9f6',
          'base-200': '#f0ede6',
          'base-300': '#e0dbd1',
          'base-content': '#1a1a1a',
          'info': '#8b7355',
          'success': '#4a7c59',
          'warning': '#c4a97d',
          'error': '#9e3b3b',
        },
      },
      {
        'forge-dark': {
          'primary': '#c4a97d',
          'primary-content': '#1a1a1a',
          'secondary': '#8b7355',
          'secondary-content': '#faf9f6',
          'accent': '#c4a97d',
          'accent-content': '#1a1a1a',
          'neutral': '#111111',
          'neutral-content': '#e8e4dc',
          'base-100': '#1a1a1a',
          'base-200': '#222222',
          'base-300': '#333333',
          'base-content': '#e8e4dc',
          'info': '#8b7355',
          'success': '#4a7c59',
          'warning': '#c4a97d',
          'error': '#c44a4a',
        },
      },
    ],
  },
};
