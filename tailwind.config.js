/** @type {import('tailwindcss').Config} */

import {platformSelect} from 'nativewind/theme';

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#F0F0F0',
        lightbg: '#F0F0F0',
      },
    },
  },
  plugins: [],
};
