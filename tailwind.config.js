import { darkTheme, themes } from './src/lib/config/themes';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,ts}'],
  daisyui: {
    themes,
    darkTheme,
  },
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat'],
        titi: ['Titillium Web'],
        serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: [
          'Quicksand',
          'system-ui',
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
